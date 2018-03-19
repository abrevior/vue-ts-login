<template>
  <div class="field-wrap">
    <label :class="fieldClass">
      {{label}}
      <span v-if="isRequired" class="req">*</span>
    </label>
    <input
      v-bind:type="type"
      @focus="toggle"
      @blur="toggle"
      v-model="value"
      required
      autocomplete="off"
    />
  </div>
</template>
<script lang="ts" src="./Input.component.ts">
</script>
<style>

</style>
