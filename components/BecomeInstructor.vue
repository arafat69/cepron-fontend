<template>
  <div class="instructor">
    <div class="bg-grey">
      <div class="container">
        <div class="row">
          <div class="col-md-6 instructor-image">
            <img src="/images/instructor-model.svg" alt="Instructor Model" />
          </div>
          <div class="col-md-6 instructor-text">
            <h1 class="section-title">Become an Instructor</h1>
            <p class="mt-3 mb-3">
              Share your knowledge and reach millions of students across the
              globe. Join the world's largest online learning marketplace.
            </p>
            <b-button variant="primary" style="width: 200px">
              Start Teaching
            </b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.instructor {
  width: 100%;
  padding-top: 115px;
  padding-bottom: 115px;
  margin-top: 115px;
}
.bg-grey {
  background: #fdfbfd;
  height: 470px auto;
  width: 100%;
}
.instructor-image {
  position: relative;
  height: 570px;
  margin-top: -100px;
  object-fit: contain;
}
.bg-grey img {
  height: 100%;
  width: 100%;
}
.instructor-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px 0px;
}
@media screen and (max-width: 991px) {
  .instructor {
    margin-top: 60px;
    padding-bottom: 60px;
  }
  .instructor-image {
    height: 478px;
  }
}
@media screen and (max-width: 767px) {
  .instructor-image {
    height: 350px;
  }
  .instructor-text {
    align-items: center;
    text-align: center;
  }
}
</style>
