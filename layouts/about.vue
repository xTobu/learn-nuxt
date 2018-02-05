<template lang="pug">
    div#app
        header
            span Header (layouts_about)
            ul.menubar
                li
                    nuxt-link(to="/") Home        
        div.wrap
            nuxt
</template>

<style lang="scss">
@import "assets/scss/style.scss";
header {
  color: green;
}

</style>
