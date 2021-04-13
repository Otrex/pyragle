<template>
  <div id="sidebar">
    <div class="sidebar-wrapper">
      <div class="logo-holder">
        <img class="logo-small" src="img/io.svg">
        <img id="logo-full" src="img/logo.svg">
      </div>
      <div class="sscroll">
        <div class="nav-link"><img src="img/nav/dash.svg">
          <a href="" @click="goto('dashboard')" :class="{'active': menu.current == 'dashboard'}">dashboard</a></div>
        <div class="nav-link"><img src="img/nav/redirect.svg"><a @click="goto('transactions')" :class="{'active': menu.current == 'transactions'}" href="">transactions</a></div>
        <div class="nav-link"><img src="img/nav/briefcase.svg"><a href="" @click="goto('accounts')" :class="{'active': menu.current == 'accounts'}">accounts</a></div>
        <div class="nav-link"><img src="img/nav/cards.svg"><a href="" @click="goto('payments')" :class="{'active': menu.current == 'payments'}">payments</a></div>
        <div class="nav-link"><img src="img/nav/wave.svg"><a href="" @click="goto('reports')" :class="{'active': menu.current == 'reports'}">reports</a></div>
        <div class="nav-link"><img src="img/nav/user-girl.svg"><a href="" @click="goto('settings')" :class="{'active': menu.current == 'settings'}">settings</a></div>
        <div class="nav-link"><img src="img/nav/puzzle.svg"><a href="" @click="goto('ui-kits')" :class="{'active': menu.current == 'ui-kits'}">UI kits</a></div>
        <div class="sub-menu">
          <div class="sub-panel"><span>Funds Overview</span><span><img src="img/nav/plus-circle.svg"> Add </span></div>
          <div class="nav-link"><img src="img/nav/visa.svg"><a class="c-yellow" href="">Card xxxx 6789</a></div>
          <div class="nav-link"><img src="img/nav/money.svg"><a class="c-blue" href="">Card xxxx 6789</a></div>
          <div class="nav-link"><img src="img/nav/money-visa.svg"><a href="" class="c-purple">Card xxxx 6789</a></div>
          <div class="nav-link"><img src="img/nav/cubes.svg"><a class="c-green" href="">Card xxxx 6789</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState , mapActions } from 'vuex'

export default {
  name: 'SideBar',
  props: {
    msg: String
  },
  computed : {
    ...mapState(['menu'])
  },
  methods : {
    ...mapActions(['goto'])
  }
};
</script>

