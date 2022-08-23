<template>
  <div class="container">
    <nuxt-link to="/my-courses" class="mycourseTitle"
      >Home/My Course/Spoken English at Home</nuxt-link
    >
    <hr />
    <div class="row">
      <div class="col-lg-6">
        <div class="heading">
          <h4><strong>Spoken English at Home</strong></h4>
        </div>

        <div class="video-container">
          <video
            poster="/images/munzereen-shahid-course.svg"
            :src="videoSource"
            controls
            controlsList="nodownload"
            oncontextmenu="return false;"
          ></video>
          <div class="watermark">
            <img src="/images/logo/cepron_new_logo-01.png" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="heading">
          <h4>
            <strong>Course Content</strong>
            <!-- <small class="lession">{{ length }}</small> -->
            <small class="lession">2hr 35min</small>
            <small class="lession">32 Leasons</small>
          </h4>
          <div class="content">
            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1 faq-card">
                <b-card-header
                  v-b-toggle.accordion-1
                  header-tag="header"
                  class="p-1"
                  role="tab"
                >
                  <div class="faq">
                    <p class="faq-text">
                      Class 01: কীভাবে ইংরেজিতে নিজেকে Introduce করবেন?
                    </p>
                    <img
                      src="/icons/arrow-ios-forward.svg"
                      style="transform: rotate(90deg)"
                      alt="arrow icon"
                    />
                  </div>
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text>
                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/play-icon.svg" />
                          <span class="ctt"
                            >Video 1: কীভাবে ইংরেজিতে নিজেকে Introduce
                            করবেন</span
                          >
                        </div>
                        <div>
                          <span class="time">08:25sec</span>
                          <img class="lock" src="/icons/eye-on.svg" />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/question.png" />
                          <span class="ctt"
                            >Quiz: কীভাবে ইংরেজিতে নিজেকে Introduce করবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/audio.png" />
                          <span class="ctt"
                            >Audiobook: কীভাবে ইংরেজিতে নিজেকে Introduce
                            করবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/file-text.png" />
                          <span class="ctt"
                            >Transcript: কীভাবে ইংরেজিতে নিজেকে Introduce
                            করবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/book.svg" />
                          <span class="ctt"
                            >Note: কীভাবে ইংরেজিতে নিজেকে Introduce করবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>
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
                    <p class="faq-text">
                      Class 02: কীভাবে ইংরেজিতে একজন নতুন ব্যক্তির সাথে পরিচিত
                      হবেন
                    </p>
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
                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/play-icon.svg" />
                          <span class="ctt"
                            >Video 1: কীভাবে ইংরেজিতে একজন নতুন ব্যক্তির সাথে
                            পরিচিত হবেন</span
                          >
                        </div>
                        <div>
                          <span class="time">08:25sec</span>
                          <img class="lock" src="/icons/eye-on.svg" />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/question.png" />
                          <span class="ctt"
                            >Quiz: কীভাবে ইংরেজিতে একজন নতুন ব্যক্তির সাথে
                            পরিচিত হবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/audio.png" />
                          <span class="ctt"
                            >Audiobook: কীভাবে ইংরেজিতে একজন নতুন ব্যক্তির সাথে
                            পরিচিত হবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/file-text.png" />
                          <span class="ctt"
                            >Transcript: কীভাবে ইংরেজিতে একজন নতুন ব্যক্তির সাথে
                            পরিচিত হবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/book.svg" />
                          <span class="ctt"
                            >Note: কীভাবে ইংরেজিতে একজন নতুন ব্যক্তির সাথে
                            পরিচিত হবেন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>
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
                    <p class="faq-text">Class 03: ইংরেজিতে প্রশ্ন করা শিখুন</p>
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
                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/play-icon.svg" />
                          <span class="ctt"
                            >Video 1: ইংরেজিতে প্রশ্ন করা শিখুন</span
                          >
                        </div>
                        <div>
                          <span class="time">08:25sec</span>
                          <img class="lock" src="/icons/eye-on.svg" />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/question.png" />
                          <span class="ctt"
                            >Quiz: ইংরেজিতে প্রশ্ন করা শিখুন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/audio.png" />
                          <span class="ctt"
                            >Audiobook: ইংরেজিতে প্রশ্ন করা শিখুন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/file-text.png" />
                          <span class="ctt"
                            >Transcript: ইংরেজিতে প্রশ্ন করা শিখুন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>

                      <div class="lession-item">
                        <div>
                          <img class="icon" src="/icons/book.svg" />
                          <span class="ctt"
                            >Note: ইংরেজিতে প্রশ্ন করা শিখুন</span
                          >
                        </div>
                        <div>
                          <img
                            class="lock"
                            src="/icons/lock-password-icon.svg"
                          />
                        </div>
                      </div>
                    </b-card-text>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      length: '',
      videoSource: '/video/video.mp4',
    }
  },
  mounted() {},
}
</script>

<style scoped>
.content {
  max-height: 450px;
  overflow-x: hidden;
  overflow-y: scroll;
}
.watermark {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  opacity: 0.5;
}
.watermark img {
  height: 40px;
}
.video-container {
  width: 100%;
  overflow: hidden;
  object-fit: contain;
  position: relative;
}
.video-container video {
  width: 100%;
}
.lession-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f1f2f6;
  padding: 4px 10px;
  border-radius: 10px;
  margin: 4px 0;
  height: 48px;
}
.icon {
  width: 26px;
  height: 26px;
}
.ctt {
  font-size: 14px;
  color: #747d8c;
}
.time {
  font-size: 12px;
  color: #747d8c;
  display: block;
}
.lock {
  width: 22px;
  height: 22px;
  float: right;
}
.heading strong {
  font-size: 24px;
  color: #2f3542;
  line-height: 42px;
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
  font-size: 16px;
  font-weight: 600;
  color: #2f3542;
}
.faq-card .card-header {
  background: none;
  cursor: pointer;
}
.lession {
  color: #747d8c;
  margin-top: 6px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: bold;
  float: right;
  line-height: 42px;
}
.mycourseTitle {
  color: #57606f;
  font-size: 16px;
  text-decoration: none;
  margin-top: 16px;
  display: block;
}

@media screen and (max-width: 800px) {
}
@media screen and (max-width: 480px) {
}
</style>
