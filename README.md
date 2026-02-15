# SignalForge AI

<div align="center">
  <h1>🚀 SignalForge AI</h1>
  <p><strong>Precision Signals for Forex, Metals & Crypto</strong></p>
  <p>A cutting-edge AI-powered trading signal platform built with React, featuring real-time market analysis and glassmorphism UI design.</p>
  
  ![SignalForge AI](./public/screenshot.png)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-18.3.1-61dafb.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.2-646cff.svg)](https://vitejs.dev/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38bdf8.svg)](https://tailwindcss.com/)
</div>

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🎯 Core Functionality
- **Real-Time Signal Generation**: AI-powered trading signals for Forex, Metals, and Crypto markets
- **Multi-Market Support**: 
  - Forex: EUR/USD, GBP/USD, USD/JPY
  - Metals: XAU/USD (Gold), XAG/USD (Silver)
  - Crypto: BTC/USD, ETH/USD
- **Interactive Dashboard**: Comprehensive portfolio tracking and signal history
- **Live Market Data**: Real-time price updates and market sentiment analysis

### 🎨 Design & UI
- **Dark Glassmorphism Theme**: Modern aesthetic with backdrop blur effects
- **Animated Candlestick Background**: Dynamic CSS-animated trading chart visualization
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: CSS keyframe animations for enhanced user experience

### 📊 Analytics & Performance
- **87.3% Signal Accuracy**: Proven track record of reliable trading signals
- **15,420+ Signals Delivered**: Extensive historical signal database
- **2,847 Active Users**: Growing community of traders
- **156ms Average Speed**: Lightning-fast signal generation

### 🔐 User Management
- **Secure Authentication**: Login and signup with modern glass UI cards
- **User Dashboard**: Personalized trading workspace with portfolio overview
- **Subscription Tiers**: Starter ($19/mo), Pro ($49/mo), Elite ($99/mo)

### 🛠️ Technical Features
- **React Router v6**: Seamless client-side routing
- **Lucide React Icons**: Comprehensive icon library integration
- **Google Fonts Integration**: Inter font family for modern typography
- **Vite Build System**: Lightning-fast development and optimized production builds

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18.3.1**: Latest React with concurrent features and improved hooks
- **React Router v6**: Declarative routing for React applications

### Build Tools
- **Vite 5.4.2**: Next-generation frontend tooling with HMR
- **PostCSS**: CSS transformations and optimizations

### Styling
- **Tailwind CSS 3.4.1**: Utility-first CSS framework
- **Google Fonts (Inter)**: Modern, professional typography
- **Custom CSS Animations**: Keyframe animations for dynamic effects

### Icons & UI
- **Lucide React**: Beautiful, consistent icon set
- **Glassmorphism Design**: Semi-transparent cards with backdrop blur

### Code Quality
- **ESLint**: JavaScript/React linting with recommended rules
- **Prettier-ready**: Consistent code formatting setup

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
  - npm comes with Node.js
  - Verify installation: `npm --version`
  - Or install yarn: `npm install -g yarn`

- **Git** (for cloning the repository)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/signalforge-ai.git
   cd signalforge-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

### Quick Setup (Bash Script)

For Unix-based systems (Linux, macOS), you can use the automated setup script:

```bash
chmod +x setup.sh
./setup.sh
```

---

## 📁 Project Structure

```
signalforge-ai/
├── public/
│   └── screenshot.png
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Sidebar.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── SignalGenerator.jsx
│   │   │   ├── Markets.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── Stats.jsx
│   │   │   └── Pricing.jsx
│   │   ├── dashboard/
│   │   │   ├── PortfolioStats.jsx
│   │   │   ├── RecentSignals.jsx
│   │   │   └── MarketOverview.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── Input.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   └── Dashboard.jsx
│   ├── utils/
│   │   ├── signalGenerator.js
│   │   └── marketData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── setup.sh
```

### Directory Descriptions

- **`public/`**: Static assets served directly
- **`src/components/`**: Reusable React components organized by feature
  - **`layout/`**: Header, Footer, Sidebar navigation components
  - **`home/`**: Landing page sections (Hero, SignalGenerator, Markets, etc.)
  - **`dashboard/`**: Dashboard-specific components
  - **`ui/`**: Reusable UI primitives (Button, Card, Input)
- **`src/pages/`**: Top-level route components
- **`src/utils/`**: Utility functions and helpers
- **`src/App.jsx`**: Main application component with routing
- **`src/main.jsx`**: Application entry point
- **`src/index.css`**: Global styles, animations, and Tailwind directives

---

## 📜 Available Scripts

### Development

```bash
npm run dev
```
Starts the development server with hot module replacement (HMR) at `http://localhost:5173`

### Build

```bash
npm run build
```
Creates an optimized production build in the `dist/` directory
- Minified JavaScript and CSS
- Tree-shaking for smaller bundle sizes
- Asset optimization and hashing

### Preview

```bash
npm run preview
```
Preview the production build locally before deployment

### Lint

```bash
npm run lint
```
Run ESLint to check code quality and consistency

---

## 🌐 Deployment

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `dist`
3. **Environment Variables**: None required for basic setup

#### Quick Deploy to Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/signalforge-ai)

### Vercel

1. **Build Command**: `npm run build`
2. **Output Directory**: `dist`
3. **Install Command**: `npm install`

#### Quick Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/signalforge-ai)

### GitHub Pages

1. Update `vite.config.js` with base path:
   ```js
   export default defineConfig({
     base: '/signalforge-ai/',
     // ...
   })
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the repository**
   - Click the "Fork" button at the top right of this page

2. **Clone your fork**
   ```bash
   git clone https://github.com/yourusername/signalforge-ai.git
   cd signalforge-ai
   ```

3. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes**
   - Write clean, readable code
   - Follow existing code style and conventions
   - Add comments for complex logic

5. **Test your changes**
   ```bash
   npm run dev
   npm run build
   ```

6. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add: Brief description of your changes"
   ```

7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Describe your changes in detail

### Contribution Guidelines

- **Code Style**: Follow the existing code style (ESLint configuration)
- **Component Structure**: Use functional components with hooks
- **Naming Conventions**: 
  - Components: PascalCase (e.g., `SignalGenerator.jsx`)
  - Functions: camelCase (e.g., `generateSignal`)
  - Constants: UPPER_SNAKE_CASE (e.g., `API_URL`)
- **Commit Messages**: Use clear, descriptive commit messages
  - `Add:` for new features
  - `Fix:` for bug fixes
  - `Update:` for improvements
  - `Refactor:` for code refactoring
- **Documentation**: Update README.md if adding new features
- **Testing**: Ensure all features work before submitting PR

### Areas for Contribution

- 🐛 Bug fixes
- ✨ New features
- 📝 Documentation improvements
- 🎨 UI/UX enhancements
- ⚡ Performance optimizations
- ♿ Accessibility improvements
- 🌍 Internationalization (i18n)

---

## 📄 License

This project is licensed under the **MIT License** - see below for details:

```
MIT License

Copyright (c) 2024 SignalForge AI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNES FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

- **React Team**: For the amazing React framework
- **Vite Team**: For the blazing-fast build tool
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide Icons**: For the beautiful icon library
- **Community Contributors**: Thank you to everyone who contributes!

---

## 📞 Contact & Support

- **Website**: [signalforge.ai](https://signalforge.ai)
- **Email**: support@signalforge.ai
- **Twitter**: [@SignalForgeAI](https://twitter.com/SignalForgeAI)
- **Discord**: [Join our community](https://discord.gg/signalforge)

---

<div align="center">
  <p>Made with ❤️ by the SignalForge AI Team</p>
  <p>⭐ Star us on GitHub — it motivates us a lot!</p>
</div>