<template>
  <div class="why-cepron">
    <div class="container">
      <h1 class="section-title">Why Cepron?</h1>
      <div class="row">
        <div
          v-for="reason in reasons"
          :key="reason.id"
          class="col-md-6 col-lg-4"
        >
          <div class="card">
            <div class="card-body">
              <div class="image-n-title">
                <img :src="reason.image" alt="Flexible Learning" />
                <h6>{{ reason.title }}</h6>
                <p class="text-grey mt-2">
                  {{ reason.details }}
                </p>
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
  data() {
    return {
      reasons: [
        {
          id: 1,
          image: '/images/quality-course.svg',
          title: 'Quality Course',
          details:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
        },
        {
          id: 2,
          image: '/images/flexible-learning.svg',
          title: 'Flexible Learning',
          details:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
        },
        {
          id: 3,
          image: '/images/quick-support.svg',
          title: 'Quick Support',
          details:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
        },
      ],
    }
  },
}
</script>

<style scoped>
.why-cepron {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 115px 0px;
  background: #fdfbfd;
}
.card {
  border: none;
  background: none;
}
h6 {
  margin-top: -30px;
}
@media screen and (max-width: 991px) {
  .why-cepron {
    padding: 60px 0px;
  }
}
</style>
