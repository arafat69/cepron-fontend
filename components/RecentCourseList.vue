<template>
  <div v-if="recentCourses.length > 0" class="row">
    <div v-if="recentCourses" class="col-lg-12">
      <h1 class="mt-3 mb-3">
        <span class="font-blue">{{ $t('Recent') }}</span> {{ $t('Courses') }}
      </h1>
    </div>
    <div v-if="recentCourses.length > 0" class="col-lg-12">
      <div class="row">
        <CourseCard
          v-for="course in recentCourses"
          :key="course.id"
          :course="course"
        ></CourseCard>
      </div>
    </div>
    <div v-else class="p-3 text-center">
      <p>No recent courses found!</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RecentCourseList',
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      recentCourses: 'course/getRecentCourses',
    }),
  },
  mounted() {
    this.fetchRecentCourses()
  },
  methods: {
    fetchRecentCourses() {
      this.$store
        .dispatch('course/getRecentCourses')
        .then((response) => {
          this.$store.commit(
            'course/SET_RECENT_COURSES',
            response.data.recent_courses
          )
        })
        .catch((error) => {
          this.$toast.error(error.response.message)
        })
    },
  },
}
</script>

<style scoped>
h1 {
  font-weight: bold;
}
</style>
