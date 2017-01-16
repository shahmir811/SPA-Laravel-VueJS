<template>
  <div>

    <div class="alert alert-danger" v-if="error && !success">
      <p>Sorry Could Not sign you up</p>
    </div>

    <div class="alert alert-success" v-if="success">
      <p>You are done, you can now Sign In</p>
    </div>

    <form autocomplete="off" @submit.prevent="signup" v-if="!success">

      <div class="form-group" :class="{ 'has-error': error && response.email }">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="you@somewhere.com" v-model="email" required>
        <span class="help-block" v-if="error && response.email">{{ response.email }}</span>
      </div>

      <div class="form-group" :class="{ 'has-error': error && response.username }">
        <label for="username">UserName:</label>
        <input type="username" class="form-control" id="username" v-model="username" required>
        <span class="help-block" v-if="error && response.username">{{ response.username }}</span>
      </div>

      <div class="form-group" :class="{ 'has-error': error && response.password }">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
        <span class="help-block" v-if="error && response.password">{{ response.password }}</span>
      </div>

      <button type="submit" class="btn btn-default">Sign Up</button>
    </form>
  </div>
</template>

<script>

import auth from '../auth/index'

export default {

  data() {
    return {
        email: null,
        username: null,
        password: null,
        success: false,
        error: false,
        response: null
    }
  },
  methods: {
    signup() {
      auth.signup(this, this.email, this.username, this.password)
    }
  }

}
</script>


<style>

</style>
