<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold">Shopping Cart</h1>
    <CartList />
    <!-- Include the CartList component -->
    <CheckoutForm />
    <!-- Include the CheckoutForm component -->
  </div>
</template>

<script>
import CartList from "@/components/CartList.vue"; // Import the CartList component
import CheckoutForm from "@/components/CheckoutForm.vue"; // Import the CheckoutForm component

export default {
  name: "ShoppingCartPage",
  components: {
    CartList,
    CheckoutForm,
  },
};
</script>
