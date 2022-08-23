export default {
  SET_USER(state, user) {
    state.user = user
  },
  SET_ACCESS_TOKEN(state, access) {
    if (access == null) {
      state.token = null
    } else {
      state.token = access.auth_type + ' ' + access.token
    }
  },
}
