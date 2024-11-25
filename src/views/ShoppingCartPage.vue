<template>
  <div class="shopping-cart min-h-screen flex flex-col">
    <!-- Shopping Cart Title -->
    <h1 class="cart-title text-center my-8 text-2xl font-bold">
      Shopping Cart
    </h1>

    <!-- List of Cart Items -->
    <CartList :cart="cart" @remove="removeFromCart" />

    <!-- Empty Cart Message -->
    <p v-if="cart.length === 0" class="text-center text-lg text-gray-500 mt-8">
      Your cart is empty.
    </p>

    <!-- Go Back to Lessons Button -->
    <CartButton />
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";
import CartButton from "../components/CartButton.vue";

export default {
  name: "ShoppingCartPage",
  components: {
    CartList,
    CartButton,
  },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  methods: {
    removeFromCart(lesson) {
      const updatedCart = this.cart.filter(
        (item) => item.id !== lesson.id || item !== lesson
      );

      // Update the cart and localStorage
      this.cart = updatedCart;
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    },
  },
};
</script>

<style scoped>
/* You can add specific styles here for the ShoppingCartPage */
</style>
