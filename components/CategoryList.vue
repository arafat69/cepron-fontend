<template>
  <div class="categories">
    <div class="section-top">
      <h1 class="section-title">Featured Categories</h1>
      <p class="mt-2">
        Here’s everything you need to know about Featured Categorise
      </p>
    </div>
    <div class="row">
      <div class="col-md-6 col-lg-6 mt-4">
        <div class="card category-card">
          <img src="/images/category1.svg" alt="" />
          <div class="overlay"></div>
          <div class="on-hover">
            <h3>Programming Language</h3>
            <span class="total-course">30+ Courses</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mt-4">
        <div class="card category-card">
          <img src="/images/category2.svg" alt="" />
          <div class="overlay"></div>
          <div class="on-hover">
            <h3>Programming Language</h3>
            <span class="total-course">30+ Courses</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mt-4">
        <div class="card category-card">
          <img src="/images/category3.svg" alt="" />
          <div class="overlay"></div>
          <div class="on-hover">
            <h3>Programming Language</h3>
            <span class="total-course">30+ Courses</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mt-4">
        <div class="card category-card">
          <img src="/images/category4.svg" alt="" />
          <div class="overlay"></div>
          <div class="on-hover">
            <h3>Programming Language</h3>
            <span class="total-course">30+ Courses</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 mt-4">
        <div class="card category-card">
          <img src="/images/category5.svg" alt="" />
          <div class="overlay"></div>
          <div class="on-hover">
            <h3>Programming Language</h3>
            <span class="total-course">30+ Courses</span>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-6 mt-4">
        <div class="card category-card">
          <img src="/images/category6.svg" alt="" />
          <div class="overlay"></div>
          <div class="on-hover">
            <h3>Programming Language</h3>
            <span class="total-course">30+ Courses</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CategoryList',
  data() {
    return {
      isLoading: false,
    }
  },
  computed: {
    ...mapGetters({
      categories: 'category/getCategories',
    }),
  },
  mounted() {
    this.fetchCategories()
  },
  methods: {
    fetchCategories() {
      this.$store
        .dispatch('category/getCategories')
        .then((response) => {
          this.$store.commit(
            'category/SET_CATEGORIES',
            response.data.categories
          )
        })
        .catch((error) => {
          this.$toast.error(error.response.message)
        })
    },
  },
}
</script>

<style scoped>
.section-top {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.card {
  overflow: hidden;
}
.card img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.on-hover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  opacity: 0;
  transition: 1s;
  height: 300px;
  margin-left: -20px;
  padding: 0px 25px;
  z-index: 999;
}
.overlay {
  position: absolute;
  width: 0;
  right: 0px;
  height: 100%;
  background: #3742fa;
  opacity: 0.6;
  transition: 0.7s;
}
.card:hover .overlay {
  width: 100%;
}
.card:hover .on-hover {
  opacity: 1;
  margin-left: 0;
}
.total-course {
  padding: 10px 25px;
  background-color: #ff6f9b;
  border-radius: 15px;
}
@media screen and (max-width: 767px) {
  .overlay {
    width: 100%;
  }
  .on-hover {
    opacity: 1;
  }
}
</style>
