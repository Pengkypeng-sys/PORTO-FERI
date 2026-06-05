# Feriman — Professional Portfolio

![Feriman Portfolio](https://img.shields.io/badge/Status-Production%20Ready-success)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC)
![Three.js](https://img.shields.io/badge/Three.js-3D%20Interactive-blue)

A high-performance, enterprise-grade personal portfolio built for **Feriman**, an IT Infrastructure Engineer and Full-Stack Developer. 

This repository houses a modern, interactive web application featuring a highly refined **Bauhaus/Swiss Minimalist** design system and a physics-based 3D interactive hero section.

---

## 🌟 Key Features

*   **3D Interactive Lanyard (Hero Section)**: 
    *   Powered by `@react-three/fiber` and `@react-three/rapier` (physics engine).
    *   Features a fully interactive, draggable Vercel-style ID card.
    *   Custom dynamic HTML texturing using Drei's `<Html transform>` mapping the profile photo directly onto the 3D mesh with CSS hover states preserved.
*   **Bauhaus Aesthetic**: 
    *   Strict adherence to a 5-tone minimalist color palette (`#18181A` to `#F7F6F2`).
    *   High-contrast, mono-spaced editorial typography using `DM Serif Display` and `Space Mono`.
*   **Fully Responsive & App-like Navigation**: 
    *   Custom sticky navigation with a dynamic mobile overlay menu.
    *   Smooth CSS-accelerated fade-up animations.
*   **SEO Optimized**: 
    *   Configured with complete OpenGraph and Twitter card metadata for professional social sharing.

## 🛠️ Tech Stack

*   **Framework**: Next.js 15 (App Router)
*   **Styling**: Tailwind CSS
*   **3D Rendering**: Three.js, React Three Fiber, React Three Drei
*   **Physics Engine**: React Three Rapier
*   **Icons & Textures**: Custom generated SVGs (`feriman-band.svg`)

## 💻 About The Author

**Feriman** is a Senior IT Infrastructure Engineer & Full-Stack Developer specializing in:
*   **Private Cloud Orchestration**: Proxmox VE (LXC/VM), Docker, MinIO (S3), PostgreSQL.
*   **Network Architecture**: MikroTik, Cisco, BGP, VLANs.
*   **Cybersecurity**: Firewalls, VPNs, Access Control, managed via Kali Linux.
*   **Web Development**: Next.js, TypeScript, Prisma, Redux, Sanity CMS, PWA.
*   **AI Automation**: Gemini API, Cloudflare Workers.

## 🚀 Quick Start

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Deployment

This project is fully optimized for deployment on **Vercel**. 
Simply connect this repository to your Vercel account, and it will automatically build and deploy the application with zero additional configuration needed.

---
*Designed & Engineered for maximum performance and professional impact.*
