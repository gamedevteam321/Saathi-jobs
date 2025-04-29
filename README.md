# Instagram About Page Clone

A pixel-perfect clone of Instagram's About page (https://about.instagram.com/), built with Next.js and modern CSS.

![Instagram About Clone](screenshot.png)

## Features

- 📱 Fully responsive layout that works on all devices
- 🎨 Pixel-perfect recreation of Instagram's About page
- ✨ Smooth animations and transitions using CSS
- 🧩 Component-based architecture using React and Next.js
- 📝 Clean and well-organized code structure
- 🚀 Fast performance with Next.js

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations) - Smooth transitions and effects

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/instagram-about-clone.git
   cd instagram-about-clone
   ```

2. Install dependencies:
   ```bash
   bun install
   ```
   or
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   bun run dev
   ```
   or
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
instagram-about-clone/
├── public/             # Static assets (images, icons, etc.)
├── src/
│   ├── app/            # Next.js App Router files
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout component
│   │   └── page.tsx    # Home page component
│   └── components/     # React components
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── CommunitySection.tsx
│       ├── FeatureCarousel.tsx
│       └── ...
└── ...
```

## Customization

Feel free to customize this clone to your liking:

- Update colors and styles in `globals.css`
- Modify content and layout in component files under `src/components/`
- Add more sections or features as needed

## License

This project is for educational purposes only. The design is based on Instagram's About page and should not be used for commercial purposes.

## Acknowledgements

- [Instagram](https://about.instagram.com/) for the original design inspiration
- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for making styling a breeze
