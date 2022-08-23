<template>
  <div class="">
    <div
      style="
        background: url('/images/welcome-bg.svg') no-repeat;
        background-size: 100% 100%;
      "
    >
      <div class="container">
        <div class="row welcome-section">
          <div class="col-md-6 welcome-text">
            <h1>
              The Best <br />
              eLearning Platform
            </h1>
            <b-input-group class="mt-4 mr-5">
              <b-form-input
                type="text"
                placeholder="Search Course"
              ></b-form-input>
              <b-input-group-append>
                <b-input-group-text>
                  <img src="/icons/search-icon-white.svg" alt="" />
                </b-input-group-text>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div class="col-md-6 welcome-image pt-3">
            <img src="/images/welcome_banner_model .svg" height="580" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="lists shadow-lg">
        <div class="items">
          <img
            src="/images/dummy/student.svg"
            height="65px"
            width="65px"
            alt=""
          />
          <h6>30K+ Students</h6>
        </div>
        <div class="items">
          <img
            src="/images/dummy/course.svg"
            height="65px"
            width="65px"
            alt=""
          />
          <h6>2K+ Courses</h6>
        </div>
        <div class="items">
          <img
            src="/images/dummy/backup-class.svg"
            height="65px"
            width="65px"
            alt=""
          />
          <h6>300+ Instructors</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-section {
  height: 611px;
  display: flex;
  align-items: center;
}
.welcome-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 611px;
}
.welcome-image {
  height: 580px;
  width: 100%;
}
.welcome-image img {
  height: 100%;
  width: 100%;
}
h1 {
  font-size: 50px;
}
.lists {
  display: flex;
  flex-wrap: wrap;
  column-gap: 50px;
  row-gap: 15px;
  justify-content: space-between;
  border-radius: 15px;
  padding: 20px;
}
.items {
  display: flex;
  align-items: center;
  column-gap: 25px;
}
@media screen and (max-width: 1199px) {
  h1 {
    font-size: 2.875rem;
  }
}
@media screen and (max-width: 991px) {
  h1 {
    font-size: 2.063rem;
  }
  .lists {
    column-gap: 18px;
  }
  .items h6 {
    font-size: 1rem;
  }
}
@media screen and (max-width: 767px) {
  .welcome-image {
    display: none;
  }

  .items {
    display: flex;
    flex-direction: column;
  }
  .items img {
    height: 40px;
    width: 40px;
  }
}
@media screen and (max-width: 480px) {
  .lists h6 {
    font-size: 0.7rem;
  }
}
</style>
