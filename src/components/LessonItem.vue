<template>
  <div
    class="lesson-item bg-white rounded-md shadow-md transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col items-start">
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
import { toast } from "vue3-toastify";

export default {
  name: "LessonItem",
  props: {
    lesson: {
      type: Object,
      required: true,
      validator(value) {
        return (
          value &&
          value.subject &&
          value.location &&
          value.price &&
          value.spaces &&
          value.image
        );
      },
    },
  },
  methods: {
    getImageUrl(imagePath) {
      const baseUrl = "https://three144-lessonapplication-backend.onrender.com";
      return `${baseUrl}${imagePath}`;
    },
    onImageError(event) {
      event.target.src = "art.jpg";
    },
    addToCart() {
      if (this.lesson.spaces > 0) {
        // Emit the event to the parent component to update the cart and spaces
        this.$emit("add-to-cart", this.lesson);

        // Show a success toast message
        toast.success(`${this.lesson.subject} has been added to your cart!`, {
          position: "top-right",
          autoClose: 3000,
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
