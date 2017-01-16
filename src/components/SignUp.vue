<template>
  <div>

    <div class="alert alert-danger" v-if="error">
      <p>Sorry Could Not sign you up</p>
    </div>

    <div class="alert alert-success" v-if="success">
      <p>You are done, you can now Sign In</p>
    </div>

    <form autocomplete="off" @submit.prevent="signup" v-if="!success">

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="you@somewhere.com" v-model="email" required>
      </div>

      <div class="form-group">
        <label for="username">UserName:</label>
        <input type="username" class="form-control" id="username" v-model="username" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
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
