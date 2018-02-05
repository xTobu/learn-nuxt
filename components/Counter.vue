<template lang="pug">
    div.counter
        div
          h2 Counter (components)
        input(
            type='button'
            v-model = "btnPlus"
            @click="plus()"
        )
        h3 {{count}}
        
</template>
<script>
export default {
  data() {
    return {
      header: "Count",
      btnPlus: "+",
      count: 0
    };
  },
  methods: {
    plus() {
      this.count += 1;
    }
  }
};
</script>
<style>

</style>
