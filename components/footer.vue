<template>
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mb-3">
          <img src="/images/logo/logo.svg" height="60" alt="" />
          <p class="mb-0 mt-2">
            Learn 100% online, Develop hobbies, new skills and career-changing
            expertise with our flexible courses.
          </p>
        </div>
        <!-- <div class="col-6 col-lg-2">
          <h4 class="footer-title">Links</h4>
          <ul>
            <li><nuxt-link to="#">About</nuxt-link></li>
            <li><nuxt-link to="#">User Agreement</nuxt-link></li>
            <li><nuxt-link to="#">Privacy Policy</nuxt-link></li>
          </ul>
        </div>
        <div class="col-6 col-lg-2">
          <h4 class="mb-1"></h4>
          <ul class="mt-5">
            <li><nuxt-link to="#">Copyright Policy</nuxt-link></li>
            <li><nuxt-link to="#">Contact Us</nuxt-link></li>
            <li><nuxt-link to="#">Help Support</nuxt-link></li>
          </ul>
        </div> -->
      </div>
    </div>
    <hr />
    <div class="center">
      <p>© All rights Reserved</p>
    </div>
  </div>
</template>

<style scoped>
#footer {
  padding: 10px 0px;
  padding-top: 20px;
  background: #eee;
}
#footer p {
  color: #888;
}
.center {
  text-align: center;
  font-size: 0.9rem;
}
p {
  margin-bottom: 0px;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li a {
  text-decoration: none;
  color: black;
  color: #777;
  font-weight: 500;
  transition: all 0.2s;
}
.footer-title {
  position: relative;
  font-weight: 700;
  margin-bottom: 20px;
  color: #888;
}
ul li a:hover {
  color: rgb(32, 135, 164);
  font-weight: 600;
}
.footer-title:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 30px;
  height: 3px;
  background: rgb(32, 135, 164);
}
</style>
