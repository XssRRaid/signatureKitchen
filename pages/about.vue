<template>
  <div class="main">
    <!-- BEGIN: Page content -->

    <img class="bg full-size d-none" src="/images/bg/bg-L3.jpg" />

    <!-- <video width="100%" autoplay class="position">
      <source src="/bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video> -->

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

    <section id="aboutStory">
      <AboutHistory />

      <AboutTestimonial />

      <AboutBrands />

      <AboutValues />

      <div class="view">
        <!-- <img alt class="bg" src="images/placeholders/1920x1200-1.jpg" /><img
        alt
        class="bg"
        src="images/placeholders/1920x1200-2.jpg"
      /> -->
        <div class="content no-bottom-padding colors-e background-85">
          <div class="container">
            <h2 class="text-g">About <span class="highlight">Signature</span></h2>
            <p class="header-details">
              The Stainless-Steel Kitchenware Industry <span class="link">Leader</span>
            </p>
            <p class="lead medium-font-weight text-justify">
              The stainless steel industry attracts some of the best minds in terms of
              technology and business acumen, and Butterfly Steels is no exception. Our
              growth is not just dependent on things such as technology and sound business
              strategies; it is our people who use the technology. Butterfly Steels has
              attracted talented leaders who understand the emerging technical, commercial
              and marketing aspects unique to this business. The skills profile of our
              employees is comparable with the international industry average. We have
              developed a culture of learning and promote a system of continued enrichment
              through acquiring new knowledge and the honing management and leadership
              skills. We value new and innovative ideas because this drives improvement.
              Butterfly Steels is constantly evaluating new technology and the positive
              benefits that it can have on our operations. We also know that technology
              has to be directed by the brightest minds. At Butterfly Steels, we owe
              everything to our committed, talented personnel. It is their passion that
              has helped us grow at a phenomenal rate.
            </p>
          </div>
        </div>
      </div>

      <AboutNumbers />
    </section>

    <AboutTeam />

    <section id="factory">
      <AboutFactory />
    </section>

    <AboutProducts />

    <!-- Browse Category -->
    <section id="browseCategory">
      <ProductsCategory />
    </section>

    <!-- <AboutServices /> -->

    <Contact />

    <!-- END: Page content -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script setup>
useHead({
  title: "Signature Kitchenware About Company",
});
</script>

<style>
.video-bg {
  /* position: absolute; */
}
</style>
