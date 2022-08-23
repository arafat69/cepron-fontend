export default {
  login(context, data) {
    return this.$axios.$post('/login', data)
  },
  logout(context) {
    return this.$axios.$post('/logout')
  },
  register(context, data) {
    return this.$axios.$post('/register', data)
  },
  updateProfileInfo(context, data) {
    return this.$axios.$post('/student/profile-info', data)
  },
  updatePassword(context, data) {
    return this.$axios.$put('/student/password', data)
  },
  verifyOTP(context, data) {
    return this.$axios.$post('/register/email-verify', data)
  },
  resendOTP(context, data) {
    return this.$axios.$post('/otp/resend', data)
  },
}
