<template>
  <div class="h-100">
    <div class="authincation h-100">
      <div class="container h-100">
        <div class="row justify-content-center h-100 align-items-center">
          <div class="col-md-5">
            <div class="form-input-content text-center error-page">
              <h1 class="error-text font-weight-bold">
                {{ error.statusCode }}
              </h1>
              <h4>
                {{ error.message }}
              </h4>
              <div>
                <nuxt-link class="btn btn-custom mt-2" to="/"
                  >Go back to home</nuxt-link
                >
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
  layout: 'error-layout',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.h-100 {
  height: 100vh !important;
}
</style>
