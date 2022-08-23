<template>
  <div class="page-content">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="row justify-content-between">
            <div class="col-md-6 instructor">
              <img
                src="/images/avatar/avatar.svg"
                height="90"
                width="90"
                style="border-radious: 50%"
                alt="Instructor Image"
              />
              <div class="instructor-intro">
                <h1 class="author-name">Munzereen Shahid</h1>
                <p class="text-grey">MS (English),University of Oxford(UK)</p>
              </div>
            </div>
            <div class="col-md-5 instructor-info mt-3 mt-md-0">
              <div class="row justify-content-between">
                <div class="col-6">
                  <p class="text-grey">
                    <img src="/icons/book.svg" alt="course icon" />
                    12 Course
                  </p>
                </div>
                <div class="col-6">
                  <p class="text-grey">
                    <img src="/icons/bar-chart-2.svg" alt="level icon" />
                    4 level
                  </p>
                </div>
                <div class="col-12">
                  <p class="text-grey">
                    <img
                      src="/icons/student-with-graduation-cap.svg"
                      alt="student icon"
                    />
                    3502 Students
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <b-tabs content-class="mt-3">
          <b-tab title="Profile" active>
            <h6 class="instructor-about">About Munzereen</h6>
            <p class="text-grey">
              Munjerin completed his undergraduate and postgraduate studies in
              English from Dhaka University. He achieved first place in the
              first class in his Masters. She is currently pursuing his second
              Masters’s in English Education with a 100% Scholarship from Oxford
              University, one of the best schools in the world. She is a teacher
              at 10 Minute School., Bangladesh’s largest online educational
              platform, and his video lectures have already reached 25 million
              students. Her IELTS score is 8.5. He is also the Chief Executive
              Officer of the Human Resources Department at 10 Minute School.
            </p>
            <div class="education-n-experience mt-5">
              <div class="row justify-content-between">
                <div class="col-md-4 education">
                  <h5 class="mb-3 border-bottom">EDUCATION</h5>
                  <div class="degree">
                    <h6>Your Degree</h6>
                    <p><strong>University Name</strong></p>
                    <p class="text-grey">2005-2008</p>
                  </div>
                </div>
                <div class="col-md-7 experiences">
                  <h5 class="mb-3 border-bottom">EXPERIENCES</h5>
                  <ul>
                    <li>
                      <div class="experience">
                        <h6>Your Position Here</h6>
                        <p><strong>Company Name | 2018 - Present</strong></p>
                        <p class="text-grey">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque nam eum voluptatum pariatur consequatur,
                          tempore quos quaerat. Ad, dolor ipsam.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="experience">
                        <h6>Your Position Here</h6>
                        <p><strong>Company Name | 2018 - Present</strong></p>
                        <p class="text-grey">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Neque nam eum voluptatum pariatur consequatur,
                          tempore quos quaerat. Ad, dolor ipsam.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </b-tab>
          <b-tab title="Courses">
            <div class="row">
              <div
                v-for="course in courses"
                :key="course.id"
                class="col-md-6 col-lg-4"
              >
                <div
                  class="card course-card mb-4"
                  style="cursor: pointer"
                  @click="goToSingleViewPage(course.id)"
                >
                  <div class="card-body">
                    <div class="card-image">
                      <img
                        :src="course.thumbnailPath"
                        alt=""
                        class="card-img-top"
                      />
                    </div>
                    <div class="course-title">
                      <h6 v-if="course.title.length < 42" class="mt-2">
                        {{ course.title }}
                      </h6>
                      <h6 v-else class="mt-2">
                        {{ course.title.substring(0, 42) + '..' }}
                      </h6>
                    </div>
                    <div class="course-info mt-1">
                      <p>
                        <img src="/icons/play-icon.svg" alt="lesson icon" />
                        12 lesson
                      </p>
                      <p>
                        <img src="/icons/eye.svg" alt="views icon" />
                        33.5k
                      </p>
                      <p>
                        <img src="/icons/star.svg" alt="review icon" />
                        4.8(345)
                      </p>
                    </div>
                    <div class="course-info">
                      <p>
                        <img src="/icons/award.svg" alt="review icon" />
                        3502 Enrolled Students
                      </p>
                    </div>
                    <div class="row px-2">
                      <div class="col-12 px-2">
                        <div class="cardfooter">
                          <b-button variant="primary">Enroll Now</b-button>
                          <div class="price">
                            <p class="offer-price">$63.24</p>
                            <p class="current-price">$50.00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutInstructor',
  data() {
    return {
      courses: [
        {
          id: 1,
          thumbnailPath: '/images/welcome_banner_model .svg',
          title: 'UI UX Design Course Certification Training ',
        },
        {
          id: 2,
          thumbnailPath: '/images/welcome_banner_model .svg',
          title: 'UI UX Design Course Certification Training ',
        },
        {
          id: 3,
          thumbnailPath: '/images/welcome_banner_model .svg',
          title: 'UI UX Design Course Certification Training ',
        },
      ],
    }
  },
  methods: {
    goToSingleViewPage(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
  },
}
</script>

<style scoped>
.instructor-info {
  display: flex;
  align-items: center;
}
.instructor-about {
  position: relative;
  font-weight: 700;
  margin-bottom: 15px;
  color: rgb(25, 26, 42);
}
.instructor-about:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 170px;
  height: 3px;
  background: #747d8c;
}

.course-title {
  height: 62px;
}
.course-info {
  display: flex;
  justify-content: space-between;
}
.price {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.offer-price {
  font-size: 16px;
  text-decoration: line-through;
  color: #22e4ac;
}
.current-price {
  font-size: 25px;
  font-weight: 700;
  color: #ff6f9b;
}
.cardfooter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
}
.info {
  display: flex;
  flex-direction: column;
  width: 75%;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
ul li {
  position: relative;
  border-left: 3px solid #747d8c;
  margin-left: -30px;
}
ul li::before {
  content: '';
  position: absolute;
  top: 0;
  left: -11px;
  height: 20px;
  width: 20px;
  background: #747d8c;
  border-radius: 50%;
}
ul li::after {
  content: '';
  position: absolute;
  top: 3px;
  left: -8px;
  height: 14px;
  width: 14px;
  background: white;
  border-radius: 50%;
}
.experience {
  padding-left: 30px;
  padding-bottom: 20px;
}
.education {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
}
.education h5 {
  width: 100%;
  text-align: right;
}
h6 {
  font-size: 20px;
  font-weight: 600;
}
@media screen and (max-width: 1199px) {
  .author-name {
    font-size: 1.75rem;
  }
}
@media screen and (max-width: 480px) {
  .author-name {
    font-size: 1.1rem;
  }
}
</style>
