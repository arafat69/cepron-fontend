<template>
  <div class="col-lg-4 col-md-6">
    <div
      class="card mb-4"
      style="cursor: pointer"
      @click="goToSingleViewPage(course.id)"
    >
      <div class="card-body">
        <div class="card-image">
          <!-- <img :src="course.thumbnailPath" alt="" class="card-img-top" /> -->
          <img
            src="/images/munzereen-shahid-course.svg"
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
            {{ course.episodes.length }} lesson
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
            <div class="author-info">
              <img
                src="/images/dummy/default-avater.jpg"
                height="40px"
                width="40px"
                alt=""
                style="border-radius: 50%"
              />
              <div class="info">
                <p v-if="course.name.length < 20" class="mb-0">
                  {{ course.name }}
                </p>
                <p v-else class="mb-0">
                  {{ course.name.substring(0, 20) + '..' }}
                </p>
              </div>
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
</template>

<script>
import moment from 'moment'
export default {
  name: 'CourseCard',
  props: {
    course: {
      type: [Object],
      required: true,
    },
  },
  methods: {
    moment,
    goToSingleViewPage(courseId) {
      this.$router.push(`/courses/${courseId}`)
    },
  },
}
</script>

<style scoped>
h6 {
  font-size: 20px;
  color: #2f3542;
  font-weight: 700;
}
p {
  margin: 0;
  padding: 0;
  color: #747d8c;
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
.row {
  margin-bottom: 0;
}
a {
  text-decoration: none;
  color: inherit;
}
.card {
  border: 1px solid #f1f2f6;
  border-radius: 15px;
}
.card:hover {
  box-shadow: 0px 15px 15px rgba(255, 111, 155, 0.1);
}
.card .card-image {
  width: 100%;
  overflow: hidden;
  object-fit: cover;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.card .card-image img {
  width: 100%;
}
.course-title {
  height: 62px;
}
.course-author {
  background: rgb(241, 240, 255);
  border-radius: 15px;
  padding: 10px 0px;
  margin-top: 10px;
}
.author-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
}
.info {
  display: flex;
  flex-direction: column;
  width: 75%;
}
.info p {
  font-size: 16px;
  color: #2f3542;
}
@media screen and (max-width: 480px) {
  .course-title {
    height: 75px;
  }
}
</style>
