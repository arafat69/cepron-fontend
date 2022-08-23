<template>
  <div class="recent-blogs">
    <div class="container">
      <h1 class="section-title">Recent Blogs</h1>
      <VueSlickCarousel v-bind="carouselSettings">
        <div v-for="blog in blogs" :key="blog.id">
          <BlogsCard :blog="blog" />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'RecentBlogs',
  components: { VueSlickCarousel },

  data() {
    return {
      carouselSettings: {
        arrows: true,
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      blogs: [
        {
          id: 1,
          image: '/images/news1.svg',
          title: 'How To Start Your Bussiness',
          details:
            'We live in a globalized world where we can find any products that are produced in any other countries...',
          author: 'Palash Hawladar',
        },
        {
          id: 2,
          image: '/images/news2.svg',
          title: 'ইউটিউব চ্যানেল খোলার নিয়ম',
          details:
            'আগে আমরা দেশি বিদেশি নানা টিভি চ্যানেল এর সাথে পরিচিত ছিলাম। সে সব চ্যানেলগুলো আলাদা আলাদা বিষয়ে...',
          author: 'Palash Hawladar',
        },
        {
          id: 3,
          image: '/images/news3.svg',
          title: 'সহীহ কোরআন শিখার সহজ পদ্ধতি',
          details:
            'আমরা যারা ইসলাম ধর্মের অনুসারী তাদের প্রত্যেক এর জন্য কুরআন পড়া আবশ্যক। কিন্তু ছোটবেলায় যারা কোরআন পড়া...',
          author: 'Palash Hawladar',
        },
        {
          id: 4,
          image: '/images/news3.svg',
          title: 'সহীহ কোরআন শিখার সহজ পদ্ধতি',
          details:
            'আমরা যারা ইসলাম ধর্মের অনুসারী তাদের প্রত্যেক এর জন্য কুরআন পড়া আবশ্যক। কিন্তু ছোটবেলায় যারা কোরআন পড়া...',
          author: 'Palash Hawladar',
        },
      ],
    }
  },
}
</script>

<style>
.slick-prev::before,
.slick-next::before {
  color: black;
}
.recent-blogs {
  padding: 115px 0px;
  text-align: center;
}
@media screen and (max-width: 991px) {
  .recent-blogs {
    padding: 60px 0px;
  }
}
</style>
