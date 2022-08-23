<template>
  <client-only>
    <div class="dashboard">
      <AuthNavbar toggler="navtoggler" />
      <div class="dashboard-content">
        <div class="sidebar hide-on-md mt-4">
          <div class="user-info">
            <img
              src="/images/avatar/dashboard-user-avatar.svg"
              height="100"
              alt=""
            />
            <p class="name mt-2">Jahidul Islam</p>
          </div>
          <ul class="mt-4">
            <li>
              <nuxt-link to="/dashboard">
                <GridSvg />
                Dashboard
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/profile">
                <PersonSvg />
                Profile
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/my-courses">
                <BookSvg />
                My Courses
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/my-certificates">
                <AwardSvg />
                My Certificates
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/payment-history">
                <CreditCardSvg />
                Payment History
              </nuxt-link>
            </li>
            <li>
              <a href="javascript:" @click="logout">
                <img src="/icons/log-out.svg" alt="" />
                Sign out
              </a>
            </li>
          </ul>
          <div class="show-on-md">
            <ul class="mt-4">
              <li>
                <nuxt-link to="/about-us"> About Us </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/courses"> Courses </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact-us"> Contact Us </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/blogs"> Blogs </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="content card">
          <Nuxt />
        </div>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  name: 'Auth',
  mounted() {
    window.onload = function () {
      const toggler = document.getElementById('navtoggler')
      const sidebar = document.querySelector('.sidebar')
      toggler.addEventListener('click', function () {
        sidebar.classList.toggle('show')
        sidebar.classList.toggle('hide-on-md')
      })
    }
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
.show {
  display: visible;
  z-index: 99;
}
.dashboard-content {
  padding-top: 70px;
  padding-bottom: 0px;
  padding-right: 50px;
  display: flex;
  height: 100vh;
}
.sidebar {
  width: 20%;
  overflow-y: scroll;
  overflow-x: hidden ;
}
 .sidebar::-webkit-scrollbar {
  width: 1px !important;
}
.content {
  width: 80%;
  overflow-x: hidden;
  overflow-y: scroll;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}
.user-info {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
ul {
  list-style: none;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 10%;
  padding: 0;
}
ul li {
  width: 100%;
  text-align: left;
}
ul li a {
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 10px 0px;
  padding-left: 20px;
  color: #57606f;
  font-size: 1.1rem;
}
.nuxt-link-active {
  background: #324efd;
  color: #fff;
  border-top-left-radius: 22px;
  border-bottom-left-radius: 22px;
}
@media screen and (max-width: 991px) {
  .hide-on-md {
    display: none;
  }
  .sidebar {
    position: absolute;
    top: 45px;
    width: 40%;
    height: 100%;
    background: #eee;
    opacity: 1;
  }
  .content {
    width: 100%;
    margin-left: 50px;
  }
  #nav-collapse {
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .dashboard-content {
    padding-right: 10px;
  }
  .content {
    margin-left: 10px;
  }
}
@media screen and (max-width: 480px) {
  .sidebar {
    width: 60%;
  }
}
</style>
