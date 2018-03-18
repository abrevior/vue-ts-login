<template>
  <div id="signup">
    <h1>Sign Up for Free</h1>

    <form>

      <div class="top-row">
        <div class="field-wrap">
          <label :class="firstNameClass">
            First Name
            <span class="req">*</span>
          </label>
          <input
            type="text"
            required
            autocomplete="off"
            v-model="firstName"
            @focus="toggle('firstName')"
            @blur="toggle('firstName')"
          />
        </div>

        <div class="field-wrap">
          <label :class="lastNameClass">
            Last Name
            <span class="req">*</span>
          </label>
          <input
            type="text"
            required
            autocomplete="off"
            v-model="lastName"
            @focus="toggle('lastName')"
            @blur="toggle('lastName')"
          />
        </div>
      </div>

      <div class="field-wrap">
        <label :class="emailClass">
          Email Address
          <span class="req">*</span>
        </label>
        <input
          type="email"
          required
          autocomplete="off"
          v-model="email"
          @focus="toggle('email')"
          @blur="toggle('email')"
        />
      </div>

      <div class="field-wrap">
        <label :class="passwordClass">
          Set A Password
          <span class="req">*</span>
        </label>
        <input
          type="password"
          required
          autocomplete="off"
          v-model="password"
          @focus="toggle('password')"
          @blur="toggle('password')"
        />
      </div>

      <button @click="signUp" class="button button-block">Get Started</button>

    </form>

  </div>
</template>
<script lang="ts" src="./Signup.ts"></script>
<style>

</style>
