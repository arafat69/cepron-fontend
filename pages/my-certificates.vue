<template>
  <div class="container">
    <p class="mt-2">Home/My Certificates</p>
    <hr />
    <div class="main-content">
      <h6>My Certificates</h6>
      <div class="row">
        <div class="col-sm-6 col-lg-3 mt-3">
          <div class="card">
            <div class="locked"></div>
            <div class="card-body">
              <div class="card-image">
                <img src="/images/certificate.svg" alt="" />
              </div>
              <p class="mt-2">
                <strong>Digital Marketing Basic Course</strong>
              </p>
              <b-button block variant="download" class="mt-2">
                <img src="/icons/download.svg" alt="" />
                Download
              </b-button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mt-3">
          <div class="card">
            <div class="card-body">
              <div class="card-image">
                <img src="/images/certificate.svg" alt="" />
              </div>
              <p class="mt-2">
                <strong>Digital Marketing Basic Course</strong>
              </p>
              <b-button block variant="download" class="mt-2">
                <img src="/icons/download.svg" alt="" />
                Download
              </b-button>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3 mt-3">
          <div class="card">
            <div class="card-body">
              <div class="card-image">
                <img src="/images/certificate.svg" alt="" />
              </div>
              <p class="mt-2">
                <strong>Digital Marketing Basic Course</strong>
              </p>
              <b-button block variant="downloaded" class="mt-2">
                <img src="/icons/downloaded.svg" alt="" />
                Downloaded
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>
<style scoped>
.card {
  position: relative;
}
.card-image {
  width: 100%;
  overflow: hidden;
  object-fit: contain;
}
.card-image img {
  width: 100%;
}
.btn-download {
  background: rgba(50, 78, 243, 0.1);
  color: #324efd;
  font-weight: 800;
}
.btn-downloaded {
  background: rgba(34, 228, 172, 0.1);
  color: #22e4ac;
  font-weight: 800;
}
.locked {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #2f3542;
  opacity: 0.6;
  border-radius: 15px;
}
.locked::before {
  content: url(/icons/lock.svg);
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  color: #fff;
  justify-content: center;
}
</style>
