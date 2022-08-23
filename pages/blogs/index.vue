<template>
  <div class="page-content">
    <div class="container">
      <div class="card">
        <div class="card-body">
          <div class="row justify-content-between">
            <div class="col-md-3 filter mb-3 mb-md-0">
              <select name="select_category" class="form-control">
                <option>Filter by</option>
              </select>
            </div>
            <div class="col-md-5">
              <b-input-group>
                <b-form-input
                  type="text"
                  placeholder="Search course"
                  required
                ></b-form-input>

                <b-input-group-append>
                  <b-input-group-text>
                    <img src="/icons/search.svg" alt="search icon" />
                  </b-input-group-text>
                </b-input-group-append>
              </b-input-group>
            </div>
          </div>
        </div>
      </div>
      <div class="card news-card mt-4">
        <div class="card-body">
          <div class="card-image">
            <img src="/images/welcome_banner_model .svg" alt="News Image" />
          </div>
          <div class="news-info">
            <div>
              <h6 class="mb-3">
                <nuxt-link to="/blogs/2" class="title">
                  Start and Grow Your Business By Importing
                </nuxt-link>
              </h6>
              <p class="text-grey mb-1 mb-md-3 hide-on-md">
                Small world with lots of Opportunities We live in a globalized
                world where we can find any products that are produced in any
                other countries in this world. The world business has been
                centralized like never before. The opportunities to start and
                grow a business have highly increased because of the high demand
                in the local market. At present, because of the google.com we
                can get to know any product that is produced...
                <a href="javascript:" @click="showBlogDetails(1)">read more</a>
              </p>
              <p class="text-grey mb-3 show-on-md">
                Small world with lots of Opportunities We live in a globalized
                world where we can find ...
                <a href="javascript:" @click="showBlogDetails(1)">read more</a>
              </p>
            </div>
            <div class="news-card-footer">
              <div class="author">
                <img
                  src="/images/avatar/avatar.svg"
                  height="30"
                  width="30"
                  style="border-radious: 50%"
                  alt=""
                />
                <p>Palash Hawladar</p>
              </div>
              <div class="date">
                <p class="text-grey">21 July, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card news-card mt-4">
        <div class="card-body">
          <div class="card-image">
            <img src="/images/welcome_banner_model .svg" alt="News Image" />
          </div>
          <div class="news-info">
            <div>
              <h6 class="mb-3">Start and Grow Your Business By Importing</h6>
              <p class="text-grey mb-1 mb-md-3 hide-on-md">
                Small world with lots of Opportunities We live in a globalized
                world where we can find any products that are produced in any
                other countries in this world. The world business has been
                centralized like never before. The opportunities to start and
                grow a business have highly increased because of the high demand
                in the local market. At present, because of the google.com we
                can get to know any product that is produced...
                <a href="javascript:">read more</a>
              </p>
              <p class="text-grey mb-3 show-on-md">
                Small world with lots of Opportunities We live in a globalized
                world where we can find ...
                <a href="javascript:">read more</a>
              </p>
            </div>
            <div class="news-card-footer">
              <div class="author">
                <img
                  src="/images/avatar/avatar.svg"
                  height="30"
                  width="30"
                  style="border-radious: 50%"
                  alt=""
                />
                <p>Palash Hawladar</p>
              </div>
              <div class="date">
                <p class="text-grey">21 July, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card news-card mt-4">
        <div class="card-body">
          <div class="card-image">
            <img src="/images/welcome_banner_model .svg" alt="News Image" />
          </div>
          <div class="news-info">
            <div>
              <h6 class="mb-3">Start and Grow Your Business By Importing</h6>
              <p class="text-grey mb-1 mb-md-3 hide-on-md">
                Small world with lots of Opportunities We live in a globalized
                world where we can find any products that are produced in any
                other countries in this world. The world business has been
                centralized like never before. The opportunities to start and
                grow a business have highly increased because of the high demand
                in the local market. At present, because of the google.com we
                can get to know any product that is produced...
                <a href="javascript:">read more</a>
              </p>
              <p class="text-grey mb-3 show-on-md">
                Small world with lots of Opportunities We live in a globalized
                world where we can find ...
                <a href="javascript:">read more</a>
              </p>
            </div>
            <div class="news-card-footer">
              <div class="author">
                <img
                  src="/images/avatar/avatar.svg"
                  height="30"
                  width="30"
                  style="border-radious: 50%"
                  alt=""
                />
                <p>Palash Hawladar</p>
              </div>
              <div class="date">
                <p class="text-grey">21 July, 2021</p>
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
  methods: {
    showBlogDetails(blogId) {
      this.$router.push(`/blogs/${blogId}`)
    },
  },
}
</script>
<style scoped>
.title{
  text-decoration: none;
  color:#2F3542 !important;
}
.filter {
  display: flex;
  column-gap: 30px;
}
.input-group {
  border: 1px solid #f1f2f6;
  border-radius: 0;
  overflow: hidden;
}
.form-control:focus {
  box-shadow: none;
}
.form-control {
  border-radius: 0;
}

.input-group-text {
  border: none;
  border-radius: 11px !important;
  cursor: pointer;
  background-color: #fff;
}
.news-card .card-body {
  display: flex;
  column-gap: 45px;
}
.card-image {
  width: 28%;
  overflow: hidden;
  object-fit: contain;
}
.card-image img {
  height: 100%;
  width: 100%;
}
.news-info {
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news-card-footer {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 480px) {
  .news-card .card-body {
    column-gap: 10px;
  }
}
</style>
