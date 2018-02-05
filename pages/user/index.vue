<template lang="pug">
div.users
    h1 Users (pages)
    hr
    span 基礎與動態路由
    br
    span pages中，新增user資料夾，實作基礎與動態路由
    ul
        li
            nuxt-link(to="/user") user
        li
            nuxt-link(to="/user/Web") user/web
        li
            nuxt-link(to="/user/Gene") user/gene
        li
            nuxt-link(to="/user/1") user/1
        li
            nuxt-link(to="/user/2") user/2
</template>

<script>


export default {
  components: {
  },

}
</script>

<style lang="sass">
.index h1
    color: #333;
</style>
