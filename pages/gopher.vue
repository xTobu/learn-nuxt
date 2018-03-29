<template>
<div class="index">
  <ul>
    <li v-for="item in items" :key="item.id">
      <img v-bind:src="item"  alt="">
    </li>
  </ul>
  <img  v-bind:src="gop"  alt="">
  <img src="~/assets/img/gopher.png">
</div>
</template>

<script>
export default {
  components: {},

  asyncData(context) {
    return {
      items: [require('~/assets/img/gopher.png'),require('~/assets/img/gopher.png')],
      gop:'img/gopher.png',
      src: "gopher.png"
    };
  },
  // method:{
  //    imgPath(url) {
  //      console.log(this.src)
  //     return require("~/assets/img/"+"gopher.png");
  //   },
  // },

  computed: {
    imgPath(aa) {
      return require("~/assets/img/" + "gopher.png");
    }
    // imagePath: function() {
    //   return require("~/assets/" + this.src);
    // }
  },
  beforeMount() {},
  mounted() {
    console.log(this.src);
  }
};
</script>

<style >

</style>
