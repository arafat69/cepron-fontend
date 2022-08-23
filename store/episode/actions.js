export default {
  getEpisodes(context, courseId) {
    return this.$axios.$get(`/episodes?course_id=${courseId}`)
  },
  findEpisodeById(context, episodeId) {
    return this.$axios.$get(`/episodes/${episodeId}`)
  },
}
