'use client';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { Canvas, extend, useFrame, type ThreeElement } from '@react-three/fiber';
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei';
import {
  BallCollider,
  CuboidCollider,
  Physics,
  RigidBody,
  useRopeJoint,
  useSphericalJoint,
  type RapierRigidBody,
} from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

extend({ MeshLineGeometry, MeshLineMaterial });

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: ThreeElement<typeof MeshLineGeometry>;
    meshLineMaterial: ThreeElement<typeof MeshLineMaterial>;
  }
}

type Vec3 = [number, number, number];

interface LanyardProps {
  position?: Vec3;
  gravity?: Vec3;
  fov?: number;
  transparent?: boolean;
}

interface CardModel {
  nodes: { card: THREE.Mesh; clip: THREE.Mesh; clamp: THREE.Mesh };
  materials: { metal: THREE.Material };
}

const MOBILE_QUERY = '(max-width: 767px)';

function subscribeMobile(onChange: () => void) {
  const mql = window.matchMedia(MOBILE_QUERY);
  mql.addEventListener('change', onChange);
  return () => mql.removeEventListener('change', onChange);
}

function useIsMobile() {
  return useSyncExternalStore(
    subscribeMobile,
    () => window.matchMedia(MOBILE_QUERY).matches,
    () => false
  );
}

export default function Lanyard({
  position = [0, 0, 30],
  gravity = [0, -40, 0],
  fov = 20,
  transparent = true,
}: LanyardProps) {
  const isMobile = useIsMobile();

  return (
    <div className="relative z-10 w-full h-full flex justify-center items-center">
      <Canvas
        camera={{ position, fov }}
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{ alpha: transparent }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <ambientLight intensity={Math.PI} />
        <Physics gravity={gravity} timeStep={isMobile ? 1 / 30 : 1 / 60}>
          <Band isMobile={isMobile} />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer
            intensity={2}
            color="white"
            position={[0, -1, 5]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[-1, -1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={3}
            color="white"
            position={[1, 1, 1]}
            rotation={[0, 0, Math.PI / 3]}
            scale={[100, 0.1, 1]}
          />
          <Lightformer
            intensity={10}
            color="white"
            position={[-10, 0, 14]}
            rotation={[0, Math.PI / 2, Math.PI / 3]}
            scale={[100, 10, 1]}
          />
        </Environment>
      </Canvas>
    </div>
  );
}

// Scratch objects reused every frame (single Band instance).
const vec = new THREE.Vector3();
const ang = new THREE.Vector3();
const rot = new THREE.Vector3();
const dir = new THREE.Vector3();

// Required by MeshLineMaterial's constructor; the live value is driven by the `resolution` prop below.
const MESH_LINE_ARGS: [{ resolution: THREE.Vector2 }] = [{ resolution: new THREE.Vector2(1000, 1000) }];

const segmentProps = {
  type: 'dynamic' as const,
  canSleep: true,
  colliders: false as const,
  angularDamping: 1.5,
  linearDamping: 1.5,
};

function Band({ maxSpeed = 50, minSpeed = 0, isMobile = false }) {
  const band = useRef<THREE.Mesh<MeshLineGeometry>>(null);
  const fixed = useRef<RapierRigidBody>(null!);
  const j1 = useRef<RapierRigidBody>(null!);
  const j2 = useRef<RapierRigidBody>(null!);
  const j3 = useRef<RapierRigidBody>(null!);
  const card = useRef<RapierRigidBody>(null!);
  const lerped1 = useRef<THREE.Vector3 | null>(null);
  const lerped2 = useRef<THREE.Vector3 | null>(null);

  const { nodes, materials } = useGLTF('/card.glb') as unknown as CardModel;
  const texture = useTexture('/feriman-band.png', (t) => {
    const tex = t as THREE.Texture;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 16;
  });
  // Card faces are painted straight onto card.glb's UV layout (front: u 0..0.5, back: u 0.5..1, v 0..0.75), so the photo can never drift from the 3D card.
  const [faceGray, faceColor] = useTexture(['/card-photo-gray.webp', '/card-photo-color.webp'], (t) => {
    for (const tex of Array.isArray(t) ? t : [t]) {
      tex.flipY = false; // glTF UV convention: v=0 is the top row
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 16;
    }
  });

  const [curve] = useState(() => {
    const c = new THREE.CatmullRomCurve3([
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
      new THREE.Vector3(),
    ]);
    c.curveType = 'chordal';
    return c;
  });
  const [dragged, drag] = useState<THREE.Vector3 | false>(false);
  const [hovered, hover] = useState(false);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  useSphericalJoint(j3, card, [
    [0, 0, 0],
    [0, 1.5, 0],
  ]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => void (document.body.style.cursor = 'auto');
    }
  }, [hovered, dragged]);

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      [card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp());
      card.current?.setNextKinematicTranslation({
        x: vec.x - dragged.x,
        y: vec.y - dragged.y,
        z: vec.z - dragged.z,
      });
    }
    const tFixed = fixed.current?.translation();
    const t3 = j3.current?.translation();

    // Safety check for physics engine initialization (prevent NaN crashes)
    if (fixed.current && tFixed && t3 && !isNaN(tFixed.x) && !isNaN(t3.x) && band.current) {
      const smooth = (body: RapierRigidBody | null, slot: { current: THREE.Vector3 | null }) => {
        const tr = body?.translation();
        if (!tr || isNaN(tr.x)) return;
        if (!slot.current) slot.current = new THREE.Vector3().copy(tr);
        const clampedDistance = Math.max(0.1, Math.min(1, slot.current.distanceTo(tr)));
        // Clamp to [0,1]: after a stalled frame (hidden/frozen tab) delta*speed > 1 would extrapolate and diverge to NaN.
        const alpha = Math.min(1, delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)));
        slot.current.lerp(tr, alpha);
      };
      smooth(j1.current, lerped1);
      smooth(j2.current, lerped2);

      curve.points[0].copy(t3);
      if (lerped2.current) curve.points[1].copy(lerped2.current);
      if (lerped1.current) curve.points[2].copy(lerped1.current);
      curve.points[3].copy(tFixed);

      const points = curve.getPoints(isMobile ? 16 : 32);
      if (points.every((p) => Number.isFinite(p.x + p.y + p.z))) {
        band.current.geometry.setPoints(points);
      }

      const cardAng = card.current?.angvel();
      const cardRot = card.current?.rotation();
      if (card.current && cardAng && cardRot && !isNaN(cardAng.x) && !isNaN(cardRot.x)) {
        ang.copy(cardAng);
        rot.copy(cardRot);
        card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, false);
      }
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody
          position={[2, 0, 0]}
          ref={card}
          {...segmentProps}
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => {
              (e.target as Element).releasePointerCapture(e.pointerId);
              drag(false);
            }}
            onPointerDown={(e) => {
              (e.target as Element).setPointerCapture(e.pointerId);
              if (card.current) {
                drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
              }
            }}
          >
            <mesh geometry={nodes.card.geometry}>
              {/* Unlit on purpose: scene.environment's bright Lightformers (and ACES tone mapping) wash a lit
                  material out to ~2.5x brightness, so the ID photo would look pale. Basic = true colours. */}
              <meshBasicMaterial map={hovered ? faceColor : faceGray} toneMapped={false} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          args={MESH_LINE_ARGS}
          color="white"
          depthTest={false}
          resolution={isMobile ? [1000, 2000] : [1000, 1000]}
          useMap={1}
          map={texture}
          repeat={[-4, 1]}
          lineWidth={1}
        />
      </mesh>
    </>
  );
}
