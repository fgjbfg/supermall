<template>
  <div class="check-button">
    <img src="@/assets/images/cart/chosen.png" v-show="checked">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    checked: {
      Boolean,
      default() {
        return true;
      }
    }
  }
}
</script>

<style scoped>

</style>