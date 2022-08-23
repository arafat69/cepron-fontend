<template>
  <div class="course">
    <div class="row mt-5 justify-content-between mb-3 mx-1">
      <div class="section-title mb-2 mb-md-0">
        <p class="section-title-p">{{ $t('Popular Courses') }}</p>
        <p>Here’s everything you need to know about courses</p>
      </div>
      <div class="cta">
        <b-button variant="primary">View All</b-button>
      </div>
    </div>
    <div v-if="courses" class="row">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      ></CourseCard>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CourseList',
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      courses: 'course/getCourses',
    }),
  },
  mounted() {
    this.fetchCourses()
  },
  methods: {
    fetchCourses() {
      this.$store
        .dispatch('course/getCourses')
        .then((response) => {
          this.$store.commit('course/SET_COURSES', response.data.courses)
        })
        .catch((error) => {
          this.$toast.error(error.response.message)
        })
    },
  },
}
</script>

<style scoped>
.course {
  padding: 115px 0px;
}
hr {
  margin-top: 0;
}
.section-title {
  display: flex;
  flex-direction: column;
}
.section-title-p {
  font-size: 40px;
  font-weight: bold;
  color: #2f3542;
}
h1 {
  font-weight: bold;
}
@media screen and (max-width: 991px) {
  .course {
    padding: 60px 0px;
  }
}
@media screen and (max-width: 767px) {
  .section-title-p {
    font-size: 2.063rem;
  }
}
</style>
