<template>
  <div class="page-content">
    <client-only>
      <div class="container">
        <div class="row">
          <div class="col-lg-7 order-2 order-lg-1">
            <h1>Spoken English at Home</h1>
            <p class="text-grey mt-3">
              Learn spoken English online. 80+ video lessons, quizzes, and notes
              to help you speak fluently in English.
            </p>
            <h5 class="mt-4">Course Instructor</h5>
            <nuxt-link to="/about-instructor">
              <div class="instructor mt-3">
                <img
                  src="/images/avatar/avatar.svg"
                  height="60"
                  width="60"
                  style="border-radious: 50%"
                  alt="Instructor Image"
                />
                <div class="name">
                  <h6>Munzereen Shahid</h6>
                  <p class="text-grey">
                    MS (English), University of Oxford (UK)
                  </p>
                </div>
              </div>
            </nuxt-link>
            <div class="mt-4">
              <h5>About Course</h5>
              <p class="text-grey mt-3">
                The ability to speak English fluently, with confidence and poise
                will always keep you a step ahead of others in every sphere of
                life. Be it academics, career, any competitive exam, or even
                traveling, proficiency in spoken English is an absolute must if
                you want to prosper. So it is needless to explain the importance
                and significance of fluent spoken English skills
              </p>
            </div>
            <div class="mt-4">
              <div class="course-content-header">
                <h5>Course Content</h5>
                <div class="info">
                  <p class="text-grey">23 lectures</p>
                  <p class="text-grey">2hr 35min</p>
                </div>
              </div>

              <b-card no-body class="mb-1 faq-card">
                <b-card-header
                  v-b-toggle.course-content-1
                  header-tag="header"
                  class="p-1"
                  role="tab"
                >
                  <div class="faq">
                    <p class="faq-text">How do I buy the course?</p>
                    <img
                      src="/icons/arrow-ios-forward.svg"
                      style="transform: rotate(90deg)"
                      alt="arrow icon"
                    />
                  </div>
                </b-card-header>
                <b-collapse
                  id="course-content-1"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <div
                    v-for="episode in course.episodes"
                    :key="episode.id"
                    class="card mt-3"
                  >
                    <nuxt-link
                      v-if="episode.is_free || isEnrolled"
                      :to="`/lectures/${episode.id}`"
                      class="course-content-card"
                    >
                      <img
                        src="/icons/play-icon.svg"
                        height="30"
                        alt="Play Icon"
                      />
                      <p class="collapsed-course-title text-grey">
                        {{ episode.title }}
                      </p>
                      <div class="time float-right">
                        <p class="text-grey">{{ episode.formattedDuration }}</p>
                        <img
                          v-if="episode.is_free"
                          src="/icons/eye-on.svg"
                          alt="Eye Icon"
                        />
                        <img v-else src="/icons/lock.svg" alt="Lock Icon" />
                      </div>
                    </nuxt-link>
                  </div>
                </b-collapse>
              </b-card>
            </div>
            <div class="mt-5">
              <h5>What students are saying</h5>
              <div class="card testimonial-card mt-3">
                <div class="card-body">
                  <p class="text-grey">
                    I feel lucky to be able to do the Spoken English Course at
                    home. This is helping me a to in my professional Life.
                  </p>
                </div>
              </div>
              <div class="student mt-5">
                <img
                  src="/images/avatar/avatar.svg"
                  height="80"
                  width="80"
                  style="border-radious: 50%"
                  alt="Student Image"
                />
                <div class="student-info">
                  <h6>Md. Mirajul Ahsan</h6>
                  <p class="text-ge">Mirpur Government High School</p>
                  <b-form-rating
                    v-model="value"
                    variant="warning"
                    class="mb-2 no-border"
                  ></b-form-rating>
                </div>
              </div>
            </div>
            <div class="mt-5">
              <h5>FAQ</h5>
              <div class="accordion" role="tablist">
                <b-card no-body class="mb-1 faq-card">
                  <b-card-header
                    v-b-toggle.accordion-1
                    header-tag="header"
                    class="p-1"
                    role="tab"
                  >
                    <div class="faq">
                      <p class="faq-text">How do I buy the course?</p>
                      <img
                        src="/icons/arrow-ios-forward.svg"
                        style="transform: rotate(90deg)"
                        alt="arrow icon"
                      />
                    </div>
                  </b-card-header>
                  <b-collapse
                    id="accordion-1"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Placeat enim quod cupiditate soluta ut.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 faq-card">
                  <b-card-header
                    v-b-toggle.accordion-2
                    header-tag="header"
                    class="p-1"
                    role="tab"
                  >
                    <div class="faq">
                      <p class="faq-text">How do I buy the course?</p>
                      <img
                        src="/icons/arrow-ios-forward.svg"
                        style="transform: rotate(90deg)"
                        alt="arrow icon"
                      />
                    </div>
                  </b-card-header>
                  <b-collapse
                    id="accordion-2"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Dolor cum nemo eius necessitatibus nulla quam quis
                        voluptas, magnam pariatur ex rerum, optio nostrum
                        delectus laboriosam distinctio minima corrupti possimus
                        ullam.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>

                <b-card no-body class="mb-1 faq-card">
                  <b-card-header
                    v-b-toggle.accordion-3
                    header-tag="header"
                    class="p-1"
                    role="tab"
                  >
                    <div class="faq">
                      <p class="faq-text">How do I buy the course?</p>
                      <img
                        src="/icons/arrow-ios-forward.svg"
                        style="transform: rotate(90deg)"
                        alt="arrow icon"
                      />
                    </div>
                  </b-card-header>
                  <b-collapse
                    id="accordion-3"
                    accordion="my-accordion"
                    role="tabpanel"
                  >
                    <b-card-body>
                      <b-card-text>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Corporis earum sapiente dolor est excepturi, quae
                        repellat libero nesciunt odio adipisci.
                      </b-card-text>
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
            </div>
            <div class="mt-5">
              <h5>Recommended Courses For You</h5>
              <div class="row mt-3">
                <div class="col-md-6">
                  <div
                    class="card course-card mb-4"
                    style="cursor: pointer"
                    @click="goToSingleViewPage(course.id)"
                  >
                    <div class="card-body">
                      <div class="card-image">
                        <img
                          src="/images/welcome_banner_model .svg"
                          alt=""
                          class="card-img-top"
                        />
                      </div>
                      <div class="course-title">
                        <h6 class="mt-2">
                          UI/UX Design Course Certificate Training
                        </h6>
                      </div>
                      <div class="course-info mt-1">
                        <p>
                          <img src="/icons/star.svg" alt="review icon" />
                          4.8(345)
                        </p>

                        <p class="offer-price">$63.24</p>
                      </div>
                      <div class="row px-2">
                        <div class="col-12 px-2">
                          <div class="cardfooter">
                            <img
                              src="/images/dummy/default-avater.jpg"
                              height="40px"
                              width="40px"
                              alt=""
                              style="border-radius: 50%"
                            />
                            <div class="info">
                              <p class="mb-0">Palash Hawladar</p>
                            </div>
                            <div class="price">
                              <p class="current-price">$50.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 order-1 order-lg-2 mb-5">
            <div class="card shadow-pink">
              <div class="card-body">
                <div class="card-image">
                  <img
                    src="/images/munzereen-shahid-course.svg"
                    style="border-radious: 15px"
                    alt=""
                  />
                </div>
                <div class="row mt-4">
                  <div class="col-6">
                    <div class="enrolled-students">
                      <img src="/icons/Cap.svg" alt="" />
                      <p>2232 Enrolled Students</p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="video-lessons">
                      <img src="/icons/video-book.svg" alt="" />
                      <p>222 Video Lessons</p>
                    </div>
                  </div>
                </div>
                <div class="mt-4">
                  <ul class="course-features">
                    <li>
                      <img src="/icons/checkmark-circle.svg" alt="" />
                      <p class="text-g">83 Video Lectures</p>
                    </li>
                    <li>
                      <img src="/icons/checkmark-circle.svg" alt="" />
                      <p class="text-g">83 Quizs</p>
                    </li>
                    <li>
                      <img src="/icons/checkmark-circle.svg" alt="" />
                      <p class="text-g">83 Notes</p>
                    </li>
                    <li>
                      <img src="/icons/checkmark-circle.svg" alt="" />
                      <p class="text-g">6 Months Course Access</p>
                    </li>
                    <li>
                      <img src="/icons/checkmark-circle.svg" alt="" />
                      <p class="text-g">Transcripts</p>
                    </li>
                    <li>
                      <img src="/icons/checkmark-circle.svg" alt="" />
                      <p class="text-g">5 Free Videos</p>
                    </li>
                    <li>
                      <img src="/icons/checkmark-circle.svg" alt="" />
                      <p class="text-g">11 Assignments</p>
                    </li>
                  </ul>
                </div>
                <div class="mt-4 priceing">
                  <p class="text-grey">
                    Have a coupon?
                    <strong>Click here to enter your code</strong>
                  </p>
                  <div class="price">
                    <p class="offer-price">$68.50</p>
                    <p class="current-price">$35.00</p>
                  </div>
                  <b-button variant="primary" class="mt-2">
                    Start Course
                  </b-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from 'moment'
