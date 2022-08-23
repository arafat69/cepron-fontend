export default {
  getCategories(context) {
    return this.$axios.$get('/categories')
  },
}
