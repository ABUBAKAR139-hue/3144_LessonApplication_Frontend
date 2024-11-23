<template>
  <div
    class="lesson-item bg-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col items-start">
    <!-- Lesson Image -->
    <img
      :src="lesson.image"
      @error="onImageError"
      alt="Lesson Image"
      class="w-full h-40 object-cover rounded-t-md" />
    <!-- Lesson Details -->
    <div class="p-4 w-full">
      <h2 class="text-xl font-semibold mb-2">Subject: {{ lesson.subject }}</h2>
      <p class="text-gray-700">Location: {{ lesson.location }}</p>
      <p class="text-gray-700">Price: £{{ lesson.price }}</p>
      <p class="text-gray-700">Available Spaces: {{ lesson.spaces }}</p>
      <button
        :disabled="lesson.spaces === 0"
        @click="addToCart"
        class="bg-blue-600 hover:bg-blue-700 w-full text-white px-4 py-2 mt-4 rounded disabled:opacity-50 disabled:cursor-not-allowed">
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify"; // Import the toast function

export default {
  name: "LessonItem",
  props: {
    lesson: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onImageError(event) {
      event.target.src = "art.jpg";
    },
    addToCart() {
      if (this.lesson.spaces > 0) {
        // Decrease the space count when added to cart
        this.lesson.spaces--;
        this.$emit("add-to-cart", this.lesson);

        // Show a success toast message
        toast.success(`${this.lesson.subject} has been added to your cart!`, {
          position: "top-right", // You can adjust the position
          autoClose: 3000, // Time in ms for auto close
        });
      } else {
        // Show a warning toast message if no spaces are available
        toast.error(
          `Sorry, no more spaces available for ${this.lesson.subject}.`,
          {
            position: "top-right",
            autoClose: 3000,
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.lesson-item {
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}
button {
  transition: background-color 0.2s ease-in-out;
}
</style>
