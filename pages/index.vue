<template lang="pug">
div.index
    h1 Index (pages)
    hr
    h2 {{test}}
</template>

<script>


export default {
  components: {
  },
  data(){
      return {test:'1234566'}
  },
  beforeMount(){
      
  },
}
</script>

<style lang="sass">
.index h1
    color: #333;
</style>
