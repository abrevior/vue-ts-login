<template>
  <div id="signup">
    <h1>Sign Up for Free</h1>
    <form>
      <div class="top-row">
        <input-component
          v-model="firstName"
          :type="'text'"
          :label="'First Name'"
          :isRequired="true"
        />
        <input-component
          v-model="lastName"
          :type="'text'"
          :label="'Last Name'"
          :isRequired="true"
        />
      </div>
      <input-component
        v-model="email"
        :type="'email'"
        :label="'Email Address'"
        :isRequired="true"
      />
      <input-component
        v-model="password"
        :type="'password'"
        :label="'Set a password'"
        :isRequired="true"
      />
      <button @click="signUp" class="button button-block">Get Started</button>
    </form>
  </div>
</template>
<script lang="ts" src="./Signup.ts"></script>
<style>

</style>
