module.exports = {
  // ▼ here you need to add all paths according to your needs
    purge: ['./pages/*/.{js,ts,jsx,tsx}', './Components/*/.{js,ts,jsx,tsx}', './your-other-component-folder/*/.{js,ts,jsx,tsx}'], 
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }