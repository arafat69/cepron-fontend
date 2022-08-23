<template>
  <client-only>
    <div>
      <NewNavbar />
      <Nuxt />

      <NewFooter />
    </div>
  </client-only>
</template>
<script>
export default {
  name: 'Default',
}
</script>
<style>
.btn-custom {
  background: rgb(90, 90, 187);
  color: #fff;
  font-weight: bold;
}
.btn-custom:hover {
  background: rgb(86, 80, 187);
  color: #fff;
}
.page-title {
  position: relative;
  font-weight: 700;
  margin-bottom: 20px;
  color: rgb(25, 26, 42);
}
.page-title:after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 60px;
  height: 3px;
  background: rgb(32, 135, 164);
}
.section-title-p {
  margin: 0;
  font-size: 25px;
  font-weight: 500;
  color: grey;
}
.font-blue {
  color: #0e78ce;
}
.font-orange {
  color: #ed8e71;
}

.welcome-section .carousel-inner .carousel-item {
  width: 100%;
  object-fit: cover;
}
.welcome-section .carousel-inner .carousel-item img {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.carousel-caption {
  position: absolute;
  right: 9%;
  bottom: 20px;
  left: 9%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fff;
  text-align: center;
}
</style>
