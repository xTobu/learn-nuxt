<template lang="pug">
div.count
    h1  Count (pages)
    hr
    ul
        li
            span components資料夾中，使用了Counter這個組件
    Counter
</template>

<script>
import Counter from "~/components/Counter.vue";
export default {
  components: {
    Counter
  }
};
</script>

<style>
.count h1 {
  color: red;
}

div.count li {
  display: inherit;
}
</style>
