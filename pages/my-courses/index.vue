<template>
  <div class="container">
    <p class="mt-2">Home/Profile</p>
    <hr />
    <div class="main-content">
      <h6>My Courses</h6>
      <b-tabs class="dashboard-tab mt-2" content-class="mt-3">
        <b-tab title="Running" active>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body mycourse" @click="showCourseVideo(2)">
                  <div class="image">
                    <img src="/images/mycourse-image.svg" alt="" />
                  </div>
                  <div class="text">
                    <h6>Spoken English at Home</h6>
                    <div class="space-between mt-1">
                      <p>
                        <img src="/icons/play-icon.svg" alt="lesson icon" />
                        12 Video
                      </p>
                      <p>
                        <img src="/icons/star.svg" alt="review icon" />
                        4.8(345)
                      </p>
                    </div>
                    <div class="author mt-1">
                      <img
                        src="/images/avatar/avatar.svg"
                        height="30"
                        width="30"
                        style="border-radius: 50%"
                        alt=""
                      />
                      <p>Munzereen Shahid</p>
                    </div>
                    <div class="row mt-1 align-items-center">
                      <div class="col-9">
                        <b-progress height="10px" value="80"></b-progress>
                      </div>
                      <div class="col-3 progress-percent">80%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Finished">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body mycourse">
                  <div class="image">
                    <img src="/images/mycourse-image.svg" alt="" />
                  </div>
                  <div class="text">
                    <h6>Spoken English at Home</h6>
                    <div class="space-between mt-1">
                      <p>
                        <img src="/icons/play-icon.svg" alt="lesson icon" />
                        12 Video
                      </p>
                      <p>
                        <img src="/icons/star.svg" alt="review icon" />
                        4.8(345)
                      </p>
                    </div>
                    <div class="author mt-1">
                      <img
                        src="/images/avatar/avatar.svg"
                        height="30"
                        width="30"
                        style="border-radius: 50%"
                        alt=""
                      />
                      <p>Munzereen Shahid</p>
                    </div>
                    <div class="row mt-1 align-items-center">
                      <div class="col-9">
                        <b-progress
                          height="10px"
                          variant="green"
                          value="100"
                        ></b-progress>
                      </div>
                      <div class="col-3 text-green progress-percent">100%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-tab>
        <b-tab title="Uncompleted">
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body mycourse">
                  <div class="image">
                    <img src="/images/mycourse-image.svg" alt="" />
                  </div>
                  <div class="text">
                    <h6>Spoken English at Home</h6>
                    <div class="space-between mt-1">
                      <p>
                        <img src="/icons/play-icon.svg" alt="lesson icon" />
                        12 Video
                      </p>
                      <p>
                        <img src="/icons/star.svg" alt="review icon" />
                        4.8(345)
                      </p>
                    </div>
                    <div class="author mt-1">
                      <img
                        src="/images/avatar/avatar.svg"
                        height="30"
                        width="30"
                        style="border-radius: 50%"
                        alt=""
                      />
                      <p>Munzereen Shahid</p>
                    </div>
                    <div class="row mt-1 align-items-center">
                      <div class="col-9">
                        <b-progress
                          height="10px"
                          variant="red"
                          value="0"
                        ></b-progress>
                      </div>
                      <div class="col-3 text-red progress-percent">0%</div>
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
</template>

<script>
export default {
  layout: 'auth',
  // middleware: 'authenticated',
  data() {
    return {
      is_CourseDetails: false,
    }
  },

  head: {
    title: 'My Courses | Cepron',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
  },
  methods: {
    showCourseVideo(myCoursesId) {
      this.$router.push(`/my-courses/${myCoursesId}`)
    },
  },
}
</script>
<style scoped>
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
.lession {
  color: #616b77;
  margin-top: 6px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: bold;
  float: right;
}
.mycourse {
  display: flex;
  column-gap: 20px;
  cursor: pointer;
}
.image {
  width: 30%;
  overflow: hidden;
  border-radius: 15px;
}
.image img {
  width: 100%;
}
.text {
  width: 70%;
}
.author {
  display: flex;
  align-items: center;
  column-gap: 15px;
}
@media screen and (max-width: 1199px) {
  .image {
    width: 40%;
  }
  .text {
    width: 60%;
  }
  h6 {
    font-size: 1.2rem;
  }
}
@media screen and (max-width: 800px) {
  .mycourse {
    column-gap: 10px;
  }
}
@media screen and (max-width: 480px) {
  h6 {
    font-size: 1rem;
  }
  .progress-percent {
    font-size: 0.7rem;
  }
}
</style>
