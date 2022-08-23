<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <nuxt-link class="navbar-brand" to="/">Cepron</nuxt-link>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mr-lg-3 mr-md-3">
            <div class="input-group">
              <input
                id="inlineFormInputGroup"
                type="text"
                class="form-control"
                placeholder="Search"
              />
              <div class="input-group-prepend">
                <div class="input-group-text">Search</div>
              </div>
            </div>
          </li>
        </ul>

        <nuxt-link to="/login" class="ml-3 d-flex justify-content-end">
          <button class="btn btn-custom-secondary">Login</button>
        </nuxt-link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </div>
</template>

<style scoped>
.btn-custom-secondary {
  background-color: rgb(78, 78, 187);
  border-radius: 25px;
  padding: 5px 30px;
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
}
.btn-custom-secondary:hover {
  background: rgb(90, 90, 187);
  transition: all 0.5s;
}
</style>
