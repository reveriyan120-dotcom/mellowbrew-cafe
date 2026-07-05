@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Inter", "Noto Sans KR", ui-sans-serif, system-ui, sans-serif;
  --font-serif: "Playfair Display", Georgia, serif;
  
  --color-brand-beige-50: #fdfcfb;
  --color-brand-beige-100: #f8f5f0;
  --color-brand-beige-200: #f1ebd9;
  --color-brand-beige-300: #e2d7be;
  --color-brand-beige-400: #cca57e;
  --color-brand-brown-500: #a7825d;
  --color-brand-brown-600: #8a6542;
  --color-brand-brown-700: #6d4b2d;
  --color-brand-brown-800: #51361f;
  --color-brand-brown-900: #2a1b10;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f8f5f0;
}
::-webkit-scrollbar-thumb {
  background: #e2d7be;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #cca57e;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-brand-beige-50);
  color: var(--color-brand-brown-900);
  overflow-x: hidden;
}
