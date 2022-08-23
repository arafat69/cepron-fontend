<template>
  <div class="card shadow mt-4 mb-4 mx-3">
    <div class="card-body">
      <div class="card-image">
        <img :src="blog.image" alt="" class="card-img-top" />
      </div>
      <div class="news-title mt-3">
        <h6 v-if="blog.title.length < 50" class="mt-2">
          <nuxt-link :to="'/blogs/'+blog.id" class="title">
            {{ blog.title }}
          </nuxt-link>
        </h6>
        <h6 v-else class="mt-2">
          <nuxt-link :to="'/blogs/'+blog.id" class="title">
            {{ blog.title.substring(0, 50) + '..' }}
          </nuxt-link>
        </h6>
      </div>

      <p class="text-grey mt-2 mb-2">
        {{ blog.details }} <nuxt-link :to="'/blogs/'+blog.id">see more</nuxt-link>
      </p>

      <div class="row px-2">
        <div class="col-12 px-2">
          <div class="author-info">
            <img
              src="/images/dummy/default-avater.jpg"
              height="40px"
              width="40px"
              alt=""
              style="border-radius: 50%"
            />
            <p class="name">{{ blog.author }}</p>
            <p class="date">21 July, 2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: [Object],
      required: true,
    },
  },
}
</script>

<style scoped>
.title{
  text-decoration: none;
  color:#2F3542 !important;
}
.card-body {
  text-align: left;
}
.author-info {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 10px;
  text-align: left;
}
.name {
  width: 75%;
}
</style>
