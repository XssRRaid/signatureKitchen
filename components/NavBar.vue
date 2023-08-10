<template>
  <!-- NAVBAR -->

  <!-- Big menu -->
  <div class="ext-nav background-95-h page-transition">
    <div class="view half-height">
      <img alt class="bg static" src="images/placeholders/1920x1200-2.jpg" />
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
    <div class="container">
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
        <a class="navbar-brand" href=""
          >Signature<span class="highlight">Kitchenware</span></a
        >
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#home" class="hover-effect">Home</a></li>
          <li><a href="#about" class="hover-effect">About</a></li>
          <li><a href="#team" class="hover-effect">Team</a></li>
          <li><a href="#services" class="hover-effect">Services</a></li>
          <li><a href="#work" class="hover-effect">Work</a></li>
          <li><a href="#process" class="hover-effect">Process</a></li>
          <li><a href="#skills" class="hover-effect">Skills</a></li>
          <li><a href="#contact" class="hover-effect">Contact</a></li>
          <li class="hidden-xs">
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
