<template>
  <div class="our-instructors">
    <div class="row mx-1">
      <div class="col-md-12 col-lg-6 title">
        <h1 class="section-title">Our Instructors</h1>
        <p>Here’s everything you need to know about our Instructor</p>
      </div>
      <div class="col-md-12 col-lg-6 center-on-md mt-2 mt-lg-0">
        <div class="row justify-content-end">
          <select name="category" class="no-border">
            <option value="">category</option>
            <option value="">category 2</option>
            <option value="">category 3</option>
          </select>
          <select name="top-rated" class="no-border ml-2 mr-2">
            <option value="">Top rated</option>
            <option value="">category 2</option>
            <option value="">category 3</option>
          </select>
          <b-button variant="primary">View All</b-button>
        </div>
      </div>
      <div
        v-for="instructor in instructors"
        :key="instructor.id"
        class="col-md-6 col-lg-4 mt-5 mt-sm-4"
      >
        <InstructorCard :instructor="instructor" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      instructors: [
        {
          id: 1,
          name: 'Palash Hawladar',
          occupation: 'Digital Marketer',
          bio: 'Seasoned digital marketer with 6+ years of experience building and implementing strategies ...',
          courses: 12,
          level: 4,
          students: 1238,
        },
        {
          id: 2,
          name: 'Munzareen Shahid',
          occupation: 'MS English',
          bio: 'Seasoned digital marketer with 6+ years of experience building and implementing strategies ...',
          courses: 11,
          level: 2,
          students: 1452,
        },
        {
          id: 3,
          name: 'Elizabeth',
          occupation: 'Digital Marketer',
          bio: 'Seasoned digital marketer with 6+ years of experience building and implementing strategies ...',
          courses: 15,
          level: 3,
          students: 1752,
        },
        {
          id: 4,
          name: 'Edmond Halley',
          occupation: 'Digital Marketer',
          bio: 'Seasoned digital marketer with 6+ years of experience building and implementing strategies ...',
          courses: 15,
          level: 3,
          students: 1752,
        },
      ],
    }
  },
}
</script>

<style>
.our-instructors {
  padding: 115px 0px;
}
@media screen and (max-width: 991px) {
  .our-instructors {
    padding: 60px 0px;
  }
  .title {
    text-align: center;
  }
  .center-on-md {
    display: flex;
    justify-content: center;
  }
}
</style>
