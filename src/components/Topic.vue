<template>
  <div>
    <div class="media" v-if="topic">
      <div class="media-left">
        <a href="#"><img :src="topic.user.data.avatar" class="media-object"></a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ topic.title }}</h4>
        <p>Posted by {{ topic.user.data.username }} ({{ topic.diffForHumans }})</p>
        <p>{{ topic.body }}</p>

        <!-- Topic Replies (Posts) -->
        <div class="media" v-for="post in topic.posts.data">
          <div class="media-left">
            <a href="#"><img :src="post.user.data.avatar" class="media-object"></a>
          </div>
          <div class="media-body">
            <p>Posted by {{ post.user.data.username }} ({{ post.diffForHumans }})</p>
            <p>{{ post.body }}</p>
          </div>
        </div>
        <!-- Replies End here-->

      </div>
    </div>
  </div>
</template>

<script>

import store from '../store/index'

export default {
  data() {
    return {
      topic: null
    }
  },
  created() {
    return store.getTopicById(this.$route.params.topicId).then(topic => {
      this.topic = topic
      })
  }


}
</script>


<style>

</style>
