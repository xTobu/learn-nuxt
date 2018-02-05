<template lang="pug">
div.users
    h1 Users - _id ({{id}}) (pages)
    hr
</template>

<script>
export default {
  asyncData({ params, env, error }) {
    return { id: params.id };
  }
};
</script>

<style lang="sass">
.index h1
    color: #333;
</style>
