<template>
  <div class="container">
    <p class="mt-3">Home/Payment History</p>
    <hr />
    <h6 class="mb-3">Payment History</h6>
    <div class="table-responsive">
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">Order</th>
            <th scope="col">Date</th>
            <th scope="col">Course Name</th>
            <th scope="col">Method</th>
            <th scope="col">Amount</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light-grey">
            <td>98GFT54</td>
            <td>19 Aug, 2021</td>
            <td>Digital Marketing Basic Course</td>
            <td>City Bank</td>
            <td>$65.00</td>
            <td><p class="text-red">Pending</p></td>
          </tr>
          <tr class="table-light-grey">
            <td>98GFT54</td>
            <td>19 Aug, 2021</td>
            <td>Digital Marketing Basic Course</td>
            <td>City Bank</td>
            <td>$65.00</td>
            <td><p class="text-green">Complete</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'auth',
}
</script>

<style>
table {
  overflow-x: scroll;
}
.table-dark {
  background: #747d8c;
}
.table-light-grey {
  background: #fdfbfd;
}
</style>
