<template>
  <div class="w-full max-w-md mx-auto bg-white py-6">
    <h1 class="text-gray-800 font-bold text-xl pb-4">
      Enter your details to continue
    </h1>
    <form @submit.prevent="validateInputs" class="flex flex-col gap-4">
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">
          Name:
        </label>
        <input
          id="name"
          type="text"
          v-model="name"
          @input="validateName"
          :class="[
            'mt-1 block w-full p-2 border rounded-md',
            nameError
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
          ]"
          placeholder="Enter your name" />
        <p v-if="nameError" class="mt-1 text-sm text-red-500">
          Name must contain letters only.
        </p>
      </div>

      <!-- Phone Field -->
      <div>
        <label for="phone" class="block text-sm font-medium text-gray-700">
          Phone:
        </label>
        <input
          id="phone"
          type="text"
          v-model="phone"
          @input="validatePhone"
          :class="[
            'mt-1 block w-full p-2 border rounded-md',
            phoneError
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
          ]"
          placeholder="Enter your phone number" />
        <p v-if="phoneError" class="mt-1 text-sm text-red-500">
          Phone must contain numbers only.
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CheckoutForm",
  data() {
    return {
      name: "",
      phone: "",
      nameError: false,
      phoneError: false,
    };
  },
  methods: {
    validateName() {
      const nameRegex = /^[a-zA-Z\s]*$/;
      this.nameError = !nameRegex.test(this.name);
      this.emitInfo();
    },
    validatePhone() {
      const phoneRegex = /^[0-9]+$/;
      this.phoneError = !phoneRegex.test(this.phone);
      this.emitInfo();
    },
    emitInfo() {
      if (!this.nameError && !this.phoneError) {
        this.$emit("update-info", { name: this.name, phone: this.phone });
      } else {
        this.$emit("update-info", { name: "", phone: "" });
      }
    },
  },
};
</script>

<style scoped>
/* No custom styles needed as Tailwind is being used */
</style>
