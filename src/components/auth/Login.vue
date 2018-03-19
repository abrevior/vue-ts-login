<template>
  <div id="login">
    <h1>Welcome Back!</h1>
    <form>
      <input-component
        v-model="email"
        :type="'email'"
        :label="'Email Address'"
        :isRequired="true"
      />
      <input-component
        v-model="password"
        :type="'password'"
        :label="'Password'"
        :isRequired="true"
      />
      <p class="forgot">
        <a href="#">Forgot Password?</a>
      </p>
      <button @click="logIn" class="button button-block">Log In</button>
    </form>
  </div>
</template>
<script lang="ts" src="./Login.ts"></script>
<style>

</style>
