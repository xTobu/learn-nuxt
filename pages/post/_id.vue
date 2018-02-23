<template lang="pug">
    h1  {{message}}  {{test}}
</template>

<script>
export default {
  components: {},
  validate ({ params }) {
    // 判斷路由位址只限定數字
    return /^\d+$/.test(params.id)
  },
  asyncData ({ params, env, error }) {
    const data = {message: params.id}    
    return data
  },
  
};
</script>

<style>
.post h1 {
  color: brown;
}


</style>
