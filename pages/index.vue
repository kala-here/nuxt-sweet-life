<template>
  <div>
    <v-spacer class="h-75" />

    <div class="d-flex justify-center flex-grow-1">
      <pricing />
      <div class="bg-texture" />
    </div>
  </div>
</template>

<script>
import Pricing from '../components/Pricing.vue';
export default {
  name: 'Home',
  components: { Pricing },
};
</script>
<style>
.h-75 {
  height: 150px;
}
</style>
