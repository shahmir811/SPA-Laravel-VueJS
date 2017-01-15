<template>
  <div>
    <div class="panel panel-default">
      <div class="panel-heading">
        <nav>
          <ul class="list-inline">
            <router-link :to="{ name: 'home'}" tag="li" active-class="active"><a>Home</a></router-link>
            <router-link :to="{ name: 'topic.new'}" tag="li" active-class="active"><a>Post a topic</a></router-link>

            <router-link :to="{ name: 'auth.signin'}" tag="li" active-class="active" class="pull-right"><a>Sign In</a></router-link>
            <router-link :to="{ name: 'auth.signup'}" tag="li" active-class="active" class="pull-right"><a>Sign Up</a></router-link>
            <li class="pull-right"><a href="#">Sign Out</a></li>
            <li class="pull-right"><a href="#">Hello Shahmir</a></li>
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


export default {

}
</script>

<style>

</style>
