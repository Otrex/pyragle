<template>
  <div id="app">
    <input type="checkbox" style="display:none" id="menu-btn" name="">
    <SideBar  />
    <Main />
    <TopNav />
    <Panel1 />
    <Panel2 />
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import Main from './components/Main.vue'


export default {
  name: 'App',
  components: {
    SideBar, Main
  }
}
</script>