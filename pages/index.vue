<template>
  <div class="w-full">
    <v-spacer class="h-75" />

    <div class="d-flex justify-center flex-grow-1">
      <pricing />
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
  height: 75px;
}
</style>
