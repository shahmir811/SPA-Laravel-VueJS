<template>
  <div>
    <div class="media" v-for="topic in topics">
      <div class="media-left">
        <a href="#"><img :src="topic.user.data.avatar"></a>
      </div>
      <div class="media-body">
        <router-link :to="{ name: 'topic', params: { topicId: topic.id } }" tag="h4" class="media-heading"><a>{{ topic.title }}</a></router-link>
        <p class="text-muted">Posted by {{ topic.user.data.username }} ({{ topic.diffForHumans }})</p>
      </div>

    </div>
  </div>
</template>

<script>

import store from '../store/index'

export default {

  data() {
    return {
      topics: []
    }
  },
  created() {
    return store.getTopicsBySection(this.$route.params.sectionId).then(topics => {
      this.topics = topics
    })
  }

}
</script>


<style>

</style>
