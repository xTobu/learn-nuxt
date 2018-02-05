<template lang="pug">
div.about
    h1  About (pages)
    hr
    ul
        li
            span components資料夾中，使用了AppLogo這個組件
        li
            span layout資料夾中，使用了AppLogo這個組件    
    AppLogo
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
export default {
  components: {
    AppLogo
  },
  layout: "about"
};
</script>

<style lang="sass">

.about h1 
    color: blue
div.about li
    display: inherit
</style>
