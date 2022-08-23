<template>
  <client-only>
    <form @submit.prevent="submitContactForm">
      <div class="row">
        <div class="col-md-12 mb-2">
          <b-form-group>
            <b-form-input
              v-model="contactData.name"
              placeholder="Name"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-12 mb-2">
          <b-form-group>
            <b-form-input
              v-model="contactData.email"
              type="email"
              placeholder="Email"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-12 mb-2">
          <b-form-group>
            <b-form-input
              v-model="contactData.subject"
              type="text"
              placeholder="Subject"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <div class="col-md-12 mb-2">
          <b-form-group>
            <b-form-textarea
              id="textarea"
              v-model="contactData.message"
              class="text-area"
              placeholder="Type your message"
              rows="5"
              required
            ></b-form-textarea>
          </b-form-group>
        </div>
        <div class="col-md-12">
          <b-button block variant="primary" class="py-3">{{
            $t('Send')
          }}</b-button>
        </div>
      </div>
    </form>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      contactData: {
        name: '',
        email: '',
        subject: '',
        message: '',
      },
    }
  },
  methods: {
    submitContactForm() {
      this.$axios.post('/contact/', this.contactData).then((response) => {
        this.$toast.success(response.data.message)
        this.contactData.name = null
        this.contactData.email = null
        this.contactData.subject = null
        this.contactData.message = null
      })
    },
  },
}
</script>

<style scoped>
.form-control {
  border-radius: 15px;
  border: 1px solid #f1f2f6;
}
input {
  padding: 30px 15px;
}
.text-area {
  padding: 15px 15px;
  background: #fff;
  border-bottom: none;
  border-radius: 15px;
}
.text-area:focus {
  border: none;
}
.card {
  padding: 30px 20px;
  border: none;
  border-radius: 15px;
}
.center {
  text-align: center;
}
</style>
