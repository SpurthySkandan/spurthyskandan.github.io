# Spurthy Skandan - Portfolio Website

A modern, responsive portfolio website built with React showcasing my professional experience, projects, and skills.

## Features

- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Theme**: Toggle between light and dark themes with persistent storage
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Modern UI**: Clean, professional design with hover effects

## Sections

- **About**: Personal introduction and contact links
- **Education**: Academic background and coursework
- **Publications**: Research publications with links
- **Work Experience**: Professional experience and achievements
- **Projects**: Portfolio of technical projects
- **Skills**: Technical skills and technologies
- **Contact**: Contact information and email

## Technologies Used

- **Frontend**: React 18, CSS3
- **Styling**: Custom CSS with CSS Variables for theming
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Poppins)
- **Build Tool**: Create React App

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd spurthyskandan.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation and theme toggle
│   ├── About.js        # About section
│   ├── Education.js    # Education section
│   ├── Publications.js # Publications section
│   ├── WorkExperience.js # Work experience section
│   ├── Projects.js     # Projects portfolio
│   ├── Skills.js       # Skills section
│   ├── Contact.js      # Contact section
│   ├── Footer.js       # Footer with social links
│   └── ScrollToTop.js  # Scroll to top functionality
├── App.js              # Main App component
├── index.js            # React entry point
└── index.css           # Global styles and CSS variables
```

## Customization

### Adding New Sections

1. Create a new component in the `src/components/` directory
2. Import and add it to `App.js`
3. Add corresponding CSS styles in `src/index.css`

### Modifying Content

- Update the content directly in the respective component files
- Modify links, descriptions, and personal information as needed
- Update the resume link in the About component

### Styling Changes

- Modify CSS variables in `src/index.css` for theme colors
- Update component-specific styles in the same file
- Responsive design breakpoints are defined in media queries

## Deployment

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages or any static hosting service

### Other Platforms

- **Netlify**: Connect your repository and build with `npm run build`
- **Vercel**: Import your repository and deploy automatically
- **AWS S3**: Upload the build folder to an S3 bucket

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio website, but suggestions and improvements are welcome!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: spurthy.skandan@gmail.com
- **LinkedIn**: [Spurthy Skandan](https://www.linkedin.com/in/spurthy-skandan/)
- **GitHub**: [SpurthySkandan](https://github.com/SpurthySkandan)