<template>
  <div>
    <!-- If the User is not Authenticated-->
    <div class="well" v-if="!auth.user.authenticated">
      <router-link :to="{ name: 'auth.signup'}"><a>SignUp</a></router-link>
      or
      <router-link :to="{ name: 'auth.signin'}"><a>SignIn</a></router-link>
      to add a topic
    </div>

    <!-- Show the TextArea only if USER is Authenticated-->
    <form @submit.prevent="createSection" v-if="auth.user.authenticated">
      <div class="form-group">
        <label for="section">Section</label>
        <select class="form-control" id="section" v-model="section">
          <option v-for="section in sections" :value="section.id">{{ section.title }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" class="form-control" v-model="title" required>
      </div>

      <div class="form-group">
        <label for="body">Body</label>
        <textarea id="body" rows="8" class="form-control" v-model="body" required></textarea>
      </div>

      <button type="submit" class="btn btn-default">Create Topic</button>
    </form>


  </div>
</template>

<script>

import auth from '../auth/index'
import store from '../store/index'

export default {
  data() {
    return {
      auth: auth,
      sections: [],
      section: null,
      title: null,
      body: null
    }
  },
  created() {
    store.getSections().then(sections => {
      this.sections = sections
      this.section  = sections[0].id
    })
  },
  methods: {
    createSection() {
      console.log(this.section)
    }
  }
}
</script>


<style>

</style>
