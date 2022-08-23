<template>
  <div class="card card-shadow">
    <div class="card-body">
      <div class="instructor-intro">
        <img
          src="/images/avatar/avatar.svg"
          alt=""
          style="height: 125px; width: 125px; border-radious: 50%"
        />
        <h6>{{ instructor.name }}</h6>
        <p class="text-grey">Digital Marketer</p>
        <p class="text-grey mt-2">
          Seasoned digital marketer with 6+ years of experience building and
          implementing strategies ...
        </p>
      </div>
      <div class="info mt-3">
        <div class="row justify-content-between mx-1">
          <p class="text-grey">
            <img src="/icons/book.svg" alt="" />
            12 Courses
          </p>
          <p class="text-grey">
            <img src="/icons/bar-chart-2.svg" alt="" />
            4 Level Instructor
          </p>
          <div class="col-12 mb-3">
            <p class="text-grey">
              <img src="/icons/student-with-graduation-cap.svg" alt="" />
              4 Level Instructor
            </p>
          </div>
          <nuxt-link to="/about-instructor" class="btn btn-outline-primary">
            Course
          </nuxt-link>
          <nuxt-link to="/about-instructor" class="btn btn-outline-primary">
            Profile
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    instructor: {
      type: [Object],
      required: true,
    },
  },
}
</script>

<style scoped>
.instructor-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.col-12 {
  margin: 0;
  padding: 0;
}
</style>
