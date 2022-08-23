<template>
  <client-only>
    <div>
      <b-navbar toggleable="lg" type="light" class="fixed-top">
        <div class="container">
          <nuxt-link to="/" class="navbar-brand" style="width: 90px">
            <img
              class="img-fluid"
              src="/images/logo/cepron_new_logo-01.png"
              alt="logo"
            />
          </nuxt-link>

          <b-navbar-toggle
            :id="toggler"
            target="nav-collapse"
          >
          <template #default="{ expanded }">
            <font-awesome-icon v-if="expanded" icon="x" style="font-size: 24px ;"/>
            <font-awesome-icon v-else icon="bars" style="font-size: 24px ;"/>
          </template>
          </b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="mr-auto ml-lg-3">
              <b-navbar-nav class="mt-2">
                <nuxt-link class="nav-link" to="/">{{ $t('Home') }}</nuxt-link>
                <nuxt-link class="nav-link" to="/about-us">
                  {{ $t('about_us') }}
                </nuxt-link>
                <b-nav-item-dropdown text="Courses" right>
                  <nuxt-link class="dropdown-item" to="#">
                    {{ $t('All Course') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">
                    {{ $t('Web Design & Development') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">
                    {{ $t('English Spoken') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">
                    {{ $t('UI UX Design') }}
                  </nuxt-link>
                  <nuxt-link class="dropdown-item" to="#">
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
              <li class="mt-1 mr-3">
                <a href="javascript:" class="nav-link">
                  <img src="/icons/bell.svg" alt="" />
                </a>
              </li>
              <nuxt-link
                v-if="isLoggedIn"
                to="/dashboard"
                class="nav-link"
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
                  <!-- JAHIDUL -->
                  {{ user.first_name }}
                </div>
              </nuxt-link>
              <li class="mt-1 ml-4">
                <a href="javascript:" class="nav-link" @click="logout">
                  <img src="/icons/log-out-navbar.svg" alt="" />
                </a>
              </li>

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
  props: {
    toggler: {
      type: [String],
      required: true,
    },
  },
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
  background: none;
}
@media screen and (max-width: 991px) {
  #nav-collapse {
    display: none;
    opacity: 0;
  }
}
</style>
