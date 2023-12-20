<template>
  <section id="testimonial">
    <div class="view">
      <!-- <img class="bg" src="/images/bg/bg-L7.jpg" /> -->
      <img class="bg" src="/images/bg/sigCustomers3.jpeg" />
      

      <div class="content no-top-padding no-bottom-padding colors-h background-85">
        <div class="container">
          <!-- <div class="show-list slogan">
            <div class="show-item">
              <p>Tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div class="show-item">We Are Programmers</div>
            <div class="show-item">We Are Coders</div>
            <div class="show-item">We Are Developers</div>
            <div class="show-item">We Are Creative</div>
          </div> -->
          <div class="viewAllProducts">
            <a class="underline-text colors-h background-0" href="#testimonial">
              <h3>The <span class="highlight">Signature</span> <span class="link">Experience</span></h3>
            </a>
          </div>

          <p class="text-center big-font">
            <em> From Distributors To Households — Premium Cookware That Serves Happiness</em>
          </p>

          <!-- swiper testimonial slider -->
          <div class="row">
            <Swiper
              :slidesPerView="1"
              :spaceBetween="30"
              :effect="'cube'"
              :fadeEffect="{
                crossFade: true
              }"
              :cubeEffect="{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }"
              :pagination="{
                clickable: true,
              }"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: false,
              }"
              :modules="modules"
              class="testimonialSlider"
            >
              <swiper-slide class="container testimonialSlide colors-g background-20">
                <div class="row">
                  <div class="col-xs-12 col-md-7 testimonial">
                    <p class="text-justify">
                      Butterfly Steels is synonymous to quality products and innovation.
                      It has been a great experience to work with a company that is so
                      highly organized and efficient in their profession. It was in 1998
                      when I first got the opportunity to deal with Butterfly Steels.
                    </p>
                  </div>
                  <div class="col-xs-12 col-md-5">
                    <div class="d-flex">
                      <div class="col-xs-6">
                        <img
                          class="circle"
                          height="120px"
                          width="120px"
                          src="/images/bg/bg-light-L1.jpg"
                        />
                      </div>

                      <p class="title text-right">
                      <p>Mr. Satish Kumar Garg</p>
                        <p class="underline-text"><em>Director</em></p>
                        <p class="big-font">asd pvt. ltd.</p>
                    </p>
                    </div>                    
                  </div>
                </div>
                <div class="row d-flex author">
                  <div class="col-xs-8">
                    <p class="title text-right">
                      <p>Mr. Satish Kumar Garg</p>
                        <p class="underline-text"><em>Director</em></p>
                        <p class="big-font">asd pvt. ltd.</p>
                      </p>

                  </div>
                  <div>
                    <img
                      class="circle"
                      height="120px"
                      width="120px"
                      src="/images/bg/bg-light-L1.jpg"
                    />
                  </div>
                </div>
              </swiper-slide>


              <swiper-slide class="container testimonialSlide colors-g background-20">
                <div class="row">
                  <div class="col-xs-12 testimonial">
                    <p class="text-justify">
                      Our firm has been working with Butterfly Steels for last 20 years. Our business interaction with them very easily turned into friendship. We find this our great pleasure. 
                    </p>
                  </div>
                </div>
                <div class="row d-flex author">
                  <div class="col-xs-8">
                    <p class="title text-right">
                      <p>Mr. Vinay Kumar (Delhi)</p>
                        <p class="underline-text"><em>Director</em></p>
                        <p class="big-font">asd pvt. ltd.</p>
                      </p>

                  </div>
                  <div>
                    <img
                      class="circle"
                      height="120px"
                      width="120px"
                      src="/images/bg/bg-light-L1.jpg"
                    />
                  </div>
                </div>
              </swiper-slide>

              <swiper-slide class="container testimonialSlide colors-g background-20">
                <div class="row">
                  <div class="col-xs-12 testimonial">
                    <p class="text-justify">
                      Signature products have raised the bar of premium products in the stainless steel market in India. I wish more products keep emerging out of this brand and enriching households across the globe. 
                    </p>
                  </div>
                </div>
                <div class="row d-flex author">
                  <div class="col-xs-8">
                    <p class="title text-right">
                      <p>Mr. Rajiv Kumar</p>
                        <p class="underline-text"><em>Director</em></p>
                        <p class="big-font">asd pvt. ltd.</p>
                      </p>

                  </div>
                  <div>
                    <img
                      class="circle"
                      height="120px"
                      width="120px"
                      src="/images/bg/bg-light-L1.jpg"
                    />
                  </div>
                </div>
              </swiper-slide>
              <!-- <SwiperControlsNext /> -->
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import {
  EffectCoverflow,
  EffectFade,
  EffectCube,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

// const swiper = useSwiper();

export default {
  setup() {
    return {
      modules: [
        EffectCoverflow,
        EffectFade,
        EffectCube,
        Autoplay,
        Navigation,
        Pagination,
      ],
    };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: auto;
  padding: 40px 60px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.swiper-slide img {
  display: block;
  width: 97%;
  height: 97%;
  -o-object-fit: cover;
  object-fit: cover;
}
</style>
