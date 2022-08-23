<template>
  <client-only>
    <div class="home-content">
      <WelcomeSection></WelcomeSection>
      <div class="container">
        <CourseList></CourseList>
        <CategoryList></CategoryList>
      </div>
      <BecomeInstructor />
      <div class="container">
        <OurInstructors />
      </div>
      <WhyCepron />
      <RecentBlogs />
      <Newsletter />
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'default',
  data() {
    return {
      isLoading: false,
      meta: '',
    }
  },
  head() {
    return {
      title: 'Cepron',
      meta: this.meta,
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      courses: 'course/getCourses',
    }),
  },
  mounted() {
    this.getMeta()
  },
  methods: {
    getMeta() {
      this.$axios.get('/meta/index').then((response) => {
        this.meta = response.data.data.metas
      })
    },
  },
}
</script>
<style scoped>
.home-content {
  min-height: 50vh;
}
</style>
