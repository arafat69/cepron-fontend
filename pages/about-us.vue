<template>
  <client-only>
    <div class="page-content">
      <div class="container">
        <div
          class="about-us-banner"
          style="background: url('/images/about-us-header-bg.svg') no-repeat"
        >
          <h1>About Us</h1>
          <p>We do things a bit differently, and that's the way we like it!</p>
        </div>
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="card our-story shadow">
              <div class="card-body">
                <h2>Our Story</h2>
                <p class="text-grey">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis dolore delectus eum, esse minima facere voluptatum
                  cumque vel praesentium fugit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-md-6">
            <div class="card no-bg">
              <div class="card-body">
                <h2>Our Mission</h2>
                <p class="text-grey">
                  Our mission is to develop and provide the tools which maximize
                  the efficiency and effectiveness of training, communications
                  and HR Management by fusing the advantages of systems,
                  multimedia, and design.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card no-bg">
              <div class="card-body">
                <h2>Our Vision</h2>
                <p class="text-grey">
                  Our vision is a world, where everyone is able to learn
                  anything required to live a meaningful life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      meta: '',
    }
  },
  head() {
    return {
      title: 'About Us | Cepron',
      meta: this.meta,
    }
  },
  mounted() {
    this.getMeta()
  },
  methods: {
    getMeta() {
      this.$axios.get('/meta/about-us').then((response) => {
        this.meta = response.data.data.metas
      })
    },
  },
}
</script>

<style scoped>
.page-content {
  padding-top: 60px;
}
.about-us-banner {
  position: relative;
  height: 400px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.about-us-banner h1 {
  font-size: 2.5rem;
  color: #ffffff;
}
h2 {
  font-size: 1.9rem;
  font-weight: 800;
}
.about-us-banner h1,
p {
  z-index: 1;
}
.about-us-banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #000000;
  opacity: 0.2;
}
.our-story {
  border-radius: 0px;
  margin-top: -50px;
}
.no-bg {
  border: none;
  background: none;
}
@media screen and (max-width: 767px) {
  .our-story {
    text-align: center;
  }
}
@media screen and (max-width: 480px) {
  .card-body {
    text-align: center;
  }
}
</style>
