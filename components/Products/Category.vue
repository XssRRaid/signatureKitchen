<template>
  <div class="view" id="how-we-work">
    <div class="content small-top-padding colors-h background-85">
      <div class="container-fluid">
        <h3>Browse By <span class="link">Category</span></h3>

        <!-- swiper category carousel -->
        <div class="row">
          <Swiper
            :slidesPerView="1"
            :spaceBetween="30"
            :freeMode="true"
            :pagination="{
              clickable: true,
            }"
            :breakpoints="{
              '476': {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              '640': {
                slidesPerView: 3,
                spaceBetween: 50,
              },
              '768': {
                slidesPerView: 4,
                spaceBetween: 60,
              },
              '1024': {
                slidesPerView: 5,
                spaceBetween: 80,
              },
            }"
            :navigation="true"
            :modules="modules"
            class="browseCat"
          >
            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Container</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Spice Box</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Barni</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Thali</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Milk Pot</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Canister</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Bucket</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Handi</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Spice Box Plate</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Mug</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Milk Can</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Multi Kadhai</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Dinner Set</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Tiffin</p>
              </a>
            </swiper-slide>
            <!-- <SwiperControlsNext /> -->
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

// const swiper = useSwiper();

export default {
  setup() {
    return {
      modules: [Navigation, Pagination],
    };
  },
};
</script>

<style>
.categoryItem {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  cursor: pointer;
}

.categoryItemImage {
  width: 140px;
  height: 140px;
  border-radius: 50%;
}

.categoryItemTitle {
  border-bottom-width: 0;
}

.categoryItemTitle,
.categoryItemImage {
  transition: all ease-in-out 0.5s;
}

.categoryItem:hover .categoryItemImage {
  transform: scale(1.2);
  padding: 3px;
}

.categoryItem:hover .categoryItemTitle {
  /* color: #215c35; */
  border-bottom-width: 1.5px;
  border-color: #e92d36;
}
</style>
