<template>
  <div>
    <div class="container">
      <p class="mt-2">Home/Profile</p>
      <hr />
      <div class="main-content">
        <div class="row">
          <div class="col-lg-4">
            <b-form-group label="Name">
              <b-form-input
                class="bg-grey"
                placeholder="Enter your name"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-4">
            <b-form-group label="Phone">
              <b-form-input
                class="bg-grey"
                placeholder="Enter your contact number"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-4">
            <b-form-group label="District">
              <b-form-input
                class="bg-grey"
                placeholder="Enter the name of your district"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-4">
            <b-form-group label="Email">
              <b-form-input
                class="bg-grey"
                placeholder="Enter your email"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-4">
            <b-form-group label="Division*">
              <b-form-input
                class="bg-grey"
                placeholder="Which division do you live in? "
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-4">
            <b-form-group label="Date of Birth">
              <b-form-input
                class="bg-grey"
                placeholder="What is your date of birth?"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="col-lg-8">
            <b-form-group label="Your Full Address*">
              <b-form-textarea
                class="bg-grey"
                rows="5"
                placeholder="Enter your address here"
              ></b-form-textarea>
            </b-form-group>
          </div>
          <div class="col-lg-4">
            <p>Profile Photo</p>
            <label for="profilePhoto">
              <p
                class="btn btn-secondary form-control block"
                style="width: 300px"
              >
                Upload
              </p>
            </label>
            <input id="profilePhoto" type="file" />
            <nuxt-link to="/profile/change-password" class="text-green change_password mt-3">
              Change passwowrd <font-awesome-icon icon="pencil"  class="ml-2"/>
            </nuxt-link>
            <b-button block variant="primary" class="mt-3">Update</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>

<style scoped>
.change_password:hover{
  text-decoration: none;
  color: #22e4ac;
  font-weight: bold;
}
#profilePhoto {
  display: none;
}
</style>
