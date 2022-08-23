<template>
  <client-only>
    <div id="footer">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4 col-md-4 mb-3">
            <div class="row px-3 px-md-0">
              <div class="mb-3">
                <img
                  src="/images/logo/cepron-white-logo.svg"
                  height="60"
                  alt="Cepron logo"
                />
              </div>
              <p>
                5/3, Mizan Tower, Kollayanpur Bus Stand, Mirpur Road, Dhaka,
                Bangladesh.
              </p>
              <p>Any question?</p>
              <p>Call us +88 01768 572 658 (10am - 10pm)</p>
            </div>
          </div>
          <div class="col-0 col-lg-2 hide-on-md"></div>
          <div class="col-12 col-lg-2 col-md-4 mb-3">
            <h4 class="footer-title">{{ $t('Quick Link') }}</h4>
            <ul>
              <li>
                <nuxt-link to="/about-us">{{ $t('about_us') }}</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/courses">Courses</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blogs">Blogs</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact-us">Contact us</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-3 col-md-4">
            <h4 class="footer-title">{{ $t('download_app') }}</h4>
            <ul class="app-list mt-4">
              <li class="mb-2">
                <a href="javascript:">
                  <img
                    src="/images/dummy/coming-soon-android.png"
                    height="40"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <img
                    src="/images/dummy/coming-soon-apple.png"
                    height="40"
                    alt=""
                  />
                </a>
              </li>
            </ul>
            <ul class="app-list mt-3">
              <li>
                <a href="javascript:"
                  ><img src="/icons/facebook-white.svg" alt=""
                /></a>
              </li>
              <li class="ml-2">
                <a href="javascript:"
                  ><img src="/icons/twitter-white.svg" alt=""
                /></a>
              </li>
              <li class="ml-2">
                <a href="javascript:"
                  ><img src="/icons/instagram-white.svg" alt=""
                /></a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p class="copyright-text">
          Copyright &copy; {{ copyright_year }} Cepron All Rights Reserved
        </p>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      copyright_year: new Date().getFullYear(),
    }
  },
}
</script>

<style scoped>
#footer {
  position: relative;
  background-image: url('/images/footer-bg.svg');
  min-height: 15rem;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  padding-bottom: 10px;
}
p {
  margin-bottom: 0px;
  color: #fff;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li a {
  text-decoration: none;
  color: #fff;
  font-weight: 500;
  font-size: 20px;
  transition: all 0.2s;
}
.footer-title {
  position: relative;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
}
.footer-title:before {
  content: '';
  position: absolute;
  bottom: -10px;
  height: 3px;
  width: 100%;
  background: #ffffff;
  opacity: 0.2;
}
.footer-title:after {
  content: '';
  position: absolute;
  bottom: -11px;
  left: 0;
  height: 5px;
  width: 35%;
  background: #ffffff;
}
.app-list {
  display: flex;
  column-gap: 5px;
}
.copyright-text {
  text-align: center;
  font-size: 0.9rem;
}
@media screen and (max-width: 991px) {
  .hide-on-md {
    display: none;
  }
}
</style>
