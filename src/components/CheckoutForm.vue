<template>
  <div class="checkout-form">
    <h2 class="text-2xl font-semibold">Checkout</h2>
    <form @submit.prevent="submitForm" class="mt-4">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Full Name</label
        >
        <input
          type="text"
          id="name"
          v-model="name"
          required
          class="mt-1 p-2 border border-gray-300 rounded" />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700"
          >Email Address</label
        >
        <input
          type="email"
          id="email"
          v-model="email"
          required
          class="mt-1 p-2 border border-gray-300 rounded" />
      </div>

      <div class="mb-4">
        <label for="address" class="block text-sm font-medium text-gray-700"
          >Shipping Address</label
        >
        <input
          type="text"
          id="address"
          v-model="address"
          required
          class="mt-1 p-2 border border-gray-300 rounded" />
      </div>

      <button
        type="submit"
        class="mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
        Submit Order
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      name: "",
      email: "",
      address: "",
    };
  },
  methods: {
    submitForm() {
      // Logic to handle form submission, e.g., send the data to a server
      console.log("Form Submitted", {
        name: this.name,
        email: this.email,
        address: this.address,
      });
    },
  },
};
</script>

<style scoped>
.checkout-form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

button {
  width: 100%;
  cursor: pointer;
}
</style>
