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

        <!-- If the User is not Authenticated-->
        <div class="well" v-if="!auth.user.authenticated">
          <router-link :to="{ name: 'auth.signup'}"><a>SignUp</a></router-link>
          or
          <router-link :to="{ name: 'auth.signin'}"><a>SignIn</a></router-link>
          to reply
        </div>

        <hr>

        <!-- Show the reply TextArea only if USER is Authenticated-->
        <form @submit.prevent="reply" v-if="auth.user.authenticated">
          <div class="form-group">
            <textarea rows="6" placeholder="Reply" class="form-control" v-model="body" required></textarea>
          </div>
          <button type="submit" class="btn btn-default">Reply</button>
        </form>


      </div>
    </div>

  </div>
</template>

<script>

import store from '../store/index'
import marked from 'marked'
import auth from '../auth/index'

export default {
  data() {
    return {
      auth: auth,
      topic: null,
      body: ''
    }
  },
  methods:{
    reply() {
      store.replyToTopicById(this.topic.id, this.body).then(post => {
        //Add Post to the list of posts
        this.topic.posts.data.push(post)
        //Set body: ''
        this.body = ''
      })
    }
  },
  created() {
    return store.getTopicById(this.$route.params.topicId).then(topic => {
      this.topic = topic
    })
  },
  filters: {
    marked: marked
  }

}
</script>


<style>

</style>
