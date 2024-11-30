<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold">Confirmation</h1>
    <ConfirmationMessage />
  </div>
</template>

<script>
import ConfirmationMessage from "@/components/ConfirmationMessage.vue";

export default {
  name: "ConfirmationPage",
  components: {
    ConfirmationMessage,
  },
};
</script>
