/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://www.10wallpaper.com/wallpaper/1920x1440/1408/Assassins_Creed_Black_Flag_Logo-High_quality_wallpapers_1920x1440.jpg')",
      },
      fontFamily: {
        display: ' "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif ', // Adds a new `font-display` class
      },
      colors:{
        dinu1:'#d84869',
        black: '#000',
        dinu2:'#f46641',
        dinu3:'#5648d8',
        dinu20:'#8641f4',
        dinu4:'#ffffff30',
        dinu5:'#ffffff1a',
        dinu6:'#ffffff',
        dinu7:'#ffffff85',
        dinu8:'#ffffff00',
        dinu9:'#ffffffb9',
        dinu10:'#131313',
        dinu11:'#ffffff59',
        dinu12:'#00000088',
        dinu13:'#ffffff88',
        dinu14:'#1771e6',
        dinu15:'#1c99e6',
        dinu16:'#cb2770',
        dinu17:'#2fe664',
        dinu18:'#0081c2',
        dinu19:'#5f5f5f83',


      },
      keyframes: {
        circle1Animate: {
          '50%': {
            left:'33%',
            top:'4%',
            transform:'scale(1.11);'
          },
        },
        circle2Animate: {
          '50%': {
            bottom:'6%',
            right:'31%',
          },
        },
       
      },
      animation: {
        'circle1': 'circle1Animate 15s infinite',
        'circle2': 'circle2Animate 8s infinite',
      },
    },
  },
  plugins: [],
}