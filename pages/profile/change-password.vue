<template>
  <div>
    <div class="container">
      <p class="mt-2">Home/Profile/Change Password</p>
      <hr />
      <div class="main-content">
        <div class="row">
          <div class="col-lg-9 m-auto">
            <div class="card card-body">


              <div class="mb-3">
                <label class="mb-1"><b>Current Password</b></label>
                <b-input-group>
                  <b-form-input
                    :type="showPassword ? 'text' : 'password'"
                    class="bg-grey"
                    placeholder="Enter Current Password"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-input-group-text>
                      <span v-if="showPassword" @click="togglePassword()"><font-awesome-icon icon="eye" /></span>
                      <span v-else @click="togglePassword()"><font-awesome-icon icon="eye-slash" /></span>
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
              </div>

              <div class="mb-3">
                <label class="mb-1"><b>New Password</b></label>
                <b-input-group>
                  <b-form-input
                    :type="showPassword ? 'text' : 'password'"
                    class="bg-grey"
                    placeholder="Enter New Password"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-input-group-text>
                      <span v-if="showPassword" @click="togglePassword()"><font-awesome-icon icon="eye" /></span>
                      <span v-else @click="togglePassword()"><font-awesome-icon icon="eye-slash" /></span>
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
              </div>

              <div class="mb-3">
                <label class="mb-1"><b>Confirm Password</b></label>
                <b-input-group>
                  <b-form-input
                    :type="showPassword ? 'text' : 'password'"
                    class="bg-grey"
                    placeholder="Enter New Confirm Password"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-input-group-text>
                      <span v-if="showPassword" @click="togglePassword()"><font-awesome-icon icon="eye" /></span>
                      <span v-else @click="togglePassword()"><font-awesome-icon icon="eye-slash" /></span>
                    </b-input-group-text>
                  </b-input-group-append>
                </b-input-group>
              </div>

              <div class="d-flex justify-content-between flex-wrap mt-lg-5">
                <button class="btn back_btn py-2 mb-1" @click="goBack()"><font-awesome-icon icon="arrow-left-long" /> Back</button>
                <button class="btn confirm_btn py-2 mb-1">Change Password</button>
              </div>

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
      showPassword: false,
    }
  },
  methods: {
    togglePassword(){
      this.showPassword = !this.showPassword
    },
    goBack(){
      this.$router.push('/profile')
    }
  },
}
</script>

<style scoped>
.back_btn{
  width:100px;
  border: 1px solid #ddd;
  background: #f1f2f6;
}
.confirm_btn{
  background: #324efd;
  color: #fff;
}
.input-group {
  border: none !important;
  border-radius: 5px 0 0 5px;
  overflow: hidden;
}
.form-control:focus {
  box-shadow: none;
}
.input-group-text {
  border: none;
  border-radius: 0 5px 5px 0 !important;
  cursor: pointer;
  background-color: #f1f2f6;
}
.form-control {
   height: 45px !important;
   border-radius: 4px !important;
}
.card {
  border-radius: 8px !important;
}
</style>
