<template>
  <div class="page-content">
    <div class="container">
      <div class="row mt-3 mb-3 login-content">
        <div class="col-md-6 text-content">
          <h1>
            <span class="text-blue">Boost Your Skill <br /></span>
            Always And Forever
          </h1>
        </div>
        <div class="col-md-6">
          <div class="row form-side justify-content-center align-items-center">
            <div class="col-lg-12 col-md-12">
              <div class="container">
                <h2 class="mb-4 mt-4">{{ $t('Sign up To Cepron') }}</h2>
                <div class="list-card mt-4">
                  <img
                    src="/icons/google-icon.svg"
                    height="25px"
                    alt="google icon"
                  />
                  <p class="list-card-p">Sign up with Google</p>
                </div>
                <div class="list-card mt-4 mb-4">
                  <img
                    src="/icons/facebook-icon.svg"
                    height="25px"
                    alt="google icon"
                  />
                  <p class="list-card-p">Sign up with Facebook</p>
                </div>
                <p class="mt-4 mb-4">or</p>

                <b-form @submit.prevent="register">
                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <img src="/icons/person.svg" alt="person icon" />
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="registerData.first_name"
                      :placeholder="$t('Enter your name')"
                      required
                    ></b-form-input>
                  </b-input-group>
                  <p v-if="errors.first_name" class="error-text">
                    {{ errors.first_name[0] }}
                  </p>

                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <img src="/icons/phone.svg" alt="email icon" />
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="registerData.phone"
                      :placeholder="$t('Enter your phone')"
                      required
                    ></b-form-input>
                  </b-input-group>
                  <p v-if="errors.phone" class="error-text">
                    {{ errors.phone[0] }}
                  </p>

                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <img src="/icons/email.svg" alt="email icon" />
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="registerData.email"
                      :placeholder="$t('Enter your email')"
                      required
                    ></b-form-input>
                  </b-input-group>
                  <p v-if="errors.email" class="error-text">
                    {{ errors.email[0] }}
                  </p>

                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <img
                          src="/icons/lock-password-icon.svg"
                          alt="password icon"
                        />
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="registerData.password"
                      :type="showPassword ? 'text' : 'password'"
                      placeholder="*****"
                      required
                    ></b-form-input>

                    <b-input-group-append>
                      <b-input-group-text>
                        <span v-if="showPassword" @click="togglePassword()"><img src="/icons/eye-on.svg"/></span>
                        <span v-else @click="togglePassword()"><img src="/icons/eye-hidden.png" width="22"/></span>
                      </b-input-group-text>
                    </b-input-group-append>
                  </b-input-group>
                  <p v-if="errors.password" class="error-text">
                    {{ errors.password[0] }}
                  </p>

                  <b-input-group class="mb-4">
                    <b-input-group-prepend>
                      <b-input-group-text>
                        <img
                          src="/icons/lock-password-icon.svg"
                          alt="password icon"
                        />
                      </b-input-group-text>
                    </b-input-group-prepend>

                    <b-form-input
                      v-model="registerData.confirm_password"
                      :type="showPassword ? 'text' : 'password'"
                      placeholder="*****"
                      required
                    ></b-form-input>

                    <b-input-group-append>
                      <b-input-group-text>
                        <span v-if="showPassword" @click="togglePassword()"><img src="/icons/eye-on.svg"/></span>
                        <span v-else @click="togglePassword()"><img src="/icons/eye-hidden.png" width="22"/></span>
                      </b-input-group-text>
                    </b-input-group-append>
                  </b-input-group>

                  <b-form-group>
                    <b-button
                      type="submit"
                      class="form-control"
                      variant="primary"
                      >{{ $t('Register') }}</b-button
                    >
                  </b-form-group>
                </b-form>

                <p class="mt-4">
                  {{ $t('Already have an account?') }}
                  <nuxt-link to="/login">{{ $t('Login') }}</nuxt-link>
                </p>
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
  name: 'Register',
  layout: 'default',
  data() {
    return {
      registerData: {
        phone: '',
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: '',
      },
      meta: '',
      errors: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
      },
      showPassword: false,
    }
  },
  head() {
    return {
      title: 'Register | Cepron',
      meta: this.meta,
    }
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/')
    }
    this.getMeta()
  },
  methods: {
    register() {
      this.$store
        .dispatch('auth/register', this.registerData)
        .then((response) => {
          this.$toast.success(response.message)
          this.$router.push('/otp?email=' + this.registerData.email)
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
          this.errors = error.response.data.errors
        })
    },
    getMeta() {
      this.$axios.get('/meta/login').then((response) => {
        this.meta = response.data.data.metas
      })
    },

    togglePassword(){
      this.showPassword = !this.showPassword
    }
  },
}
</script>

<style scoped>
.page-content {
  position: relative;
  height: 970px auto;
  margin-bottom: 0px;
  background: #fdfbfd;
}
.bg-image {
  position: absolute;
  left: 0px;
  bottom: 0px;
}
.text-content {
  padding-top: 107px;
  background: url('/images/login-page-bg.svg');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;
}
.list-card {
  width: 100%;
  padding: 15px 20px;
  display: flex;
  justify-content: center;
  column-gap: 10px;
  border-radius: 15px;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;
}
.form-side {
  text-align: center;
}
.input-group {
  border: 1px solid #f1f2f6;
  border-radius: 15px;
  height: 60px;
  overflow: hidden;
}
.form-control:focus {
  box-shadow: none;
}

.input-group-text {
  border: none;
  border-radius: 11px !important;
  cursor: pointer;
  background-color: #fff;
}
.btn-primary {
  height: 60px;
}
.list-card-p {
  font-size: 20px;
  font-weight: 600;
}
@media screen and (max-width: 767px) {
  .text-content {
    background: none;
    padding-top: 0px;
    padding-bottom: 30px;
    text-align: center;
  }
}
@media screen and (max-width: 480px) {
  .list-card-p {
    font-size: 0.9rem;
  }
}
</style>
