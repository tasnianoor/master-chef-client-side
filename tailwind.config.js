/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'height-md': '85vh',
        'height-sm' : '45vh'
      },
      colors: {
        'btn-color': '#F9A51A',
        "blog-qst-color": '#ef4444',
        'blog-ans-color' : "#047857;"
      },
      fontFamily: {
        'blog-qus-font-family': 'monospace',
        'blog-qst-font-family' : 'sans-serif' 
      }
    }
  },
  daisyui: {
    themes: ['cupcake'],
  },
  plugins: [require("daisyui")],

}

