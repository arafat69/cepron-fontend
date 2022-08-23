<template>
  <div>
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
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CurrentActiveCourse',
  computed: {
    ...mapGetters({
      currentActiveCourse: 'course/getCurrentActiveCourse',
    }),
  },
  methods: {
    fetchCurrentActiveCourse() {
      this.$store
        .dispatch('course/getCurrentActiveCourse')
        .then((response) => {
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

<style scoped></style>
