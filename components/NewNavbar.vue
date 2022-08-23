<template>
  <client-only>
    <div>
      <b-navbar toggleable="lg" type="light" class="fixed-top shadow">
        <div class="container">
          <nuxt-link to="/" class="navbar-brand" style="width: 90px">
            <img
              class="img-fluid"
              src="/images/logo/cepron_new_logo-01.png"
              alt="logo"
            />
          </nuxt-link>

          <b-navbar-toggle
            id="navtoggler"
            target="nav-collapse"
          ></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="mr-auto">
              <b-navbar-nav class="mt-2">
                <nuxt-link class="nav-link" to="/">{{ $t('Home') }}</nuxt-link>
                <nuxt-link class="nav-link" to="/about-us">
                  {{ $t('about_us') }}
                </nuxt-link>
                <b-nav-item-dropdown text="Courses" right>
                  <nuxt-link to="/courses" class="dropdown-item">
                    {{ $t('All Course') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="/courses">
                    {{ $t('Web Design & Development') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="/courses">
                    {{ $t('English Spoken') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="/courses">
                    {{ $t('UI UX Design') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="/courses">
                    {{ $t('Photography') }}
                  </nuxt-link>
                </b-nav-item-dropdown>
                <nuxt-link class="nav-link" to="/contact-us">{{
                  $t('Contact Us')
                }}</nuxt-link>
                <nuxt-link class="nav-link" to="/blogs">
                  {{ $t('Blog') }}
                </nuxt-link>
              </b-navbar-nav>
            </b-navbar-nav>
            <b-navbar-nav>
              <li v-if="isLoggedIn" class="mt-2 mr-lg-3">
                <nuxt-link to="javascript:" class="nav-link">
                  <img src="/icons/bell.svg" alt="" />
                </nuxt-link>
              </li>
              <nuxt-link
                v-if="isLoggedIn"
                to="/dashboard"
                class="nav-link mt-2"
                right
              >
                <div>
                  <!-- <img
                    height="40px"
                    style="border-radius: 20px"
                    :src="user.profile_photo_url"
                    alt="user"
                  /> -->
                  <img
                    height="40px"
                    style="border-radius: 20px"
                    src="/images/avatar/dashboard-user-avatar.svg"
                    alt="user"
                  />
                  {{ user.first_name }}
                </div>

                <!-- <nuxt-link class="dropdown-item" to="/dashboard">
                  {{ $t('Dashboard') }}
                </nuxt-link> -->
                <!-- <nuxt-link class="dropdown-item" to="/settings">
                  {{ $t('Profile') }}
                </nuxt-link> -->
                <!-- <b-dropdown-item href="#" @click="logout">
                  {{ $t('sign_out') }}
                </b-dropdown-item> -->
              </nuxt-link>
              <nuxt-link v-else to="/login" class="ml-lg-3 mt-lg-2 nav-link">
                <b-button variant="outline-primary">
                  {{ $t('Login') }}
                </b-button>
              </nuxt-link>
              <li v-if="isLoggedIn" class="nav-link ml-lg-4">
                <a href="javascript:" class="nav-link" @click="logout">
                  <img src="/icons/log-out-navbar.svg" alt="" />
                </a>
              </li>
              <nuxt-link
                v-if="!isLoggedIn"
                to="/register"
                class="ml-lg-3 mt-lg-2 nav-link"
              >
                <b-button variant="primary">
                  {{ $t('Sign up') }}
                </b-button>
              </nuxt-link>
              <li class="nav-link">
                <div class="lang-dropdown mt-1 ml-5">
                  <img src="/icons/language-icon.svg" alt="" />
                  <select v-model="$i18n.locale" class="language">
                    <option
                      v-for="lang in $i18n.locales"
                      :key="lang.code"
                      :value="lang.code"
                    >
                      {{ lang.name }}
                    </option>
                  </select>
                </div>
              </li>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </b-navbar>
    </div>
  </client-only>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NewNavbar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'auth/getLoggedInUser',
      isLoggedIn: 'auth/getLoggedInUser',
    }),
  },
  mounted() {},
  methods: {
    logout() {
      this.$store
        .dispatch('auth/logout')
        .then((res) => {
          this.$store.commit('auth/SET_ACCESS_TOKEN', null)
          this.$store.commit('auth/SET_USER', null)
          this.$toast.success(res.message)
          this.$router.push('/login')
        })
        .catch((error) => {
          this.$store.commit('auth/SET_ACCESS_TOKEN', null)
          this.$store.commit('auth/SET_USER', null)
          this.$router.push('/login')
          this.$toast.error(error.response.data.message)
        })
    },
  },
}
</script>

<style scoped>
.navbar-light {
  background: #ffffff;
}
.lang-dropdown {
  background: #f1f2f6;
  padding: 0px 15px;
  border-radius: 15px;
}
@media screen and (max-width: 991px) {
  .login-button {
    background: none;
    border: none;
    margin: 0;
    color: grey;
    padding: 0;
    text-align: start;
  }
}
a {
  color: gray;
}
</style>
