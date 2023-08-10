// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // title: 'Hello Nuxt',
  devtools: { enabled: true },
  css: [
'@/assets/bower_components/fontawesome/css/font-awesome.min.css',
'@/assets/bower_components/animate.css/animate.min.css',
'@/assets/bower_components/minicolors/jquery.minicolors.css',
'@/assets/bower_components/slick.js/slick/slick.css',
'@/assets/bower_components/slick.js/slick/slick-theme.css',
'@/assets/bootstrap/dist/css/bootstrap-custom.min.css', 
'@/assets/lib/linecons/style.css',
'@/assets/styles/style.min.css',
'@/assets/styles/theme-custom.css',
],
})