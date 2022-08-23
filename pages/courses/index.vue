<template>
  <client-only>
    <div class="page-content">
      <div class="container">
        <div class="card">
          <div class="card-body">
            <div class="row justify-content-between">
              <div class="col-md-5 filter mb-3 mb-md-0">
                <select name="select_category" class="form-control">
                  <option>Select Category</option>
                </select>
                <select name="select_category" class="form-control">
                  <option>Filter by</option>
                </select>
              </div>
              <div class="col-md-5">
                <b-input-group>
                  <b-form-input
                    type="text"
                    placeholder="Search course"
                    required
                  ></b-form-input>

                  <b-input-group-append>
                    <b-input-group-text>
                      <img src="/icons/search.svg" alt="search icon" />
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
              </div>
            </div>
          </div>
        </div>
        <div v-if="courses" class="row mt-5">
          <CourseCard
            v-for="course in courses"
            :key="course.id"
            :course="course"
          ></CourseCard>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'default',
  data() {
    return {
      meta: '',
    }
  },
  head() {
    return {
      title: 'Courses | Cepron',
      meta: this.meta,
    }
  },
  computed: {
    ...mapGetters({
      courses: 'course/getCourses',
    }),
  },
  mounted() {
    this.getMeta()
    this.fetchCourses()
  },
  methods: {
    getMeta() {
      this.$axios.get('/meta/courses').then((response) => {
        this.meta = response.data.data.metas
      })
    },
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
.filter {
  display: flex;
  column-gap: 30px;
}
.input-group {
  border: 1px solid #f1f2f6;
  border-radius: 0px;
  overflow: hidden;
}
.form-control:focus {
  box-shadow: none;
}
.form-control {
  border-radius: 0px;
}

.input-group-text {
  border: none;
  border-radius: 0px !important;
  cursor: pointer;
  background-color: #fff;
}
</style>
