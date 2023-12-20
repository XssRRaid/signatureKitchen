<template>
  <!-- NAVBAR -->

  <!-- Big menu -->
  <div class="ext-nav background-95-h page-transition">
    <div class="view half-height">
      <img alt class="bg static" src="/images/placeholders/1920x1200-2.jpg" />
      <div class="content no-top-padding no-bottom-padding full-height">
        <div class="container-fluid full-height">
          <div class="row full-height">
            <a href="blog.html" class="col-md-6 colors-e background-95-e full-height">
              <div>
                <span class="side-label">All The Latest</span>
                <span class="side-title">Blog</span>
              </div>
            </a>
            <a href="help.html" class="col-md-6 colors-f background-95-f full-height">
              <div>
                <span class="side-label">Documentation</span>
                <span class="side-title">Help</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid half-height">
      <div class="row full-height">
        <a
          href="#how-we-work"
          class="col-md-4 colors-g background-solid full-height border-bottom border-lite"
        >
          <div>
            <span class="side-label">Awesome</span>
            <span class="side-title">How We Work</span>
          </div>
        </a>
        <a
          href="#who-we-are"
          class="col-md-4 colors-g background-solid full-height border-bottom border-left border-lite"
        >
          <div>
            <span class="side-label">We Are Designers</span>
            <span class="side-title">Who We Are</span>
          </div>
        </a>
        <a
          href="#numbers"
          class="col-md-4 colors-g background-solid full-height border-bottom border-left border-lite"
        >
          <div>
            <span class="side-label">Some Facts</span>
            <span class="side-title">Our Numbers</span>
          </div>
        </a>
      </div>
    </div>
  </div>

  <!-- BEGIN: Top menu -->
  <nav
    class="navbar navbar-default navbar-fixed-top page-transition colors-e background-solid"
    role="navigation"
    id="top-nav"
  >
    <div class="container d-flex align-items-center justify-content-between">
      <div class="navbar-header">
        <a
          class="menu-toggle ext-nav-toggle visible-xs-block"
          data-target=".ext-nav"
          href="#"
          ><span></span
        ></a>
        <a
          class="menu-toggle navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
          href="#"
          ><span></span
        ></a>
        <NuxtLink class="navbar-brand sigLogo" to="/"
          ><img src="/images/signature-logo.png" alt=""
        /></NuxtLink>

        <!-- <a class="navbar-brand" href="./">
          <img src="/images/signature-logo.png" alt="" />
        </a> -->
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right d-flex align-items-center">
          <li>
            <NuxtLink class="hover-effect" to="/products">Signature<br />Series</NuxtLink>
          </li>
          <li>
            <NuxtLink class="hover-effect" to="/products"
              >Signature<br />Collection</NuxtLink
            >
          </li>
          <li>
            <NuxtLink class="hover-effect" to="/about">
              <span class="sigTitle">Signature</span><br />Story</NuxtLink
            >
          </li>
          <li>
            <!-- <a href="#contact" class="hover-effect">Business <br />Enquiry</a> -->
            <a href="#contact" class="hover-effect">Locate A<br />Distributor</a>
          </li>
          <li>
            <!-- <a href="#contact" class="hover-effect">Business <br />Enquiry</a> -->
            <a href="#contact" class="hover-effect">Become A<br />Distributor</a>
          </li>
          <li class="hidden-xs align-self-end">
            <a class="menu-toggle ext-nav-toggle" data-target=".ext-nav" href="#"
              ><span></span
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- END: Top menu -->

  <!-- <NuxtLink class="text-3xl font-mono" to="/">cartrader</NuxtLink> -->

  <!-- NAVBAR -->
</template>

<style>
.navbar-brand.sigLogo {
  margin-left: 0 !important;
}

.colors-e .gallery .filter .nav li a.active {
  color: #215c35;
}

#top-nav.colors-e li a:hover,
.colors-e .gallery .filter .nav li a:hover {
  color: #215c35;
}

.state1 #top-nav .dropdown-menu > li > a,
.state1 #top-nav .navbar-brand,
.state1 #top-nav .navbar-header,
.state1 #top-nav li,
.state1 #top-nav li > a {
  /* line-height: 34px; */
}

/* .state1 #top-nav li > a {
  margin: 8px 11px;
  line-height: 34px;
} */

#top-nav.colors-e li a:hover .sigTitle,
.colors-e .gallery .filter .nav li a:hover .sigTitle {
  /* color: green;   */
}

nav#top-nav > .container::before,
nav#top-nav > .container::after {
  content: unset;
}

.navbar-brand img {
  height: 60px;
}

#top-nav .menu-toggle {
  height: max-content !important;
  padding: 31px 0 !important;
}
</style>
