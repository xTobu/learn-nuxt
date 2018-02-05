<template lang="pug">
    div#app
        header
            span Header (layouts_default)
            ul.menubar
                li
                    nuxt-link(to="/") Home
                li
                    nuxt-link(to="/about") About
                li
                    nuxt-link(to="/count") Count
                li
                    nuxt-link(to="/user") User (基礎與動態路由)
                li
                    nuxt-link(to="/post") Post (嵌套路由)         
        div.wrap
            //<nuxt>組件只能在layout中使用, 以展示pages的內容
            //https://zh.nuxtjs.org/api/components-nuxt
            nuxt
</template>

<style lang="scss">
@import "assets/scss/style.scss";
header {
  color: green;
}

</style>
