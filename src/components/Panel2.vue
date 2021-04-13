<template>
  <div id="panel-2">
    <div class="content">
      <div class="sub-panel">
        <span>Transactions</span>
        <a href="" >August 8</a>
      </div>
      <div class="transaction whiten hinge">
        <div class="t-chart">
          <img src="img/tchart2.svg">
          <div > Your Transactions will appear here </div>
        </div>
        <div class="trx"><img src=""><div ><span class="hinge"></span><span class="hinge"></span></div></div>
        <div class="trx"><img src=""><div ><span class="hinge"></span><span class="hinge"></span></div></div>
        <div class="trx"><img src=""><div ><span class="hinge"></span><span class="hinge"></span></div></div>

        <div class="trx"><img src=""><div ><span class="hinge"></span><span class="hinge"></span></div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel2',
  props: {
    msg: String
  }
};
</script>
