import { client } from "process";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  generate:{
    nojekyll: true, //not working on this version
  },
  ssr: true, //server side rendered enabled //When true
  target: "static", 
//   app: {
//     baseURL: "/signatureKitchen/"
// },
  //  router: {
  //     base: '/signatureKitchen/'
  //  },
  // title: 'Hello Nuxt',
  modules: ['nuxt-swiper'],
  // plugins: [{ src: './plugins/vue-carousel.js', mode: 'client' }],
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