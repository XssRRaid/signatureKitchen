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
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Container</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Spice Box</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Barni</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Thali</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Milk Pot</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Canister</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Bucket</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Handi</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Spice Box Plate</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="categoryItemImage">
                  <img class="circle" src="/images/bg/bg-light-L1.jpg" />
                </div>
                <p class="title underline-text categoryItemTitle">Mug</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="">
                  <img
                    class="circle categoryItemImage"
                    src="/images/bg/bg-light-L1.jpg"
                  />
                </div>
                <p class="title underline-text categoryItemTitle">Milk Can</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="">
                  <img
                    class="circle categoryItemImage"
                    src="/images/bg/bg-light-L1.jpg"
                  />
                </div>
                <p class="title underline-text categoryItemTitle">Multi Kadhai</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="">
                  <img
                    class="circle categoryItemImage"
                    src="/images/bg/bg-light-L1.jpg"
                  />
                </div>
                <p class="title underline-text categoryItemTitle">Dinner Set</p>
              </a>
            </swiper-slide>

            <swiper-slide class="">
              <a class="categoryItem">
                <div class="">
                  <img
                    class="circle categoryItemImage"
                    src="/images/bg/bg-light-L1.jpg"
                  />
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
  /* width: 140px;
  height: 140px; */
  border-radius: 50%;
  width: clamp(70px, 9.06vw, 145px) !important;
  height: clamp(70px, 9.06vw, 145px) !important;
}

.categoryItemTitle {
  border-bottom-width: 0 !important;
  width: 100%;
}

a.categoryItem {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.categoryItemTitle,
.categoryItemImage {
  transition: all ease-in-out 0.3s;
}

.categoryItem:hover .categoryItemImage {
  transform: scale(1.2);
  padding: 3px;
}

.categoryItem:hover .categoryItemTitle {
  color: #e92d36;
  /* border-bottom-width: 1.5px !important;
  border-color: #e92d36; */
}

.categoryItem.categoryItemTitle::after,
.categoryItem.categoryItemTitle::before {
  display: inline-block;
  opacity: 0;
  transition: all ease 2s;
}

.categoryItemTitle::before {
  width: 20px;
  text-align: right;
  margin-right: 5px;
  margin-left: -25px;
  content: "[";
  transform: translateX(20px);
}

.categoryItemTitle::after {
  width: 20px;
  text-align: left;
  margin-left: 5px;
  margin-right: -25px;
  content: "]";
  transform: translateX(-20px);
}

.categoryItem:hover .categoryItemTitle:after,
.categoryItem:hover .categoryItemTitle:before {
  opacity: 1;
  transform: translateX(0px);
}
</style>
