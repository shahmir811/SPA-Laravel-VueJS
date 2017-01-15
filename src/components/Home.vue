<template>
  <div>
    <ul class="list-unstyled">
      <li class="well" v-for="section in sections">
        <router-link :to="{ name: 'section', params: { sectionId: section.id } }" tag="h4"><a>{{ section.title }}</a></router-link>
        <p>{{ section.description }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
  import store from '../store/index'

export default {

  data() {
    return {
        sections: []
    }
  },
  created(){
    store.getSections().then(sections => {
      this.sections = sections
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
