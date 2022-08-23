<template>
  <div>
    <div class="welcome-section">
      <div class="dots-top-corner">
        <img src="/images/dummy/dots.svg" alt="" />
      </div>
      <div class="dots-bottom-corner">
        <img src="/images/dummy/dots.svg" alt="" />
      </div>
      <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333"
      >
        <!-- Slides with image only -->
        <b-carousel-slide
          v-for="slider in sliders"
          :key="slider.id"
          :img-src="slider.slider_photo_path"
        ></b-carousel-slide>
      </b-carousel>
      <div class="container"></div>
    </div>
    <div class="lists">
      <div class="container">
        <div class="row justify-content-center mx-lg-5">
          <div class="col-md-4 mb-3">
            <div class="card shadow-lg">
              <div class="card-content">
                <img src="/images/dummy/student.svg" alt="" />
                <h4 class="student-text mt-2">300+ {{ $t('Students') }}</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card shadow-lg">
              <div class="card-content">
                <img src="/images/dummy/course.svg" alt="" />
                <h4 class="font-orange mt-2">25+ {{ $t('Courses') }}</h4>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <div class="card shadow-lg">
              <div class="card-content">
                <img src="/images/dummy/backup-class.svg" alt="" />
                <h4 class="font-blue mt-2">{{ $t('backup_class') }}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'WelcomeSection',
  data() {
    return {
      sliders: '',
    }
  },

  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
    }),
  },
  mounted() {
    this.getSliders()
  },
  methods: {
    getSliders() {
      this.$axios.get('/sliders').then((response) => {
        this.sliders = response.data.data.sliders
      })
    },
  },
}
</script>

<style scoped>
.carousel {
  width: 90%;
  margin: auto;
  border-radius: 16px;
  overflow: hidden;
}
.carousel-item {
  transition: transform 0.8s ease-in-out;
}

.welcome-section {
  margin-top: 80px;
  background-color: #fff;
  overflow: hidden;
  max-height: 65vh;
}
.text-side {
  height: 80vh;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
h1 {
  font-size: 80px;
  font-weight: bold;
}
.font-pink {
  color: #ef99ce;
}
.btn-custom-pink-transparent {
  background-color: none;
  border: 1px solid #ef99ce;
  padding: 10px 25px;
  color: #ef99ce;
  font-weight: bold;
  border-radius: 25px;
}

.lists {
  margin-top: -15px;
}
.card {
  padding: 15px;
  border: none;
  border-radius: 25px;
  background-color: #fff;
}
.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h4 {
  font-weight: bold;
}
.student-text {
  color: #4a4ea8;
}
.font-purple {
  color: #4a4ea8;
}
.dots-top-corner {
  position: absolute;
  top: 0;
  left: 0;
}
.dots-bottom-corner {
  position: absolute;
  bottom: 0;
  right: 0;
}
@media screen and (max-width: 1200px) {
  h1 {
    font-size: 60px;
  }
}
@media screen and (max-width: 991px) {
  h1 {
    font-size: 50px;
  }
}
@media screen and (max-width: 480px) {
  h1 {
    font-size: 40px;
  }
}
</style>
