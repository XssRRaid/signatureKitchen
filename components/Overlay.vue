<template>
  <!-- BEGIN: overlay window -->
  <div
    class="overlay-window gallery-overlay colors-f background-95-f"
    data-overlay-zoom="#work .content"
  >
    <div class="overlay-control background-85-d">
      <a class="previos" href="#"></a>
      <a class="next" href="#"></a>
      <a class="cross" href="#"></a>
    </div>
    <div class="overlay-view"></div>
    <ul class="loader">
      <li class="background-100-d"></li>
      <li class="background-100-d"></li>
      <li class="background-100-d"></li>
    </ul>
  </div>
  <div class="overlay-window map-overlay colors-f background-95-f">
    <div class="overlay-control background-90-f">
      <a class="cross" href="#"></a>
    </div>
    <div class="overlay-view">
      <div
        class="map-canvas"
        data-latitude="42.487606"
        data-longitude="-71.115661"
        data-zoom="14"
      >
        <div
          class="map-marker"
          data-latitude="42.487606"
          data-longitude="-71.115661"
          data-text="Our awesome location"
        ></div>
        <div
          class="map-marker"
          data-latitude="42.485100"
          data-longitude="-71.113256"
          data-text="Our sales office"
        ></div>
      </div>
    </div>
  </div>

  <div class="overlay-window credits-overlay colors-g background-95-g">
    <div class="overlay-control background-85-d">
      <a class="cross" href="#"></a>
    </div>

    <!-- Credits -->
    <!-- <div class="overlay-view">
        <div class="content-container">
          <h3>Credits</h3>
          <ul>
            <li>
              Photos by:
              <ul>
                <li>
                  <a target="_blank" href="https://www.flickr.com/photos/katya_alagich/"
                    >Katya Alagich</a
                  >,
                  <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/"
                    >CC BY 2.0 License</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://www.flickr.com/photos/65047661@N00/"
                    >Jim Lukach</a
                  >,
                  <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/"
                    >CC BY 2.0 License</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://www.flickr.com/photos/johanl/"
                    >Johan Larsson</a
                  >,
                  <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/"
                    >CC BY 2.0 License</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://www.flickr.com/photos/johny/"
                    >John Kraus</a
                  >,
                  <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/"
                    >CC BY 2.0 License</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://www.flickr.com/photos/geishaboy500/"
                    >THOR</a
                  >,
                  <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/"
                    >CC BY 2.0 License</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://www.flickr.com/photos/stf-o/"
                    >stephane</a
                  >,
                  <a target="_blank" href="https://creativecommons.org/licenses/by/2.0/"
                    >CC BY 2.0 License</a
                  >
                </li>
                <li>
                  <a target="_blank" href="http://www.pexels.com/">Pexels</a>,
                  <a target="_blank" href="http://www.pexels.com/photo-license/"
                    >CC0 License</a
                  >
                </li>
                <li>
                  <a target="_blank" href="https://stocksnap.io/">Stocksnap</a>,
                  <a target="_blank" href="https://stocksnap.io/license">CC0 License</a>
                </li>
                <li>
                  <a target="_blank" href="http://picjumbo.com/">Picjumbo</a>,
                  <a target="_blank" href="http://picjumbo.com/about-author/"
                    >Picjumbo License</a
                  >
                </li>
              </ul>
            </li>
            <li>
              Video by:
              <ul>
                <li>
                  <a target="_blank" href="http://mazwai.com/">Mazwai</a>,
                  <a target="_blank" href="https://creativecommons.org/licenses/by/3.0/"
                    >CC BY 3.0 License</a
                  >
                </li>
              </ul>
            </li>
            <li>
              Icons by:
              <ul>
                <li>
                  <a target="_blank" href="http://designmodo.com/">Designmodoh</a>,
                  <a target="_blank" href="http://designmodo.com/linecons-free/"
                    >License</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div> -->
  </div>
  <div class="gate colors-e background-solid">
    <div class="gate-bar background-highlight-e"></div>
    <ul class="loader">
      <li class="background-100-g"></li>
      <li class="background-90-c"></li>
      <li class="background-100-f"></li>
    </ul>
  </div>
  <!-- End: overlay window -->
</template>

<style scoped></style>
