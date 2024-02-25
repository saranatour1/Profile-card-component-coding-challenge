import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'cyan-00':'hsl(185, 75%, 39%)',
        'desaturated-blue':"hsl(229, 23%, 23%)",
        'dark-blue':"hsl(227, 10%, 46%)",
        'dark-gray':" hsl(0, 0%, 59%)",
      },
      fontFamily:{
        'kumbh-sans':['Kumbh Sans Variable', 'sans-serif'],
      },
      backgroundImage:{
        'pattern':'url(./assets/bg-pattern-card.svg)',
      }
    },
  },
  plugins: [ plugin(({addComponents, theme}) =>{
    addComponents({'.background':{
      backgroundImage:"url('./assets/bg-pattern-top.svg'), url('./assets/bg-pattern-bottom.svg')", 
      backgroundPosition:'right 50vw bottom 50vh, left 50vw top 50vh'},
      backgroundRepeat:"no-repeat,no-repeat"
    })
  })],
}

