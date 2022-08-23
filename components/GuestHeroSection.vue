<template>
  <div class="hero-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 mt-5">
          <div class="thumbnail">
            <img src="~/assets/images/h-bg.png" height="80%" alt="" />
          </div>
        </div>
        <div class="col-lg-6 col-md-6 mt-lg-5">
          <h2>Lorem ipsum dolor sit amet.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolor
            officiis perferendis!
          </p>
          <nuxt-link to="/courses" class="btn btn-custom mt-2">
            <i class="far fa-play-circle"></i> Browse Courses</nuxt-link
          >
          <nuxt-link
            v-show="!isLoggedIn"
            to="/register"
            class="btn btn-custom-secondary mt-2"
          >
            Register
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
}
</script>
<style scoped>
.hero-section {
  min-height: 60vh;
  width: 100%;
  padding: 30px 0px;
  background: rgb(1, 4, 165);
  background: linear-gradient(
    90deg,
    rgba(1, 4, 165, 0.15449929971988796) 0%,
    rgba(83, 1, 177, 0.12368697478991597) 24%,
    rgba(1, 107, 192, 0.13209033613445376) 68%,
    rgba(0, 212, 255, 0.15449929971988796) 100%
  );
}
.last-course {
  height: 50vh;
}
.thumbnail {
  height: 80%;
  width: 80%;
  overflow: hidden;
}
.thumbnail img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.btn-custom {
  background-color: none;
  border: 2px solid #fff;
  border-radius: 25px;
  padding: 10px 30px;
  font-size: 1.1rem;
  font-weight: 600;
}
.btn-custom:hover {
  color: rgb(71, 71, 124);
}
.btn-custom:hover i {
  margin-right: 5px;
  font-size: 1.3rem;
  transition: all 0.3s;
}
.btn-custom-secondary {
  background-color: rgb(78, 78, 187);
  border-radius: 25px;
  padding: 10px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
}
.btn-custom-secondary:hover {
  background: rgb(90, 90, 187);
  transition: all 0.5s;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
@media screen and (max-width: 768px) {
  .thumbnail {
    height: auto;
  }
}
</style>
