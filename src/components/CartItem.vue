<template>
  <div
    class="cart-item bg-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col items-start">
    <!-- Lesson Image -->
    <img
      :src="getImageUrl(lesson.image)"
      @error="onImageError"
      alt="Lesson Image"
      class="w-full h-40 object-cover rounded-t-md" />

    <!-- Lesson Details -->
    <div class="p-4 w-full flex flex-col justify-between flex-grow">
      <h2 class="text-xl font-semibold mb-2">Subject: {{ lesson.subject }}</h2>
      <p class="text-gray-700">Location: {{ lesson.location }}</p>
      <p class="text-gray-700">Price: £{{ lesson.price }}</p>
      <p class="text-gray-700">Available Spaces: {{ lesson.spaces }}</p>

      <!-- Remove Button -->
      <button
        @click="removeFromCart"
        class="remove-btn bg-red-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-red-600">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    lesson: Object,
  },
  methods: {
    getImageUrl(imagePath) {
      const baseUrl = "http://localhost:5000"; // Define your base URL
      return `${baseUrl}${imagePath}`; // Combine base URL with image path
    },
    onImageError(event) {
      event.target.src = "default-image.jpg";
    },
    removeFromCart() {
      this.$emit("remove", this.lesson); // Emit event to the parent to handle the removal
    },
  },
};
</script>

<style scoped>
.cart-item {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

button {
  transition: background-color 0.2s ease-in-out;
}
</style>