export default {
  layout: 'default',
  data() {
    return {
      isLoading: false,
      courseId: '',
      course: '',
      title: '',
      isEnrolled: '',
      value: 5,
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/getLoggedInUser',
    }),
  },
  mounted() {
    this.courseId = this.$route.params.id
    this.getCourseById()
    if (this.isLoggedIn) {
      this.enrolledStudent()
    }
  },
  methods: {
    getCourseById() {
      this.$store
        .dispatch('course/showCourse', this.courseId)
        .then((response) => {
          this.course = response.data.course
          this.title = response.data.course.title
        })
        .catch((error) => {
          this.$toast.error(error.response.message)
        })
    },
    enrolledStudent() {
      this.$store
        .dispatch('course/enrolledStudent', this.courseId)
        .then((response) => {
          this.isEnrolled = response.data.data.has_access
        })
    },
    moment,
  },
}
</script>

<style scoped>
.instructor {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
.course-content-header {
  display: flex;
  justify-content: space-between;
}
.info {
  display: flex;
  column-gap: 50px;
}
.course-content-card {
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  align-items: center;
  width: 100%;
  background: #f1f2f6;
  padding: 0px 15px;
  border-radius: 15px;
  cursor: pointer;
}
a {
  text-decoration: none;
  margin: 0;
  padding: 0;
}
a:hover {
  text-decoration: none;
}
.course-card {
  height: auto !important;
}
.collapsed-course-title {
  width: 74%;
}
.course-title {
  display: flex;
  align-items: center;
}
.time {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.student {
  display: flex;
  column-gap: 15px;
  justify-content: center;
}
.faq {
  padding: 10px 0px;
  display: flex;
  justify-content: space-between;
}
.faq-card {
  border-radius: 0px;
  background: none;
  border: none;
}
.accordion > .card {
  border-bottom: 1px solid #747d8c;
}
.faq-text {
  font-size: 20px;
  font-weight: 700;
}
.faq-card .card-header {
  background: none;
}
.course-card .course-title {
  font-size: 20px;
}
.course-card .current-price {
  font-size: 1.2rem;
  font-weight: 800;
}
.shadow-pink .card-image {
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.shadow-pink .card-image img {
  width: 100%;
}
.enrolled-students {
  background: rgba(255, 238, 6, 0.1);
  border: 1px solid #ffee06;
  border-radius: 15px;
  height: 85px;
  display: flex;
  column-gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
}
.video-lessons {
  background: rgba(255, 111, 155, 0.1);
  border: 1px solid rgb(255, 111, 155);
  border-radius: 15px;
  height: 85px;
  display: flex;
  column-gap: 5px;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
}
.course-features {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 10px;
  list-style: none;
  padding: 0px;
  margin: 0px;
}
.course-features li {
  display: flex;
  column-gap: 10px;
  background: #f1f2f6;
  padding: 8px 14px;
  border-radius: 15px;
  margin-top: 10px;
}
.priceing {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.priceing p {
  text-align: center;
}
.price {
  display: flex;
  column-gap: 15px;
}
.priceing .offer-price {
  font-size: 25px;
  font-weight: 700;
}
</style>
