<template>
  <div class="page-content">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="center">
            <h2>Please enter the OTP to verify your account</h2>
            <h6>
              An OTP has been sent to your email
              <strong> {{ otpData.email }} </strong>
            </h6>
            <div class="mt-4">
              <div class="row">
                <div class="col-4 mx-auto">
                  <input
                    v-model="otpData.otp"
                    type="text"
                    class="form-control"
                    name="otp"
                    placeholder="Enter OTP"
                    required
                  />
                </div>
              </div>
              <div class="mt-4 px-5">
                <b-btn variant="custom" class="mr-3" @click="verifyOTP">
                  Verify
                </b-btn>
                <b-btn variant="info" @click="resendOtp">Resend</b-btn>
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
  data() {
    return {
      otpData: {
        email: '',
        otp: '',
      },
      errors: {
        otp: '',
        email: '',
      },
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/')
    }
    this.otpData.email = this.$route.query.email
  },
  methods: {
    verifyOTP() {
      this.$store
        .dispatch('auth/verifyOTP', this.otpData)
        .then((response) => {
          this.$store.commit('auth/SET_USER', response.data.user)
          this.$store.commit('auth/SET_ACCESS_TOKEN', response.data.access)
          this.$toast.success(response.message)
          this.$router.push('/')
        })
        .catch((error) => {
          this.errors = error.response.data.errors
          if (this.errors.otp) {
            this.$toast.error(error.response.data.errors.otp)
          }
          this.$toast.error(error.response.data.message)
        })
    },
    resendOtp() {
      this.$store
        .dispatch('auth/resendOTP', { email: this.otpData.email })
        .then((response) => {
          this.$toast.success(response.message)
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
        })
    },
  },
}
</script>
<style scoped>
.page-content {
  min-height: 60vh;
  display: flex;
  align-items: center;
}
.center {
  text-align: center;
}
.otp-form {
  height: 40px;
  width: 250px;
  padding: 0px 16px;
}
</style>
