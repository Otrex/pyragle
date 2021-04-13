<template>
  <div id="panel-1">
    <div class="content">
      <div class="sub-panel"><span>Funds Overview</span><a href="" >All reports</a></div>
      <div class="jumbo hinge">
        <img src="img/tchart.svg">
        <div >Your Statistic would appear here</div>
      </div>
      <div class="sub-panel"><span>Your Cards</span><a href="" >All accounts</a></div>
      <div class="data whiten hinge">
        <table>
          <tr>
            <td><img src="img/nav/visa.svg" ></td>
            <td>
              <div class="m">3456 **** **** 567</div>
              <div class="sm">Card number</div>
            </td>
            <td>
              <div class="m">$890.00</div>
              <div class="sm">Balance</div>
            </td>
            <td>
              <div class="m">Active</div>
              <div class="sm">Status</div>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td><img src="img/nav/visa.svg" ></td>
            <td>
              <div class="m">3456 **** **** 567</div>
              <div class="sm">Card number</div>
            </td>
            <td>
              <div class="m">$890.00</div>
              <div class="sm">Balance</div>
            </td>
            <td>
              <div class="m">Active</div>
              <div class="sm">Status</div>
            </td>
            <td>...</td>
          </tr>
          <tr>
            <td><img src="img/nav/visa.svg" ></td>
            <td>
              <div class="m">3456 **** **** 567</div>
              <div class="sm">Card number</div>
            </td>
            <td>
              <div class="m">$890.00</div>
              <div class="sm">Balance</div>
            </td>
            <td>
              <div class="m">Active</div>
              <div class="sm">Status</div>
            </td>
            <td>...</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>
