<template>
  <section id="contact">
    <div class="view">
      <img class="bg" src="/images/bg/team-bg-1.jpg" />
      <!-- <img class="bg" height="250px" src="images/icons/contact.jpg" /> -->

      <div class="content full-size colors-e background-65">
        <div class="container">
          <h2>Business Enquiry?</h2>
          <p class="header-details">Let's Get In Touch!</p>
          <div class="row">
            <div class="col-md-6">
              <div class="text-right scroll-in-animation" data-animation="fadeInLeft">
                <p class="big-font uppercase">
                  Tel: <strong class="highlight">+7 (781) 503-1810</strong>
                </p>
                <p class="big-font uppercase">
                  500 Unicorn Park Dr, 21st Floor
                  <br />
                  Woburn, MA 01801, United States
                </p>
                <p class="big-font">
                  <b>
                    <a href="mailto:info@ouraddress.com">info@ouraddress.com</a><br />
                    <a href="http://www.ouraddress.com">www.ouraddress.com</a>
                  </b>
                </p>
                <p class="big-font">
                  <a target="_blank" href="https://twitter.com/"
                    ><span class="fa-stack"
                      ><i class="fa fa-circle fa-stack-2x heading"></i
                      ><i class="fa fa-twitter fa-stack-1x text-background"></i></span
                  ></a>
                  <a target="_blank" href="https://www.facebook.com/"
                    ><span class="fa-stack"
                      ><i class="fa fa-circle fa-stack-2x heading"></i
                      ><i class="fa fa-facebook fa-stack-1x text-background"></i></span
                  ></a>
                  <a target="_blank" href="http://www.youtube.com/"
                    ><span class="fa-stack"
                      ><i class="fa fa-circle fa-stack-2x heading"></i
                      ><i class="fa fa-youtube fa-stack-1x text-background"></i></span
                  ></a>
                </p>
              </div>
            </div>

            <div class="col-md-6">
              <div class="text-left scroll-in-animation" data-animation="fadeInRight">
                <form
                  class="ajax-form"
                  data-message-class="colors-d background-95 heading border"
                  action="contact.php"
                  method="post"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-md-6 control-group">
                      <div class="alt-placeholder">Name</div>
                      <input
                        type="text"
                        name="your-name"
                        value=""
                        size="40"
                        placeholder="Name"
                        data-validation-required-message="Please fill the required field."
                        required
                      />
                      <div class="help-block"></div>
                    </div>
                    <div class="col-md-6 control-group">
                      <div class="alt-placeholder">Email</div>
                      <input
                        type="email"
                        name="your-email"
                        value=""
                        size="40"
                        placeholder="Email"
                        data-validation-required-message="Please fill the required field."
                        required
                      />
                      <div class="help-block"></div>
                    </div>
                    <div class="col-md-12 control-group">
                      <div class="alt-placeholder">Message</div>
                      <textarea
                        name="your-message"
                        placeholder="Message"
                        data-validation-required-message="Please fill the required field."
                        required
                      ></textarea>
                      <div class="help-block"></div>
                    </div>
                    <div class="col-md-12 form-actions">
                      <input class="button" type="submit" value="Send" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="text-center">
            <a
              class="map-open button background-lite-b border-heading-b heading-b"
              data-map-overlay=".map-overlay"
              href="#"
              >Locate Us on Map</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
