<script setup>
useHead({
  title: "Signature Kitchenware Online Catalog",
});
</script>

<template>
  <div class="main">
    <!-- BEGIN: Page content -->
    <!-- <div
      class="youtube-bg"
      data-video="vog0_BSW6KA"
      data-alternative="images/placeholders/1920x1200-0.jpg"
    ></div> -->

    <img width="100%" class="bg full-size" src="images/bg/bg-L3.jpg" />

    <!-- <div
      class="video-bg"
      data-video="./bg-2.mp4"
      data-alternative="images/bg/bg-L3.jpg"
    ></div> -->

    <section id="home">
      <div class="view">
        <img width="100%" class="bg" src="images/bg/bg-dark-L1.jpg" />
        <img width="100%" class="bg" src="images/bg/bg-dark-L2.jpg" />
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
                  Welcome to the Signature Kitchenware interactive eCatalog.
                </p>
                <p class="text-center">
                  Manufacturers &amp; Suppliers of Premium Grade, High-Quality Stainless
                  Steel kitchenware. When it comes to premium quality cookware,
                  <span class="highlight"><em>Signature</em></span> has become the
                  industry leader because of its exceptional services and top-notch
                  products.
                </p>
                <p class="text-center">
                  <a href="#intro" class="button background-60-f heading-f border-hard"
                    >Our Product Range</a
                  ><a href="#work" class="button background-60-f heading-f border-hard"
                    >Signature Bestsellers!</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <About />

    <section id="work">
      <div class="view">
        <!-- <img class="bg" src="images/bg/bg-light-L1.jpg" />
        <img class="bg" src="images/bg/bg-L3.jpg" /> -->
        <div class="content no-bottom-padding colors-g background-45">
          <div class="container">
            <h2 class="text-g"><span class="highlight">Signature</span> Bestsellers</h2>
            <p class="header-details">Checkout What's Hot &amp; Cooking!</p>
            <!-- <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p> -->
          </div>
          <div
            class="gallery background-a background-60"
            data-default-group="all"
            data-overlay=".gallery-overlay"
          >
            <div class="container-fluid">
              <div class="filter">
                <ul class="nav nav-pills text-center">
                  <li><a class="hover-effect" data-group="all" href="#">All</a></li>
                  <li><a class="hover-effect" data-group="web" href="#">Web</a></li>
                  <li><a class="hover-effect" data-group="video" href="#">Video</a></li>
                  <li>
                    <a class="hover-effect" data-group="photography" href="#"
                      >Photography</a
                    >
                  </li>
                  <li><a class="hover-effect" data-group="design" href="#">Design</a></li>
                  <li><a class="hover-effect" data-group="xxx" href="#">XXX</a></li>
                </ul>
              </div>

              <div class="row">
                <div class="grid">
                  <div class="item col-md-3 col-sm-4 col-xs-6" data-groups='["design"]'>
                    <a href="#!portfolio/portfolio-item-1.html" class="hover-overlay">
                      <img alt="Project 1" src="images/placeholders/500x400-1.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Image</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-picture-o heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "web", "video"]'
                  >
                    <a href="#!portfolio/portfolio-item-2.html" class="hover-overlay">
                      <img alt="Project 2" src="images/placeholders/500x400-2.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">YouTube Video</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-youtube-square heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "design"]'
                  >
                    <a href="#!portfolio-item-3.html" class="hover-overlay">
                      <img alt="Project 3" src="images/placeholders/500x400-0.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Slider</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center"><i class="fa fa-th heading-e"></i></p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "web", "video"]'
                  >
                    <a href="#!portfolio-item-4.html" class="hover-overlay">
                      <img alt="Project 4" src="images/placeholders/500x400-1.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Vimeo Video</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-vimeo-square heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "design"]'
                  >
                    <a href="#!portfolio-item-5.html" class="hover-overlay">
                      <img alt="Project 5" src="images/placeholders/500x400-2.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Slider</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center"><i class="fa fa-th heading-e"></i></p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "web", "design"]'
                  >
                    <a href="#!portfolio-item-6.html" class="hover-overlay">
                      <img alt="Project 6" src="images/placeholders/500x400-0.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Image</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-picture-o heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["design", "video", "web"]'
                  >
                    <a href="#!portfolio-item-7.html" class="hover-overlay">
                      <img alt="Project 7" src="images/placeholders/500x400-1.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Vimeo Video</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-vimeo-square heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div class="item col-md-3 col-sm-4 col-xs-6" data-groups='["web"]'>
                    <a href="#!portfolio-item-8.html" class="hover-overlay">
                      <img alt="Project 8" src="images/placeholders/500x400-2.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Image</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-picture-o heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "design", "video", "web"]'
                  >
                    <a href="#!portfolio-item-9.html" class="hover-overlay">
                      <img alt="Project 9" src="images/placeholders/500x400-0.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">YouTube Video</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-youtube-square heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "design"]'
                  >
                    <a href="#!portfolio-item-10.html" class="hover-overlay">
                      <img alt="Project 10" src="images/placeholders/500x400-1.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Vimeo Video</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-vimeo-square heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["photography", "web"]'
                  >
                    <a href="#!portfolio-item-11.html" class="hover-overlay">
                      <img alt="Project 11" src="images/placeholders/500x400-2.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Image</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center">
                            <i class="fa fa-picture-o heading-e"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div
                    class="item col-md-3 col-sm-4 col-xs-6"
                    data-groups='["web", "design"]'
                  >
                    <a href="#!portfolio-item-12.html" class="hover-overlay">
                      <img alt="Project 12" src="images/placeholders/500x400-0.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden-xs">
                          <p class="title heading-e">Slider</p>
                          <p class="text-center heading-e">
                            <strong
                              >Excepteur sint lorem ipsum dolor sit amet
                              consectetur.</strong
                            >
                          </p>
                          <p class="text-center"><i class="fa fa-th heading-e"></i></p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- <AboutServices /> -->
    <AboutTestimonial />

    <Contact />

    <!-- END: Page content -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>
