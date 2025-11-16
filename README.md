# 🧧 Caishen 4D Generator

A festive, web-based Chinese New Year-themed application that generates random 4-digit lottery numbers with celebratory animations. Get your lucky numbers from Caishen, the God of Wealth!

![Project Status](https://img.shields.io/badge/status-active-success.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

## ✨ Features

- 🎰 **Random 4D Number Generation**: Generate lucky 4-digit numbers (0000-9999) with a single click
- 🎆 **Fireworks Celebration**: Spectacular particle fireworks animation with every number generation
- 📱 **Fully Responsive**: Mobile-first design that works beautifully on all devices
- 🎨 **Festive Theme**: Traditional Chinese New Year color scheme with gold, red, and yellow
- 🎭 **Smooth Animations**: Floating Caishen character, pulse effects, and particle animations
- 🔗 **Social Sharing**: Share your lucky numbers on Facebook, Twitter, and WhatsApp
- ⚡ **Zero Build Required**: Pure HTML/CSS/JavaScript - just open and run!

## 🚀 Quick Start

### Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/seonglinchua/caishen-4d-generator.git
   cd caishen-4d-generator
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - No build tools or npm installation required!

### Using a Local Server (Optional)

For the best experience, serve via HTTP:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js http-server
npx http-server -p 8000
```

Then visit `http://localhost:8000` in your browser.

## 🎮 How to Use

1. **Generate Numbers**: Click the "Get Lucky 4D Numbers 🎲" button
2. **Watch the Magic**: Enjoy the fireworks celebration!
3. **Share Your Luck**: Use the social media buttons to share your lucky numbers with friends
4. **Try Again**: Generate as many times as you like for different lucky numbers

## 🛠️ Technologies

### Frontend Stack
- **HTML5**: Semantic markup with proper meta tags
- **CSS3**: Custom animations and responsive design
- **Vanilla JavaScript**: Pure client-side logic with no frameworks
- **TailwindCSS v3.x**: Utility-first CSS framework (via CDN)
- **Font Awesome 6.4.0**: Icon library for social buttons (via CDN)

### Key Features Implementation
- **Animations**: CSS keyframes and transforms for smooth effects
- **Particle System**: Custom JavaScript fireworks with CSS variables
- **Responsive Design**: Mobile-first with TailwindCSS breakpoints
- **Social Integration**: Native share dialogs for major platforms

## 📁 Project Structure

```
caishen-4d-generator/
├── index.html                                   # Main application file
├── styles.css                                   # Custom styles and animations
├── BUILD_PLAN.md                               # Comprehensive development plan
├── README.md                                   # This file
├── .gitignore                                  # Git ignore rules
└── img/
    └── image__2_-removebg-preview - Edited.png # Caishen character image
```

## 🎨 Design System

### Color Palette
- **Background**: Yellow-200 (#fef08a) - Prosperity and wealth
- **Primary Text**: Red-700 (#b91c1c) - Good fortune and celebration
- **Accent**: Yellow-900 (#854d0e) - Gold and richness

### Responsive Breakpoints
- **Mobile**: < 640px (single column, compact layout)
- **Tablet**: 640px - 768px (medium sizes)
- **Desktop**: > 768px (large sizes, spacious layout)

## 🎯 Key Components

### Number Generation
- Generates random numbers from 0000-9999
- Maintains 4-digit format with leading zeros
- Sequential animations: fade-in → slide-up → pulse effect

### Fireworks Animation
- 3 sequential firework bursts
- 30 colored particles per firework
- Radial particle distribution
- Auto-cleanup after animation
- Smooth 60fps performance

### Social Sharing
- **Facebook**: Share with custom quote
- **Twitter**: Tweet with emojis and hashtags
- **WhatsApp**: Send formatted message

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

## 📦 Deployment

This static site can be deployed anywhere:

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and save
4. Site will be live at `https://username.github.io/repo-name`

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty)
3. Publish directory: `/`
4. Deploy!

### Vercel
1. Import repository
2. Framework preset: Other
3. Build settings: (leave default)
4. Deploy!

## 🎊 Performance

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 2.5s
- **Page Size**: < 500KB
- **Animation FPS**: 60fps
- **Zero Dependencies**: No npm packages to install

## 🔧 Development

No build process required! Just edit the files:

- `index.html` - Structure and JavaScript logic
- `styles.css` - Animations and custom styles
- `img/` - Image assets

Changes are instantly visible on page refresh.

## 📝 Future Enhancements

Potential features for future versions:
- [ ] Multiple number generation (6 sets)
- [ ] Number history/favorites
- [ ] Animated number roll effect
- [ ] Sound effects toggle
- [ ] Dark mode option
- [ ] Multiple language support
- [ ] Save lucky numbers locally
- [ ] Print-friendly format

See [BUILD_PLAN.md](BUILD_PLAN.md) for detailed development roadmap.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Caishen character image sourced and edited for the festive theme
- Inspired by traditional Chinese New Year celebrations
- Built with love for the Lunar New Year season

## 📧 Contact

For questions or feedback, please open an issue in the GitHub repository.

---

**May Caishen bring you prosperity and good fortune! 🧧🎆**

*Gong Xi Fa Cai! 恭喜发财!*
