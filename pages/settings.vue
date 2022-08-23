<template>
  <div class="page-content container">
    <div class="row justify-content-center mt-5 mb-5">
      <div class="col-lg-6 pb-5 pt-5 shadow">
        <h4 class="mb-4">{{ $t('update_profile') }}</h4>
        <form @submit.prevent="updateProfile">
          <div class="mb-4">
            <input
              v-model="profileData.first_name"
              type="text"
              class="form-control"
              :placeholder="$t('first_name')"
            />
          </div>
          <div class="mb-4">
            <input
              v-model="profileData.last_name"
              type="text"
              class="form-control"
              :placeholder="$t('last_name')"
            />
          </div>
          <div class="mb-4">
            <input
              type="file"
              class="form-control"
              @change="changeProfileImageClientSide"
            />
            <img
              id="profileImage"
              :src="user.profile_photo_url"
              alt=""
              height="200"
            />
          </div>
          <button type="submit" class="btn btn-primary">
            {{ $t('Update') }}
          </button>
        </form>
      </div>
    </div>

    <div class="row justify-content-center mt-5 mb-5">
      <div class="col-lg-6 pb-5 pt-5 shadow">
        <h4 class="mb-4">{{ $t('change_password') }}</h4>
        <form @submit.prevent="updatePassword">
          <div class="mb-4">
            <input
              v-model="passwordData.old_password"
              type="password"
              class="form-control"
              :placeholder="$t('current_password')"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="passwordData.password"
              type="password"
              class="form-control"
              :placeholder="$t('new_password')"
              required
            />
          </div>
          <div class="mb-4">
            <input
              v-model="passwordData.password_confirmation"
              type="password"
              class="form-control"
              :placeholder="$t('confirm_password')"
              required
            />
          </div>
          <button class="btn btn-primary">{{ $t('change_password') }}</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'default',
  data() {
    return {
      profileData: {
        first_name: '',
        last_name: '',
        profile_photo: '',
      },
      passwordData: {
        old_password: '',
        password: '',
        password_confirmation: '',
      },
    }
  },
  head: {
    title: 'Update Profile | Cepron',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      { hid: 'description', name: 'description', content: 'Meta description' },
    ],
  },
  computed: {
    ...mapGetters({
      user: 'auth/getLoggedInUser',
    }),
  },
  created() {
    this.profileData.first_name = this.user.first_name
    this.profileData.last_name = this.user.last_name
    this.profileData.email = this.user.email
  },
  methods: {
    updatePassword() {
      this.$store
        .dispatch('auth/updatePassword', this.passwordData)
        .then((response) => {
          if (response.message.password) {
            this.$toast.error(response.message.password)
          } else {
            this.$toast.success(response.message)
          }
        })
    },
    changeProfileImageClientSide(e) {
      if (e.target.files[0]) {
        const reader = new FileReader()
        reader.onload = function (e) {
          document
            .querySelector('#profileImage')
            .setAttribute('src', e.target.result)
        }
        reader.readAsDataURL(e.target.files[0])
        this.profileData.profile_photo = e.target.files[0]
      }
    },
    updateProfile() {
      const formData = new FormData()
      formData.set('_method', 'PUT')
      formData.set('first_name', this.profileData.first_name)
      formData.set('last_name', this.profileData.last_name)
      formData.set('image', this.profileData.profile_photo)
      this.$store
        .dispatch('auth/updateProfileInfo', formData)
        .then((response) => {
          this.$store.commit('auth/SET_USER', response.data.user)
          this.$toast.success(response.message)
        })
    },
  },
}
</script>
