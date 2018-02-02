<template lang="pug">
    div#app
        header
            span 不一樣的layout
            ul.menubar
                li
                    nuxt-link(to="/") Home
                li
                    nuxt-link(to="/about") About
                li
                    nuxt-link(to="/count") Count           
        div.wrap
            nuxt
</template>

<style lang="scss">
@import "assets/scss/style.scss";
header {
  color: green;
}

</style>
