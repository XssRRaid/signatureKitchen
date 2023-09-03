<template>
  <div>
    <Swiper
      :height="500"
      :modules="[SwiperAutoplay]"
      :slides-per-view="3"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
    >
      <SwiperSlide> 2 </SwiperSlide>
      <SwiperSlide> 2 </SwiperSlide>
      <SwiperSlide> 2 </SwiperSlide><SwiperSlide> 2 </SwiperSlide>
      <SwiperSlide> 2 </SwiperSlide><SwiperSlide> 2 </SwiperSlide
      ><SwiperSlide> 2 </SwiperSlide>
      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </Swiper>
  </div>
</template>

<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 20vh;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-wrapper {
  min-width: 100vh;
  width: 100vw;
}
.swiper-cards {
  width: 240px;
  height: 240px;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
