# Aditya Kumar Chaudhary - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a web developer.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Smooth Scrolling**: Smooth scroll navigation between sections
- **Interactive Navigation**: Dynamic navbar that highlights the current section
- **Modern UI**: Clean, professional design with attention to detail
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: CSS Modules
- **Deployment**: Render (Static Site)
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/aditya-portfolio.git
   cd aditya-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   **OR use the auto-start script:**
   ```bash
   # For automatic setup and start
   npm run auto-dev

   # OR double-click the script file
   ./start-dev.sh  # (macOS/Linux)
   start-dev.bat   # (Windows)
   ```

4. **Open your browser**

   Navigate to `http://localhost:5173` to view the portfolio.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run start` - Alias for preview (for deployment compatibility)
- `npm run auto-dev` - Automatically install dependencies and start dev server
- `npm run dev:bg` - Start dev server in background

## 🤖 Automatic Startup

### Quick Start Scripts
- **macOS/Linux**: Double-click `start-dev.sh` or run `./start-dev.sh`
- **Windows**: Double-click `start-dev.bat` or run `start-dev.bat`

### System Integration
- **macOS**: Copy `portfolio-dev.plist` to `~/Library/LaunchAgents/` and run:
  ```bash
  launchctl load ~/Library/LaunchAgents/portfolio-dev.plist
  ```
- **Windows**: Create a shortcut to `start-dev.bat` in your Startup folder

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero/landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills showcase
│   ├── Projects.jsx    # Portfolio projects
│   ├── Experience.jsx  # Work experience
│   ├── Contact.jsx     # Contact information
│   └── Footer.jsx      # Site footer
├── assets/             # Static assets
│   ├── images/         # Profile and project images
│   └── resume/         # Resume files
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Customization

#### Images and Assets
- Place profile images in `src/assets/images/`
- Import images in components using: `import imageName from '../assets/images/filename.png'`
- Never use absolute paths like `/src/assets/...` - they won't work in production

### Personal Information

Update the following files to customize the portfolio with your information:

1. **Hero Section** (`src/components/Hero.jsx`)
   - Update name, title, and tagline
   - Add your social media links

2. **About Section** (`src/components/About.jsx`)
   - Update personal description and background

3. **Skills Section** (`src/components/Skills.jsx`)
   - Modify the skills list and proficiency levels

4. **Projects Section** (`src/components/Projects.jsx`)
   - Add your project details, links, and images

5. **Experience Section** (`src/components/Experience.jsx`)
   - Update work experience and education

6. **Contact Section** (`src/components/Contact.jsx`)
   - Add your contact information and social links

### Styling

- Global styles are in `src/index.css`
- Component-specific styles are in respective `.css` files
- Colors and fonts can be customized in the CSS variables

## 🚀 Deployment

### Render Deployment

The project is configured for deployment on Render:

1. Connect your GitHub repository to Render
2. Use the following settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `./dist`
3. Deploy!

The `render.yaml` file contains the deployment configuration.

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting provider (Netlify, Vercel, GitHub Pages, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

Aditya Kumar Chaudhary
- LinkedIn: [Your LinkedIn Profile]
- Email: [your.email@example.com]
- Portfolio: [Live Portfolio URL]

---

⭐ If you like this portfolio template, please give it a star!
