<template>
  <div id="header">
    <div class="nav">
      <div class="menu-btn-wrapper">
        <label for="menu-btn">
          <img class="mfix" src="img/nav/Menu.svg">
        </label><span>Dashboard</span>
      </div>
    </div>
    <div class="info">
      <div class="ico"><a href="" class="mfix"><img src="img/search.svg"></a></div>
      <div class="ico"><a href="" class="mfix"><img src="img/msg.svg"></a></div>
      <div class="ico"><a href=""><img src="img/bell.svg"></a></div>
      <div class="user">
        <div class="pic"><img src="img/img.png"></div>
        <div class="name">Barry Armstrong</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
};
</script>