<template>
  <div class="hello">
    <h1>Home Component</h1>

  </div>
</template>

<script>
  import store from '../store/index'

export default {
  created(){
    store.getSections().then(sections => {
      console.log(sections);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
