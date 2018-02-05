<template lang="pug">
div.post
    h1  Post (pages)
    hr    
    span 嵌套路由
    br
    span pages中，新增post.vue與post資料夾，實作嵌套路由
    ul
        li
            nuxt-link(to="/post") post
        li
            nuxt-link(to="/post/0") post/0
        li
            nuxt-link(to="/post/1") post/1
        li
            nuxt-link(to="/post/2") post/2
    
    div.post_content   
        //嵌套路由時需要的組件 nuxt-child ，用來展示post資料夾裡的內容
        nuxt-child
</template>

<script>
export default {
  components: {},

};
</script>

<style>
.post h1 {
  color: brown;
}

div.post li {
  display: inline-block;
}
</style>
