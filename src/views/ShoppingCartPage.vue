<template>
  <div class="shopping-cart min-h-screen flex flex-col items-center px-4 pb-6">
    <!-- Confirmation Message after Checkout -->
    <ConfirmationMessage v-if="orderSubmitted" />

    <!-- Main Container for Cart and Checkout -->
    <div
      class="cart-container grid grid-cols-1 lg:grid-cols-12 gap-6 w-full mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Cart Items Section -->
      <div class="cart-items col-span-9">
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
      return this.customerName && this.customerPhone;
    },
  },
  methods: {
    removeFromCart(lesson) {
      this.cart = this.cart.filter((item) => item !== lesson);
      localStorage.setItem("cart", JSON.stringify(this.cart));
    },
    updateCheckoutInfo({ name, phone }) {
      this.customerName = name;
      this.customerPhone = phone;
    },
    checkout() {
      if (this.cart.length === 0) {
        alert("Your cart is empty. Please add items before checking out.");
        return;
      }
      this.orderSubmitted = true;
      localStorage.removeItem("cart");
    },
  },
};
</script>
