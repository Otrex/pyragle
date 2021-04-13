<template>
  <div id="main">
    <div style="position:relative; width:100%;">
      <TopNav />
      <div id="panels"><div class="xscroll">
        <Panel1 />
        <Panel2 />
      </div>
      <Footer />
    </div>
  </div></div>
</template>

<script>

import TopNav from './TopNav.vue'
import Panel1 from './Panel1.vue'
import Panel2 from './Panel2.vue'
import Footer from './Footer.vue'

import { mapMutations } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    ...mapMutations(['setCurrentSideBar'])
  },
  created(){
    this.setCurrentSideBar('dashboard')
  },
  components : {
    TopNav,
    Panel1,
    Panel2, Footer
  }
};
</script>
