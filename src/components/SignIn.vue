<template>
  <div>

    <div class="alert alert-danger" v-if="error">
      <p>Sorry Could Not sign you In</p>
    </div>

    <form autocomplete="off" @submit.prevent="signin">

      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="you@somewhere.com" v-model="email" required>
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
      </div>

      <button type="submit" class="btn btn-default"><i class="fa fa-sign-in" aria-hidden="true"></i> Sign In</button>

    </form>
  </div>
</template>

<script>

import auth from '../auth/index'

export default {
  data() {
    return {
        email: null,
        password: null,
        error: false
    }
  },
  methods:{
    signin() {
      auth.signin(this, this.email, this.password)
    }
  }
}
</script>


<style>

</style>
