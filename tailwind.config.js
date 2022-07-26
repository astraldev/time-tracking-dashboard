module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  safelist: [
    'bg-light-red-2', 'bg-light-red-1', 'bg-blue-primary', 'bg-soft-blue',
    'bg-lime-green', 'bg-violet', 'bg-soft-orange'
  ],
  theme: {
    extend: {
      'colors': {
        'blue-primary': 'hsl(246, 80%, 60%)',
        'light-red-1': 'hsl(15, 100%, 70%)', // Work
        'light-red-2': 'hsl(348, 100%, 68%)', // (study)
        'soft-blue': 'hsl(195, 74%, 62%)', // (play)
        'lime-green': 'hsl(145, 58%, 55%)', //(exercise)
        'violet': 'hsl(264, 64%, 52%)', //(social)
        'soft-orange': 'hsl(43, 84%, 65%)', //(self care)
        'blue-neutral': 'hsl(226, 43%, 10%)',
        'dark-blue': 'hsl(235, 46%, 20%)',
        'desaturated-blue': 'hsl(235, 45%, 61%)',
        'pale-blue': 'hsl(236, 100%, 87%)'
      },
      'padding': {
        'x-spacing': '2rem',
        'y-spacing': '1.25rem',
      }
    },
  },
  plugins: [],
}
