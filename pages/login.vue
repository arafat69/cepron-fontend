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
              <h2 class="mb-4 mt-4">{{ $t('Login To Cepron') }}</h2>
              <div class="list-card mt-4">
                <img
                  src="/icons/google-icon.svg"
                  height="25px"
                  alt="google icon"
                />
                <p class="list-card-p">Login with Google</p>
              </div>
              <div class="list-card mt-4 mb-4">
                <img
                  src="/icons/facebook-icon.svg"
                  height="25px"
                  alt="google icon"
                />
                <p class="list-card-p">Login with Facebook</p>
              </div>
              <p class="mt-4 mb-4">or</p>
              <b-form @submit.prevent="login">
                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text>
                      <img src="/icons/email.svg" alt="email icon" />
                    </b-input-group-text>
                  </b-input-group-prepend>

                  <b-form-input
                    v-model="loginData.email"
                    type="email"
                    :placeholder="$t('E-mail')"
                    required
                  ></b-form-input>
                </b-input-group>

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
                    v-model="loginData.password"
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
                <div class="row justify-content-between">
                  <div class="col-6 p-0 mb-4">
                    <b-form-checkbox
                      id="checkbox-1"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      Remember Me
                    </b-form-checkbox>
                  </div>
                  <div class="col-6 p-0 mb-4">
                    <nuxt-link to="#">forget-password?</nuxt-link>
                  </div>
                </div>
                <b-form-group>
                  <b-button
                    type="submit"
                    class="form-control"
                    variant="primary"
                  >
                    {{ $t('Login') }}
                  </b-button>
                </b-form-group>
              </b-form>
              <p class="mt-4">
                {{ $t("don't_have_an_account?") }}
                <nuxt-link to="/register">{{ $t('Register') }}</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Login',
  layout: 'default',
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
      meta: '',
      showPassword: false,
    }
  },
  head() {
    return {
      title: 'Login | Cepron',
      meta: this.meta,
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/getLoggedInUser',
    }),
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/')
    }
    this.getMeta()
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth/login', this.loginData)
        .then((response) => {
          this.$store.commit('auth/SET_USER', response.data.user)
          this.$store.commit('auth/SET_ACCESS_TOKEN', response.data.access)
          this.$toast.success(response.message)
          this.$router.push('/')
        })
        .catch((error) => {
          this.$toast.error(error.response.data.message)
          if (error.response.status === 403) {
            this.$router.push('/otp?email=' + this.loginData.email)
          }
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
  overflow-x: hidden;
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
