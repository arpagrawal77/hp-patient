<template>
  <div id="app">
    <!-- <fs-header></fs-header> -->
    <div class="hp-content-container">
      <router-view></router-view>
    </div>
    <!-- <fs-footer></fs-footer> -->
  </div>
</template>

<script>
import router from './router';
import i18n from './locale-config';
// import FsHeader from './components/fs-header/fs-header.vue';
// import FsFooter from './components/fs-footer/fs-footer.vue';

export default {
  name: 'App',
  components: {
      // FsHeader,
      // FsFooter,
  },
  router,
  i18n,
};
</script>

<style lang="less">
* {
  margin: 0;
}
body,
#app {
  font-family: 'Quicksand', sans-serif;
  background: #fff;
}

#app {
  min-height: 100vh;
  overflow: hidden;
  display: block;
  position: relative;
  max-width: 1440px;
  margin: 0 auto;
  padding: 48px;
  // padding-bottom: 80px;
  @media only screen and (max-width: 768px) {
    padding: 24px;
  }
}

a {
  text-decoration: none;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 10px;
// }
</style>
