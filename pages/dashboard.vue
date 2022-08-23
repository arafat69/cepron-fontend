<template>
  <client-only>
    <div>
      <div class="container">
        <p class="mt-2">Home/Dashboard</p>
        <hr />
        <div class="main-content">
          <div class="row">
            <div class="col-md-5 mb-5">
              <h6 class="mb-3">Recent Lesson</h6>
              <div class="card shadow-pink">
                <div class="card-body">
                  <div class="card-image">
                    <img src="/images/dashboard-last-course.svg" alt="" />
                  </div>
                  <h6 class="mt-2">Spoken English at Home</h6>
                  <div class="card mt-3">
                    <nuxt-link to="#" class="course-content-card">
                      <img
                        src="/icons/play-icon.svg"
                        height="30"
                        alt="Play Icon"
                      />
                      <p class="course-title text-grey">Title</p>
                      <div class="time float-right">
                        <p class="text-grey">22.13sec</p>
                        <img src="/icons/eye-on.svg" alt="Eye Icon" />
                      </div>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-7 graph-img mb-5">
              <h6 class="mb-3">Activity Log</h6>
              <img src="/images/activity-graph.svg" alt="" />
            </div>
            <div class="col-lg-3 mt-4">
              <div class="card shadow-blue">
                <div class="card-body space-between">
                  <div>
                    <p>My Courses</p>
                    <h6>6</h6>
                  </div>
                  <img src="/icons/my-courses.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-3 mt-4">
              <div class="card shadow-blue">
                <div class="card-body space-between">
                  <div class="text">
                    <p>Completed Courses</p>
                    <h6>6</h6>
                  </div>
                  <img src="/icons/completed-courses.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="col-lg-3 mt-4">
              <div class="card shadow-blue">
                <div class="card-body space-between">
                  <div>
                    <p>Certificate Achieved</p>
                    <h6>6</h6>
                  </div>
                  <img src="/icons/certificate-achieved.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'Dashboard',
  layout: 'auth',
  head: {
    title: 'Dashboard | Cepron',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
  },
}
</script>
<style scoped>
.page {
  margin-top: 10px;
  font-size: 20px;
  color: #57606f;
}
.course-content-card {
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  background: #f1f2f6;
  border-radius: 15px;
  cursor: pointer;
}
.course-content-card .course-title {
  width: 76%;
  height: auto;
  display: flex;
  align-items: center;
}
.card .card-image {
  width: 100%;
  overflow: hidden;
  object-fit: contain;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.card .card-image img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.graph-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
}
.graph-img img {
  width: 100%;
  object-fit: contain;
}
</style>
