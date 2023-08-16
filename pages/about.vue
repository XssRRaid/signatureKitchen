<script setup>
useHead({
  title: "Signature Kitchenware Online Catalog",
});
</script>

<template>
  <div class="main">
    <!-- BEGIN: Page content -->

    <div
      class="video-bg"
      data-video="./bg.mp4"
      data-alternative="images/placeholders/1920x1200img4.jpg"
    ></div>

    <section id="home">
      <div class="view">
        <div class="content home-mary full-size colors-a text-g background-40">
          <div class="container">
            <div
              class="textillate text-g text-center heading hidden-xs hidden-sm"
              data-textillate-options="{loop:true, in:{effect:'flipInY', reverse:false}, out:{effect:'flipOutY', reverse:false}}"
            >
              <ul class="texts">
                <li>Premium Quality Stainless Steel Cookware</li>
                <li>The Mark Of Excellence</li>
                <!-- <li>We Are Coders</li>
                <li>We Are Developers</li>
                <li>We Are Creative</li> -->
              </ul>
            </div>
            <h1 class="text-center">
              <span class="highlight">Signature</span>
            </h1>
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <p class="lead text-center">
                  Uplifting the culinary experience of homes since 1980..
                </p>
                <p class="text-center">
                  <a href="#intro" class="button background-60-f heading-f border-hard"
                    >Read Our story</a
                  ><a href="#numbers" class="button background-60-f heading-f border-hard"
                    >Checkout Our Numbers!</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <About />

    <AboutTeam />

    <!-- <AboutServices /> -->

    <AboutProcess />

    <AboutTestimonial />

    <Contact />
    <!-- END: Page content -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>
