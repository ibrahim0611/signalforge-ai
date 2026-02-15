#!/bin/bash

# SignalForge AI - Automated Setup Script
# This script automates the installation process for the SignalForge AI trading platform

# Color codes for terminal output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color
BOLD='\033[1m'

# Print banner
echo -e "${CYAN}${BOLD}"
echo "═══════════════════════════════════════════════════════════════"
echo "          🚀 SignalForge AI - Setup Script 🚀              "
echo "═══════════════════════════════════════════════════════════════"
echo -e "${NC}"
echo -e "${MAGENTA}Precision Signals for Forex, Metals & Crypto${NC}"
echo ""

# Function to print colored messages
print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_info() {
    echo -e "${BLUE}ℹ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

print_step() {
    echo -e "${CYAN}${BOLD}▶ $1${NC}"
}

# Check if Node.js is installed
print_step "Checking Node.js installation..."
if ! command -v node &> /dev/null
then
    print_error "Node.js is not installed!"
    echo ""
    print_info "Please install Node.js (v18.0.0 or higher) from:"
    echo -e "${BLUE}https://nodejs.org/${NC}"
    echo ""
    exit 1
fi

# Get Node.js version
NODE_VERSION=$(node -v)
print_success "Node.js is installed: ${NODE_VERSION}"

# Check Node.js version (require v18+)
NODE_MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
if [ "$NODE_MAJOR_VERSION" -lt 18 ]; then
    print_warning "Node.js version is below 18. Recommended: v18.0.0 or higher"
    echo -e "${YELLOW}Some features may not work as expected.${NC}"
    echo ""
fi

# Check if npm is installed
print_step "Checking npm installation..."
if ! command -v npm &> /dev/null
then
    print_error "npm is not installed!"
    echo ""
    print_info "npm should come with Node.js. Please reinstall Node.js."
    exit 1
fi

NPM_VERSION=$(npm -v)
print_success "npm is installed: v${NPM_VERSION}"
echo ""

# Display project information
print_step "Project Information"
echo -e "${BOLD}Project:${NC} SignalForge AI Trading Platform"
echo -e "${BOLD}Tech Stack:${NC} React 18 + Vite 5 + Tailwind CSS 3"
echo -e "${BOLD}Framework:${NC} React Router v6, Lucide React Icons"
echo ""

# Install dependencies
print_step "Installing dependencies..."
echo -e "${YELLOW}This may take a few minutes depending on your internet connection...${NC}"
echo ""

# Run npm install with progress
if npm install; then
    echo ""
    print_success "Dependencies installed successfully!"
else
    echo ""
    print_error "Failed to install dependencies!"
    echo ""
    print_info "Please try running 'npm install' manually and check for errors."
    exit 1
fi

echo ""

# Display installed packages count
if [ -d "node_modules" ]; then
    PACKAGE_COUNT=$(find node_modules -maxdepth 1 -type d | wc -l)
    print_info "Total packages installed: ${PACKAGE_COUNT}"
fi

echo ""

# Setup complete
echo -e "${GREEN}${BOLD}"
echo "═══════════════════════════════════════════════════════════════"
echo "          ✓ Setup completed successfully! ✓                 "
echo "═══════════════════════════════════════════════════════════════"
echo -e "${NC}"

# Display next steps
print_step "Next Steps:"
echo ""
echo -e "${BOLD}1. Start the development server:${NC}"
echo -e "   ${CYAN}npm run dev${NC}"
echo ""
echo -e "${BOLD}2. Open your browser and navigate to:${NC}"
echo -e "   ${CYAN}http://localhost:5173${NC}"
echo ""
echo -e "${BOLD}3. Build for production:${NC}"
echo -e "   ${CYAN}npm run build${NC}"
echo ""
echo -e "${BOLD}4. Preview production build:${NC}"
echo -e "   ${CYAN}npm run preview${NC}"
echo ""

# Display additional information
print_info "Available Routes:"
echo -e "   ${BLUE}/${NC} - Landing Page"
echo -e "   ${BLUE}/login${NC} - User Login"
echo -e "   ${BLUE}/signup${NC} - User Registration"
echo -e "   ${BLUE}/dashboard${NC} - Trading Dashboard"
echo ""

print_info "Project Features:"
echo -e "   ${GREEN}•${NC} Real-time trading signals for Forex, Metals & Crypto"
echo -e "   ${GREEN}•${NC} Dark glassmorphism UI with animated backgrounds"
echo -e "   ${GREEN}•${NC} Interactive dashboard with portfolio tracking"
echo -e "   ${GREEN}•${NC} 87.3% signal accuracy with 15,420+ delivered signals"
echo -e "   ${GREEN}•${NC} Responsive design optimized for all devices"
echo ""

# Display support information
echo -e "${YELLOW}${BOLD}Need help?${NC}"
echo -e "   📚 Documentation: ${BLUE}README.md${NC}"
echo -e "   🐛 Report issues: ${BLUE}https://github.com/yourusername/signalforge-ai/issues${NC}"
echo -e "   💬 Community: ${BLUE}https://discord.gg/signalforge${NC}"
echo ""

# Final message
echo -e "${MAGENTA}${BOLD}Happy Trading! 📈${NC}"
echo -e "${CYAN}Made with ❤️  by the SignalForge AI Team${NC}"
echo ""

# Prompt to start dev server
read -p "$(echo -e ${BOLD}Would you like to start the development server now? [y/N]: ${NC})" -n 1 -r
echo ""
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo ""
    print_step "Starting development server..."
    echo ""
    npm run dev
else
    echo ""
    print_info "You can start the development server later by running:"
    echo -e "   ${CYAN}${BOLD}npm run dev${NC}"
    echo ""
fi