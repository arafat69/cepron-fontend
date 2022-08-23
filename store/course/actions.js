export default {
  getCourses(context) {
    return this.$axios.$get('/courses')
  },
  showCourse(context, courseId) {
    return this.$axios.$get('/courses/' + courseId)
  },
  enrolledStudent(context, courseId) {
    return this.$axios.post('/courses/' + courseId + '/student-has-access')
  },
  getMyCourses(context) {
    return this.$axios.$get('/my-courses')
  },
  getCurrentActiveCourse(context) {
    return this.$axios.$get('/my-courses/current-active-course')
  },
  getRecentCourses(context) {
    return this.$axios.$get('/my-courses/recent-courses')
  },
}
