<template>
  <div class="newsletter">
    <div class="container">
      <div class="card shadow-lg">
        <div class="card-body">
          <div class="row">
            <div class="col-md-4 newsletter-image">
              <img src="/images/newsletter-model.svg" alt="" />
            </div>
            <div class="col-md-8 pl-5 mt-3">
              <h1>Don't miss update</h1>
              <p class="text-grey">
                Stay Connected With Cepron To Keep Yourself Updated. Subscribe
                to our newsletter to get great offers and updates!
              </p>
            </div>
            <b-input-group class="mt-4 mb-4 mx-3 mx-lg-0">
              <b-form-input placeholder="Email Address"></b-form-input>
              <b-input-group-append>
                <b-button
                  text="Button"
                  variant="primary"
                  style="
                    border-top-left-radius: 15px;
                    border-bottom-left-radius: 15px;
                  "
                  >Subscribe</b-button
                >
              </b-input-group-append>
            </b-input-group>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.newsletter {
  padding: 115px 0px;
}
.newsletter-image {
  height: 333px;
  margin-top: -166px;
}
.card-body {
  padding: 10px 200px;
}
.form-control:focus {
  box-shadow: none;
}
@media screen and (max-width: 1199px) {
  .card-body {
    padding: 10px 100px;
  }
}
@media screen and (max-width: 991px) {
  .card-body {
    padding: 10px 20px;
  }
}
</style>
