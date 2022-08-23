<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light">
      <div class="container">
        <b-navbar-brand href="/" style="width: 40px">
          <img class="img-fluid" src="/images/logo/logo.svg" alt="logo" />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/courses">Courses</b-nav-item>
            <b-nav-item v-show="isLoggedIn" href="/my-courses">
              My Courses
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              ></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">
                Search
              </b-button>
            </b-nav-form>

            <b-nav-item-dropdown v-if="isLoggedIn" right>
              <template #button-content>
                <img height="40px" :src="user.profile_photo_url" alt="user" />
              </template>
              <b-dropdown-item href="/settings">Profile</b-dropdown-item>
              <b-dropdown-item href="#" @click="logout">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <nuxt-link
              v-else
              to="/login"
              class="ml-3 d-flex justify-content-end"
            >
              <b-button pill variant="custom" class="px-5">Login</b-button>
            </nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navbar',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      user: 'auth/getLoggedInUser',
      isLoggedIn: 'auth/getLoggedInUser',
    }),
  },
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
.navbar-nav .nav-item {
  word-spacing: 1px;
  font-family: Montserrat, sans-serif;
  font-size: 1.1rem;
}
@media screen and (max-width: 500px) {
  input.form-control {
    width: 100%;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul.navbar-nav.ml-auto {
    margin: 0;
    padding: 0;
    width: 200px;
  }
  .nav-item {
    width: 50%;
  }
}
</style>
