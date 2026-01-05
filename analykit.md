analytikit/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── hero-dashboard.png
│       ├── feature-icons/
│       └── logos/
│
├── src/
│   ├── components/
│   │   ├── ui/                    # shadcn components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   │
│   │   ├── landing/               # Landing page components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── dashboard/             # Dashboard components
│   │   │   ├── Sidebar.tsx
│   │   │   ├── TopNav.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── ChartCard.tsx
│   │   │   └── DataTable.tsx
│   │   │
│   │   └── shared/                # Shared between landing/dashboard
│   │       ├── Logo.tsx
│   │       ├── Button.tsx         # Enhanced button with variants
│   │       └── ThemeToggle.tsx    # Light/dark mode
│   │
│   ├── pages/
<!-- │   │   ├── LandingPage.tsx        # Main landing page -->
<!-- │   │   └── DashboardPage.tsx      # Demo dashboard -->
│   │
│   ├── data/                      # Mock data & types
<!-- │   │   ├── types.ts               # TypeScript interfaces -->
<!-- │   │   ├── landingData.ts         # Features, testimonials, etc. -->
<!-- │   │   └── dashboardData.ts       # Metrics, chart data
│   │ -->
│   ├── styles/
│   │   ├── globals.css            # Tailwind imports + 
│   │   ├── design-tokens.css      # CSS variables
│   │   └── animations.css         # Custom animations
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useResponsive.ts
│   │   └── useChartData.ts
│   │
│   ├── lib/                       # Utilities
│   │   ├── utils.ts               # Helper functions
│   │   └── constants.ts           # App constants
│   │
│   ├── App.tsx                    # Main app with routing
│   ├── main.tsx                   # Entry point
│   └── vite-env.d.ts              # TypeScript declarations
│
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── components.json               # shadcn configuration
├── vite.config.ts
└── README.md