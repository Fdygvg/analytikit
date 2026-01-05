# AnalytiKit - Analytics Dashboard & Landing Page

A professional, fully responsive analytics dashboard with marketing landing page built with modern web technologies.

![AnalytiKit Demo](https://img.shields.io/badge/demo-responsive-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2-blue)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-blue)

## 🚀 Live Demo
[Deploy on Vercel/Netlify for instant demo]

## 📋 Features

### 🏠 Landing Page
- **Responsive Design** - Mobile-first, works on all screen sizes
- **Hero Section** - Eye-catching headline with dashboard preview
- **Features Grid** - 6 feature cards with icons and descriptions
- **Pricing Plans** - 3-tier pricing with toggle (monthly/annual)
- **Testimonials** - Customer reviews carousel
- **FAQ Section** - Accordion with contact options
- **Modern Footer** - Newsletter, social links, and navigation

### 📊 Dashboard
- **Interactive Charts** - Line, bar, area, and pie charts (Recharts)
- **Metrics Grid** - 6 real-time metrics with trends and mini-charts
- **Data Tables** - Sortable, paginated tables with search/filter
- **Geography Map** - Visitor distribution by country
- **Recent Activity** - Team activity feed with timestamps
- **Sidebar Navigation** - Collapsible, mobile-friendly menu
- **Top Navigation** - User menu, notifications, theme toggle

## 🛠️ Tech Stack

### Frontend
- **React 18** - Component-based UI
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Accessible component library
- **Recharts** - Interactive charting library
- **Lucide React** - Icon library
- **React Router DOM** - Client-side routing
- **date-fns** - Date formatting utilities

### Development Tools
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting
- **TypeScript** - Static type checking

## 📁 Project Structure


src/
├── components/
│ ├── dashboard/ # Dashboard components
│ │ ├── Sidebar.tsx # Navigation sidebar
│ │ ├── TopNav.tsx # Top navigation bar
│ │ ├── MetricGrid.tsx # Metrics cards
│ │ ├── ChartSection.tsx # Interactive charts
│ │ ├── DataTable.tsx # Data tables
│ │ └── RecentActivity.tsx # Activity feed
│ │
│ ├── landing/ # Landing page components
│ │ ├── Header.tsx # Navigation header
│ │ ├── Hero.tsx # Main hero section
│ │ ├── Features.tsx # Features grid
│ │ ├── Pricing.tsx # Pricing plans
│ │ ├── Testimonials.tsx # Customer reviews
│ │ ├── FAQ.tsx # FAQ accordion
│ │ └── Footer.tsx # Page footer
│ │
│ └── ui/ # shadcn/ui components
│ ├── button.tsx
│ ├── card.tsx
│ └── ... (15+ components)
│
├── pages/ # Page components
│ ├── LandingPage.tsx # Main landing page
│ ├── DashboardPage.tsx # Analytics dashboard
│ └── NotFoundPage.tsx # 404 page
│
├── data/ # Mock data and types
│ ├── types.ts # TypeScript interfaces
│ ├── landingData.ts # Landing page content
│ └── dashboardData.ts # Dashboard mock data
│
├── styles/ # Global styles
│ └── globals.css # Tailwind + custom CSS
│
├── App.tsx # Main app with routing
└── main.tsx # Entry point



Key Features Implemented
Landing Page
Mobile-first responsive design

Gradient backgrounds and subtle animations

Interactive pricing toggle

Testimonial carousel with navigation

FAQ accordion with smooth transitions

Dashboard
Real-time metric cards with trend indicators

Interactive charts with multiple views

Sortable, searchable data tables

User activity tracking

Dark/light mode ready (toggle in TopNav)
