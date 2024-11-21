<template>
  <div class="cart-list">
    <h2 class="text-2xl font-semibold mb-4">Your Cart</h2>
    <div v-if="cartItems.length === 0" class="text-gray-500">
      Your cart is empty.
    </div>
    <div v-else>
      <ul>
        <li
          v-for="(item, index) in cartItems"
          :key="index"
          class="flex justify-between items-center mb-4">
          <span>{{ item.name }}</span>
          <span>{{ item.price | currency }}</span>
        </li>
      </ul>
      <div class="mt-4">
        <span class="font-semibold">Total: </span>
        <span class="text-lg">{{ totalPrice | currency }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartList",
  props: {
    cartItems: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    },
  },
  filters: {
    currency(value) {
      return "$" + value.toFixed(2);
    },
  },
};
</script>

<style scoped>
.cart-list {
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
