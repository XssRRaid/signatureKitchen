<script setup></script>

<template>
  <div>
    <div class="page-border bottom colors-e background-solid">
      <a href="#top" class="hover-effect">To <span class="highlight">Top</span></a>
    </div>

    <div class="page-border left colors-e background-solid">
      <ul>
        <li>
          <a href="https://www.facebook.com/" target="_blank"
            ><i class="fa fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="http://www.instagram.com/" target="_blank"
            ><i class="fa fa-instagram"></i
          ></a>
        </li>
        <li>
          <a href="http://www.youtube.com/" target="_blank"
            ><i class="fa fa-youtube"></i
          ></a>
        </li>
      </ul>
    </div>

    <div class="page-border right colors-e background-solid"></div>

    <ul id="dot-scroll" class="colors-e background-solid"></ul>

    <NavBar />
    <Overlay />
    <slot />

    <Footer />
  </div>
</template>
