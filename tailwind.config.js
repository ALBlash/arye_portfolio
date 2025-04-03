/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can uncomment and add your custom colors if needed
        // primary: '#3498db',
        // secondary: '#f1c40f',
        // tertiary: '#e74c3c',
        // quaternary: '#2ecc71',
        // quinary: '#9b59b6',
        // quinaryLight: '#e9ecef',
        // quinaryDark: '#34495e',
        // quinarySoft: '#ecf0f1',
        // quinaryHover: '#c0392b',
        // quinaryActive: '#27ae60',
        // quinaryFocus: '#2980b9',
      },
      keyframes: {
        revealButton: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        rotateMainImage: {
          '0%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' },
        },
        moveOverlayImage: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        revealButton: 'revealButton 0.6s ease',
        rotateMainImage: 'rotateMainImage 10s ease-in-out infinite',
        moveOverlayImage: 'moveOverlayImage 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
