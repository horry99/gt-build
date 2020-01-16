<template>
  <div class="hello">
    <h1>This is Home Page</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  created() {
    this.$http
      .post('/qsBank/oralTopic/list')
      .then(({ data: res }) => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
