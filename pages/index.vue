<template>
  <div class="main">
    <!-- BEGIN: Page content -->
    <!-- <div
      class="youtube-bg"
      data-video="vog0_BSW6KA"
      data-alternative="images/placeholders/1920x1200-0.jpg"
    ></div> -->

    <img class="bg full-size d-none" src="images/bg/bg-L3.jpg" />

    <!-- <div
      class="video-bg"
      data-video="./bg-2.mp4"
      data-alternative="images/bg/bg-L3.jpg"
    ></div> -->

    <section id="home">
      <div class="view">
        <img class="bg" src="images/bg/bg-dark-L1.jpg" />
        <img class="bg" src="images/bg/bg-dark-L2.jpg" />
        <div class="content no-top-padding no-bottom-padding colors-a">
          <div
            class="heroContent colors-g background-40 col-xs-8 col-sm-7 col-md-6 col-lg-5"
          >
            <div class="heroHeader">
              <p class="subtitle text-g">Welcome to Our interactive E-Catalog</p>

              <h2 class="text-left heroTitle">
                <span class="highlight">Signature</span> <br />
                <span class="link">Kitchenware</span>
              </h2>

              <div
                class="textillate heroTagline text-g heading hidden-xs hidden-sm font-weight-500"
                data-textillate-options="{loop:true, in:{effect:'flipInY', reverse:false}, out:{effect:'flipOutY', reverse:false}}"
              >
                <ul class="texts">
                  <li>Premium Quality Stainless Steel Cookware</li>
                  <li>Elevating Your Culinary Experience!</li>
                  <li>The Mark Of Excellence</li>
                  <!-- <li>Elevating Your Culinary Experience!</li>
    <li>We Are Developers</li>
    <li>We Are Creative</li> -->
                </ul>
              </div>
            </div>

            <div class="heroBody">
              <p class="heroText text-justify heading-h background-10">
                Manufacturers &amp; Suppliers of Premium Grade, High-Quality Stainless
                Steel kitchenware. When it comes to premium quality cookware,
                <span class="colors-a link"><em>Signature</em></span> has become the
                industry leader because of its exceptional services and top-notch
                products.
              </p>

              <p class="heroLinks">
                <a href="#numbers" class="underline-text heading-f hover-effect"
                  >See Product Range</a
                >
                or
                <a href="#bestseller" class="underline-text heading-f hover-effect"
                  >Checkout Our Bestsellers!</a
                >
              </p>

              <!-- <p class="">
                <a href="#intro" class="button background-60-f heading-f border-hard"
                  >Our Product Range</a
                ><a
                  href="#bestseller"
                  class="button background-60-f heading-f border-hard"
                  >Signature Bestsellers!</a
                >
              </p> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="values">
      <AboutValues />
    </section>

    <About />
    <AboutNumbers />

    <!-- Signature Bestseller -->
    <section id="bestseller">
      <div class="view">
        <!-- <img class="bg" src="images/bg/bg-light-L1.jpg" />
        <img class="bg" src="images/bg/bg-L3.jpg" /> -->
        <div class="content no-bottom-padding colors-e background-85">
          <div class="container">
            <h2 class="text-g"><span class="highlight">Signature</span> Bestsellers</h2>
            <p class="header-details">
              Checkout What's <span class="link">Hot</span> &amp; Cooking!
            </p>
            <!-- <p class="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore.
            </p> -->
          </div>

          <!-- product gallery -->
          <div
            class="gallery background-a background-60"
            data-default-group="all"
            data-overlay=".gallery-overlay"
          >
            <div class="container-fluid">
              <!-- start: product filter -->
              <div class="filter">
                <ul class="nav nav-pills text-center">
                  <li><a class="hover-effect" data-group="all" href="#">All</a></li>
                  <li><a class="hover-effect" data-group="web" href="#">Container</a></li>
                  <li>
                    <a class="hover-effect" data-group="video" href="#">Spice Box</a>
                  </li>
                  <li>
                    <a class="hover-effect" data-group="photography" href="#">Barni</a>
                  </li>
                  <li><a class="hover-effect" data-group="design" href="#">Thali</a></li>
                  <li><a class="hover-effect" data-group="xxx" href="#">Milk Pot</a></li>
                  <li><a class="hover-effect" data-group="xxx" href="#">Canister</a></li>
                  <li><a class="hover-effect" data-group="xxx" href="#">Bucket</a></li>
                  <li><a class="hover-effect" data-group="xxx" href="#">Handi</a></li>
                  <li><a class="hover-effect" data-group="xxx" href="#">Mug</a></li>
                  <li>
                    <a class="hover-effect" data-group="xxx" href="#">Spice Box Plate</a>
                  </li>
                  <li><a class="hover-effect" data-group="xxx" href="#">Milk Can</a></li>
                  <li>
                    <a class="hover-effect" data-group="xxx" href="#">Multi Kadhai</a>
                  </li>
                  <li>
                    <a class="hover-effect" data-group="xxx" href="#">Dinner Set</a>
                  </li>
                  <li><a class="hover-effect" data-group="xxx" href="#">Tiffin</a></li>
                </ul>
              </div>
              <!-- end: product filter -->

              <div class="row">
                <div class="grid">
                  <!-- product cards -->
                  <div class="item col-md-3 col-sm-4 col-xs-6" data-groups='["design"]'>
                    <a href="#!portfolio/portfolio-item-1.html" class="hover-overlay">
                      <img alt="Project 1" src="images/placeholders/500x400-1.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden">
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
                        <div class="hidden">
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
                    <a href="#!portfolio/portfolio-item-3.html" class="hover-overlay">
                      <img alt="Project 3" src="images/placeholders/500x400-0.jpg" />
                      <div class="overlay background-90-e">
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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
                        <div class="hidden">
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

          <div class="viewAllProducts">
            <a class="underline-text heading-c" href="#work">View All Products</a>
          </div>
        </div>
      </div>
    </section>

    <!-- <AboutServices /> -->
    <AboutTestimonial />

    <!-- Signature Series -->
    <section id="signatureSeries">
      <div class="view" id="who-we-are">
        <div class="content small-top-padding colors-e background-85 viewAllProducts">
          <a class="underline-text heading-a" href="#signatureSeries">
            <h4>
              Looking for something more <span class="link"><em>Premium</em></span> ?
            </h4>
          </a>
        </div>

        <div class="content pane">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-7 stretch-height pane">
                <div class="view fluid-height">
                  <!-- <img class="bg" src="images/bg/bg-L7.jpg" />
                <img class="bg" src="images/bg/bg-light-L1.jpg" /> -->
                  <img class="bg" src="images/bg/bg-L7.jpg" />
                  <div
                    class="content justify-content-center d-flex colors-b background-90"
                  >
                    <div class="signatureSeriesDesc">
                      <h3 class="text-left link">
                        The <span class="highlight">Signature</span> Series...
                      </h3>
                      <h6 class="subtitle">
                        <strong>A Notch Above The Best!</strong>
                      </h6>
                      <p>
                        Aliquam fermentum massa ac est sollicitudin, at ultricies ligula
                        tristique. Cras finibus, nulla ac convallis feugiat, nisl nisl
                        lobortis est, eget auctor velit magna vel nunc. Donec nec eros
                        rhoncus.
                      </p>
                      <p>
                        Aenean nisi neque, aliquam ut nibh sit amet, finibus sagittis
                        tortor aenean consectetur.
                      </p>

                      <div class="row">
                        <div class="col-xs-6 col-md-3 d-flex">
                          <img class="circle" src="images/bg/bg-light-L1.jpg" />
                        </div>
                        <div class="col-xs-6 col-md-3 d-flex">
                          <img class="circle" src="images/bg/bg-light-L1.jpg" />
                        </div>
                        <div class="col-xs-6 col-md-3 d-flex">
                          <img class="circle" src="images/bg/bg-light-L1.jpg" />
                        </div>
                        <div class="col-xs-6 col-md-3 d-flex">
                          <img class="circle" src="images/bg/bg-light-L1.jpg" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-5 stretch-height pane">
                <div class="view fluid-height">
                  <img class="bg" width="auto" src="images/bg/bg-light-L1.jpg" />
                  <img class="bg" width="auto" src="images/bg/bg-L8.jpg" />
                  <img class="bg" width="auto" src="images/bg/bg-L7.jpg" />
                  <div class="content fluid-height colors-d background-25">
                    <div class="position-middle-center text-center">
                      <a class="button border-a background-c heading-c" href="#work"
                        >View Signature Series</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="colors-f background-85 viewAllProducts">
          <a class="underline-text heading-a" href="#work">View All Products</a>
          <a class="button background-c heading-c" href="#work">View Signature Series</a>
        </div> -->
      </div>
    </section>

    <!-- Signature Latest -->
    <section id="latestGallery">
      <div class="view">
        <div class="colors-g background-75 viewAllProducts">
          <a class="underline-text colors-h background-0" href="#latestGallery">
            <h4>What's <span class="link">New</span> On Our Shelves?</h4>
          </a>
        </div>
        <!-- <img class="bg" src="images/bg/bg-light-L1.jpg" />
        <img class="bg" src="images/bg/bg-L3.jpg" /> -->
        <div class="row no-bottom-padding colors-e background-85">
          <div class="col-md-8 latestGalleryCardsContainer">
            <!-- Latest gallery -->
            <div
              class="gallery background-a background-60"
              data-default-group="all"
              data-overlay=".gallery-overlay"
            >
              <div class="container-fluid">
                <div class="row">
                  <div class="grid">
                    <!-- product cards -->
                    <div class="item col-sm-4 col-xs-6" data-groups='["design"]'>
                      <a href="#!portfolio/portfolio-item-1.html" class="hover-overlay">
                        <img alt="Project 1" src="images/placeholders/500x400-1.jpg" />
                        <div class="overlay background-90-e">
                          <div class="hidden">
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
                      class="item col-sm-4 col-xs-6"
                      data-groups='["photography", "web", "video"]'
                    >
                      <a href="#!portfolio/portfolio-item-2.html" class="hover-overlay">
                        <img alt="Project 2" src="images/placeholders/500x400-2.jpg" />
                        <div class="overlay background-90-e">
                          <div class="hidden">
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
                      class="item col-sm-4 col-xs-6"
                      data-groups='["photography", "design"]'
                    >
                      <a href="#!portfolio/portfolio-item-3.html" class="hover-overlay">
                        <img alt="Project 3" src="images/placeholders/500x400-0.jpg" />
                        <div class="overlay background-90-e">
                          <div class="hidden">
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
                      class="item col-sm-4 col-xs-6"
                      data-groups='["photography", "web", "video"]'
                    >
                      <a href="#!portfolio-item-4.html" class="hover-overlay">
                        <img alt="Project 4" src="images/placeholders/500x400-1.jpg" />
                        <div class="overlay background-90-e">
                          <div class="hidden">
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
                      class="item col-sm-4 col-xs-6"
                      data-groups='["photography", "design"]'
                    >
                      <a href="#!portfolio-item-5.html" class="hover-overlay">
                        <img alt="Project 5" src="images/placeholders/500x400-2.jpg" />
                        <div class="overlay background-90-e">
                          <div class="hidden">
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
                      class="item col-sm-4 col-xs-6"
                      data-groups='["photography", "web", "design"]'
                    >
                      <a href="#!portfolio-item-6.html" class="hover-overlay">
                        <img alt="Project 6" src="images/placeholders/500x400-0.jpg" />
                        <div class="overlay background-90-e">
                          <div class="hidden">
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="view">
              <div class="content small-top-padding no-bottom-padding">
                <h2 class="hidden-xs hidden-sm text-g latestGalleryTitle">
                  <p class="highlight">Signature</p>
                  <p class="">Latest</p>
                  <p class="">Collection</p>
                </h2>
                <p class="hidden-xs hidden-sm text-left small-bottom-padding">
                  Aenean nisi neque, aliquam ut nibh sit amet, finibus sagittis tortor
                  aenean consectetur.
                </p>
                <p class="latestGalleryTitleButton">
                  <a
                    href="#work"
                    class="button border-link background-lite-b heading-b border-hard"
                    >View All The Latest</a
                  >
                  - or -
                </p>
                <p>
                  <a class="heading font-weight-500" href="#browseCategory">
                    <h6>Browse By <span class="link">Category</span></h6>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Browse Category -->
    <section id="browseCategory">
      <ProductsCategory />
    </section>

    <Contact />

    <!-- END: Page content -->
    <!-- <NuxtWelcome /> -->
  </div>
</template>

<script>
useHead({
  title: "Signature Kitchenware Online Catalog",
});
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
