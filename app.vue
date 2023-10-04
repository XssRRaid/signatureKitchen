<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  title: "Signature Kicthenware",
  script: [
    {
      body: true,
      innerHTML: `
				if (typeof(atob) == "undefined")
				{
					document.write('<script src="lib/stringencoders-v3.10.3/javascript/base64.js"><\/script>');
					var atob = function(x)
					{
						return base64.decode(x);
					}
				}
        	`,
    },
    {
      body: true,
      src: "@/js/bower_components/less.js/dist/less.min.js",
    },
    {
      body: true,
      src: "@/js/bower_components/jquery/dist/jquery.min.js",
    },
    {
      body: true,
      src: "@/js/lib/tween/tween.min.js",
    },
    {
      body: true,
      src: "@/js/bootstrap/dist/js/bootstrap.min.js",
    },
    {
      body: true,
      src: "@/js/lib/modernizr-edited.js",
    },
    {
      body: true,
      src: "@/js/bower_components/jquery-cookie/jquery.cookie.js",
    },
    {
      body: true,
      src: "https://maps.googleapis.com/maps/api/js?sensor=false",
    },
    {
      body: true,
      src:
        "@/js/bower_components/jqBootstrapValidation/dist/jqBootstrapValidation-1.3.7.min.js",
    },
    {
      body: true,
      src: "@/js/bower_components/minicolors/jquery.minicolors.min.js",
    },
    {
      body: true,
      src: "@/js/bower_components/slick.js/slick/slick.min.js",
    },
    {
      body: true,
      src: "@/js/bower_components/shufflejs/dist/jquery.shuffle.min.js",
    },
    {
      body: true,
      src: "@/js/bower_components/textillate/assets/jquery.lettering.js",
    },
    {
      body: true,
      src: "@/js/bower_components/textillate/assets/jquery.fittext.js",
    },
    {
      body: true,
      src: "@/js/bower_components/textillate/jquery.textillate.js",
    },
    {
      body: true,
      src: "@/js/lib/prism/prism.js",
    },
    {
      body: true,
      innerHTML: `
				(function()
					{
						var disableMobileAnimations = true;
						var isWin = navigator.appVersion.indexOf("Win") !== -1;
						if (isWin) $('html').addClass('win');
						var ua = navigator.userAgent.toLowerCase();
						var isChrome = ua.indexOf('chrome') > -1;
						if (isChrome) $('html').addClass('chrome');
						var isAndroidBrowser4_3minus = ((ua.indexOf('mozilla/5.0') > -1 && ua.indexOf('android ') > -1 && ua.indexOf('applewebkit') > -1) && !(ua.indexOf('chrome') > -1));
						if (isAndroidBrowser4_3minus) $('html').addClass('android-browser-4_3minus');
						var isSafari = !isChrome && ua.indexOf('safari') !== -1;
						if (isSafari) $('html').addClass('safari');
						var isMobile = false; //Change false to Modernizr.touch if you want to disable animations on touchscreen devices;
						if (isMobile)
						{
							$('html').addClass('mobile');
							if (disableMobileAnimations) $('html').addClass('poor-browser');
						}
						else
						{
							$('html').addClass('non-mobile');
						}
						if (isWin && isSafari)
						{
							$('html').addClass('flat-animation');
						}
					})();
        	`,
    },
    {
      body: true,
      src: "@/js/scripts/script2.js",
    },
  ],
  bodyAttrs: { class: `state1 background-100-e` },
});
</script>

<style>
.text-g {
  color: #a19f9f !important;
}

a.button:hover {
  color: rgb(235 236 234) !important;
  background-color: rgb(33 92 53 / 75%) !important;
}

.colors-e .gallery .filter .nav li a.active {
  color: #e92d36;
}

#top-nav.colors-e li a:hover,
.colors-e .gallery .filter .nav li a:hover {
  color: #e92d36;
}
</style>
