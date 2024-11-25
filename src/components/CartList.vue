<template>
  <div
    class="lesson-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
    <CartItem
      v-for="lesson in cart"
      :key="lesson.id"
      :lesson="lesson"
      @remove="removeFromCart" />
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  name: "CartList",
  components: {
    CartItem,
  },
  props: {
    cart: Array, // Pass cart data from parent
  },
  methods: {
    removeFromCart(lesson) {
      this.$emit("remove", lesson); // Emit removal to the parent component
    },
  },
};
</script>
