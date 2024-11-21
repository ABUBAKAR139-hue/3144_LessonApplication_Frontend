<template>
  <div class="confirmation-message">
    <h2 class="text-2xl font-semibold">Thank you for your purchase!</h2>
    <p class="mt-4">
      Your order has been confirmed. We'll send a confirmation email soon.
    </p>
    <p class="mt-2">
      You can go back to the <router-link to="/">Lessons Page</router-link> to
      explore more lessons or return to the
      <router-link to="/cart">Cart</router-link> to continue shopping.
    </p>
  </div>
</template>

<script>
export default {
  name: "ConfirmationMessage",
};
</script>

<style scoped>
.confirmation-message {
  text-align: center;
  padding: 20px;
  background-color: #f0f4f8;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2d3748;
}

p {
  color: #4a5568;
}
</style>
