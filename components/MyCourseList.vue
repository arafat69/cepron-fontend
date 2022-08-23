<template>
  <div>
    <div class="row">
      <div class="col-lg-12 mb-4">
        <h1 class="mt-3">
          {{ $t('my_all') }} <span class="font-blue">{{ $t('Courses') }}</span>
        </h1>
      </div>
      <div v-if="myCourses.length > 0" class="col-lg-12">
        <div class="row">
          <CourseCard
            v-for="course in myCourses"
            :key="course.id"
            :course="course"
          ></CourseCard>
        </div>
      </div>
      <div v-else class="p-3 text-center">
        <p>You are not enrolled to any course yet!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyCourseList',
  data() {
    return {
      isLoading: false,
      myCourses: '',
    }
  },
  mounted() {
    this.fetchMyCourses()
  },
  methods: {
    fetchMyCourses() {
      this.$store
        .dispatch('course/getMyCourses')
        .then((response) => {
          this.myCourses = response.data.my_courses
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
