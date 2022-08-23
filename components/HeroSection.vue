<template>
  <div class="hero-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-6 mt-5">
          <div class="thumbnail">
            <img :src="currentActiveCourse.thumbnailPath" height="70%" alt="" />
          </div>
        </div>
        <div v-if="currentActiveCourse" class="col-lg-5 col-md-6 mt-lg-5">
          <h2>{{ currentActiveCourse.title }}</h2>
          <p>
            {{ currentActiveCourse.description }}
          </p>
          <ul>
            <li class="last-lecture">
              <i class="fas fa-play"></i>
              {{ currentActiveCourse.currentEpisode }}
            </li>
          </ul>
          <b-button
            type="button"
            @click="goToSingleViewPage(currentActiveCourse.id)"
          >
            <i class="far fa-play-circle"></i>
            Continue Watching
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeroSection',
  computed: {
    ...mapGetters({
      currentActiveCourse: 'course/getCurrentActiveCourse',
    }),
  },
  mounted() {
    this.fetchCurrentActiveCourse()
  },
  methods: {
    fetchCurrentActiveCourse() {
      this.$store
        .dispatch('course/getCurrentActiveCourse')
        .then((response) => {
          this.$toast.success(response.message)
          this.$store.commit(
            'course/SET_CURRENT_ACTIVE_COURSE',
            response.data.current_active_course
          )
        })
        .catch((error) => {
          this.$toast.error(error.response.message)
        })
    },
    goToSingleViewPage(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
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
  height: 70%;
  width: 70%;
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
