<template>
  <div class="shopping-cart min-h-screen flex flex-col items-center px-4 pb-6">
    <!-- Confirmation Message after Checkout -->
    <ConfirmationMessage v-if="orderSubmitted" />

    <!-- Main Container for Cart and Checkout -->
    <div
      class="cart-container grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cart Items Section -->
      <div class="cart-items col-span-9">
        <!-- Shopping Cart Title -->
        <h1 class="text-2xl font-semibold mb-6 pl-4">Shopping Cart</h1>
        <CartList :cart="cart" @remove="removeFromCart" />
        <p
          v-if="cart.length === 0"
          class="text-center text-lg text-gray-500 mt-4">
          Your cart is empty.
        </p>
        <CartButton />
      </div>

      <!-- Checkout Form Section -->
      <div class="checkout-form col-span-3 flex flex-col h-full">
        <!-- Checkout Title -->
        <h1 class="text-2xl font-semibold mb-4 pl-2">Checkout</h1>

        <div class="bg-white p-4 rounded-lg shadow">
          <!-- Form Content -->
          <div class="flex-grow w-full overflow-y-auto">
            <CheckoutForm @update-info="updateCheckoutInfo" />
          </div>
        </div>

        <!-- Checkout Button -->
        <button
          :disabled="!isCheckoutEnabled"
          class="mt-4 w-full py-2 bg-green-500 text-white rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed"
          @click="checkout">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "../components/CartList.vue";
import CartButton from "../components/CartButton.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
import ConfirmationMessage from "../components/ConfirmationMessage.vue";

export default {
  name: "ShoppingCartPage",
  components: {
    CartList,
    CartButton,
    CheckoutForm,
    ConfirmationMessage,
  },
  data() {
    return {
      cart: JSON.parse(localStorage.getItem("cart")) || [],
      customerName: "",
      customerPhone: "",
      orderSubmitted: false,
    };
  },
  computed: {
    isCheckoutEnabled() {
      // Enable button only if both fields are valid
      return this.customerName && this.customerPhone;
    },
  },
  methods: {
    // Remove item from the cart
    removeFromCart(lesson) {
      this.cart = this.cart.filter((item) => item !== lesson);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    // Update customer information from the checkout form
    updateCheckoutInfo({ name, phone }) {
      this.customerName = name;
      this.customerPhone = phone;
    },

    // Handle the checkout process
    checkout() {
      if (this.cart.length === 0) {
        // If the cart is empty, show a message or do not proceed with checkout
        alert("Your cart is empty. Please add items before checking out.");
        return;
      }

      // Mark the order as submitted
      this.orderSubmitted = true;

      // Clear the cart after successful checkout
      localStorage.removeItem("cart");

      // You can add any further post-order logic here (e.g., sending data to a server, etc.)
    },
  },
};
</script>

<style scoped>
/* You can add specific styles here for the ShoppingCartPage */
</style>
