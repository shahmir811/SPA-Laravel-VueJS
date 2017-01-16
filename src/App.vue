<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <nav>
          <ul class="list-inline">
            <router-link :to="{ name: 'home'}" tag="li" active-class="active"><a>Home</a></router-link>
            <router-link :to="{ name: 'topic.new'}" tag="li" active-class="active"><a>Post a topic</a></router-link>

            <router-link :to="{ name: 'auth.signin'}" tag="li" active-class="active" class="pull-right" v-if="!auth.user.authenticated"><a>Sign In</a></router-link>
            <router-link :to="{ name: 'auth.signup'}" tag="li" active-class="active" class="pull-right" v-if="!auth.user.authenticated"><a>Sign Up</a></router-link>
            <li class="pull-right"><a href="#" v-if="auth.user.authenticated">Sign Out</a></li>
            <li class="pull-right"><a href="#" v-if="auth.user.authenticated">Hi {{ auth.user.profile.username }}!</a></li>
          </ul>
        </nav>
      </div>
      <div class="panel-body">
        <router-view></router-view>
      </div>

    </div>



  </div>
</template>

<script>

import auth from './auth/index'

export default {
  data (){
    return {
      auth: auth
    }
  }

}
</script>

<style>

</style>
