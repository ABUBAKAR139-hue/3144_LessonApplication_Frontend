<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold">Confirmation</h1>
    <ConfirmationMessage />
    <!-- Include the ConfirmationMessage component -->
  </div>
</template>

<script>
import ConfirmationMessage from "@/components/ConfirmationMessage.vue"; // Import the ConfirmationMessage component

export default {
  name: "ConfirmationPage",
  components: {
    ConfirmationMessage,
  },
};
</script>
