<template>
  <div id="login">
    <h1>Welcome Back!</h1>
    <form>
      <div class="field-wrap">
        <label :class="emailClass">
          Email Address
          <span class="req">*</span>
        </label>
        <input
          type="email"
          @focus="toggle('email')"
          @blur="toggle('email')"
          v-model="email"
          required
          autocomplete="off"
        />
      </div>
      <div class="field-wrap">
        <label :class="passwordClass">
          Password
          <span class="req">*</span>
        </label>
        <input
          type="password"
          @focus="toggle('password')"
          @blur="toggle('password')"
          v-model="password"
          required
          autocomplete="off"
        />
      </div>
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
