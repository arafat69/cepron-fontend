<template>
  <div class="page-content">
    <client-only>
      <div class="container">
        <div class="row mt-5 lectures">
          <div class="col-lg-7 courses">
            <div v-if="currentEpisode" class="video-container">
              <video
                :src="currentEpisode.videoPath"
                controls
                controlsList="nodownload"
                oncontextmenu="return false;"
              ></video>
              <div class="watermark">
                <img src="/images/logo/cepron_new_logo-01.png" alt="" />
              </div>
            </div>

            <h4 class="mt-3">{{ currentEpisode.title }}</h4>
            <!-- eslint-disable vue/no-v-html -->
            <div v-html="currentEpisode.description"></div>
            <!--eslint-enable-->
            <div v-if="currentEpisode.pdf">
              <div class="pdf">
                <img src="/images/dummy/pdf.svg" height="30" alt="" />
                <a target="_blank" :href="currentEpisode.pdfPath">
                  <h6>{{ currentEpisode.pdf.name }}</h6>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-5 video-side">
            <div class="card">
              <div class="list-group list-group-flush">
                <div class="list-group-item">
                  <div class="row">
                    <h6 v-if="currentCourse">{{ currentCourse.title }}</h6>
                  </div>
                </div>
                <div
                  v-for="episode in episodes"
                  :id="currentEpisode.id === episode.id ? 'active' : ''"
                  :key="episode.id"
                  :class="
                    isEnrolled || episode.is_free
                      ? 'list-group-item free-content'
                      : 'list-group-item'
                  "
                >
                  <div
                    class="row"
                    @click="
                      isEnrolled || episode.is_free
                        ? playEpisode(episode.id)
                        : ''
                    "
                  >
                    <div class="col-2">
                      <img
                        :src="episode.thumbnailPath"
                        height="40"
                        width="50"
                        alt=""
                      />
                    </div>
                    <div class="col-7">
                      <p>{{ episode.title }}</p>
                    </div>
                    <div class="col-3">
                      <p class="time">{{ episode.formattedDuration }}</p>
                    </div>
                  </div>
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

export default {
  layout: 'default',
  data() {
    return {
      isLoading: false,
      episodeId: '',
      title: '',
      isEnrolled: false,
      isFree: false,
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
      currentEpisode: 'episode/getCurrentEpisode',
      episodes: 'episode/getEpisodes',
      currentCourse: 'episode/getCurrentCourse',
      isLoggedIn: 'auth/getLoggedInUser',
    }),
  },
  mounted() {
    this.episodeId = this.$route.params.lecture
    this.findEpisodeById()
    if (this.isLoggedIn) {
      this.enrolledStudent()
    }
  },
  methods: {
    findEpisodeById() {
      this.$store
        .dispatch('episode/findEpisodeById', this.episodeId)
        .then((response) => {
          this.$store.commit(
            'episode/SET_CURRENT_EPISODE',
            response.data.episode
          )
          this.title = response.data.episode.title
          this.$store.commit(
            'episode/SET_CURRENT_COURSE',
            response.data.current_course
          )
          this.$store.commit(
            'episode/SET_EPISODES',
            response.data.current_course.episodes
          )
          this.isFree = response.data.episode.is_free
          if (this.isLoggedIn) {
            this.enrolledStudent()
          }
          if (!this.isFree && !this.isLoggedIn) {
            this.$router.push('/login')
          }
          if (!this.isFree && !this.isEnrolled) {
            this.$toast.info(
              "You didn't enrolled to this course yet. Please contact your teacher."
            )
            this.$router.push(`/courses/${this.currentCourse.id}`)
          }
        })
        .catch((error) => {
          this.$toast.error(error.response.message)
          this.$toast.info('Please login to get access')
          this.$router.push('/login')
        })
    },
    playEpisode(episodeId) {
      this.$router.push(`/lectures/${episodeId}`)
    },
    enrolledStudent() {
      this.$store
        .dispatch('course/enrolledStudent', this.currentCourse.id)
        .then((response) => {
          this.isEnrolled = response.data.data.has_access
        })
    },
  },
}
</script>

<style scoped>
.page-content {
  padding-top: 80px;
}
.course-info {
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
}
.price {
  display: flex;
  column-gap: 10px;
  align-items: center;
}
.course-price-n-start-course {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  column-gap: 30px;
}
.lectures {
  min-height: 80vh;
}
.watermark {
  position: absolute;
  top: 15px;
  right: 20px;
  z-index: 1;
  opacity: 0.5;
}
.watermark img {
  height: 60px;
}
.video-container {
  height: 400px;
  width: 100%;
  overflow: hidden;
  object-fit: contain;
}
.video-container video {
  width: 100%;
  height: 100%;
}
p {
  padding: 0;
  margin: 0;
}
p.time {
  font-size: 0.8rem;
}
h6 {
  margin: 0;
}
.list-group-item {
  cursor: pointer;
}
.list-group-item.active {
  background: rgb(100, 100, 230);
  border: none;
}
#active {
  background: rgb(100, 100, 230);
  border: none;
  color: #fff;
}
.pdf {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.free-content {
  color: rgb(70, 54, 221);
}

@media screen and (max-width: 1199px) {
  .video-container {
    height: 310px;
  }
}
@media screen and (max-width: 991px) {
  .video-container {
    height: 400px;
  }
}
@media screen and (max-width: 767px) {
  .video-container {
    height: 300px;
  }
}
@media screen and (max-width: 480px) {
  .video-container {
    height: 250px;
  }
}
@media screen and (max-width: 375px) {
  .video-container {
    height: 200px;
  }
}
</style>
