<template>
  <client-only>
    <div class="page-content">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="title">Contact us</h1>
          </div>
        </div>
        <div class="row mt-5 justify-content-between">
          <div class="col-md-6 mt-4">
            <div class="icon-n-text">
              <img src="/icons/location-primary.svg" alt="Location icon" />
              <p>
                5/3, Mizan Tower, Kollayanpur Bus Stand, Mirpur Road, Dhaka,
                Bangladesh.
              </p>
            </div>
            <div class="contact-info mt-4 mb-4">
              <div class="icon-n-text">
                <img src="/icons/phone-primary.svg" alt="Location icon" />
                <p>+39 0444 149 7243</p>
              </div>
              <div class="icon-n-text">
                <img src="/icons/email-primary.svg" alt="Location icon" />
                <p>info@cafcsn.it</p>
              </div>
            </div>
            <div class="card br-0">
              <div class="card-body">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2326.782440299799!2d90.41460815937914!3d23.804562765629605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7abd941ed15%3A0xf151df4e4e9c047c!2sUnited%20Hospital%20Limited!5e0!3m2!1sen!2sbd!4v1630199242294!5m2!1sen!2sbd"
                  width="100%"
                  height="320"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
          <div class="col-md-5 mt-5 mt-md-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      meta: '',
    }
  },
  head() {
    return {
      title: 'Contact Us | Cepron',
      meta: this.meta,
    }
  },
  mounted() {
    this.getMeta()
  },
  methods: {
    getMeta() {
      this.$axios.get('/meta/contact-us').then((response) => {
        this.meta = response.data.data.metas
      })
    },
  },
}
</script>
<style scoped>
.title {
  text-align: center;
}
.icon-n-text {
  display: flex;
  column-gap: 15px;
  align-items: flex-start;
}
.contact-info {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 15px;
}
</style>
