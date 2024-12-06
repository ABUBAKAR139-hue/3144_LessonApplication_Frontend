<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Passing props and handle updates via events -->
    <SortOptions
      :sortAttribute="sortAttribute"
      :sortOrder="sortOrder"
      @update:sortAttribute="sortAttribute = $event"
      @update:sortOrder="sortOrder = $event" />

    <LessonList :lessons="sortedLessons" @add-to-cart="handleAddToCart" />

    <!-- "View Cart" Button -->
    <div class="view-cart-container flex justify-center mt-8 pb-8">
      <button
        class="view-cart-btn bg-blue-500 text-white py-2 px-4 rounded-md text-lg cursor-pointer transition ease-in-out duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed hover:enabled:bg-blue-700"
        :disabled="cart.length === 0"
        @click="navigateToCart">
        View Shopping Cart
      </button>
    </div>
  </div>
</template>

<script>
import fetchClient from "../api/index";
import LessonList from "../components/LessonList.vue";
import SortOptions from "../components/SortOptions.vue";

export default {
  name: "LessonsPage",
  data() {
    return {
      sortAttribute: "subject",
      sortOrder: "asc",
      lessons: [],
      cart: JSON.parse(localStorage.getItem("cart")) || [],
    };
  },
  components: {
    LessonList,
    SortOptions,
  },
  computed: {
    sortedLessons() {
      const sorted = [...this.lessons];
      sorted.sort((a, b) => {
        let result;
        if (typeof a[this.sortAttribute] === "string") {
          result = a[this.sortAttribute].localeCompare(b[this.sortAttribute]);
        } else {
          result = a[this.sortAttribute] - b[this.sortAttribute];
        }
        return this.sortOrder === "asc" ? result : -result;
      });
      return sorted;
    },
  },
  methods: {
    async fetchLessons() {
      try {
        const lessons = await fetchClient("/lessons");
        this.lessons = lessons;
      } catch (error) {
        console.error("Failed to fetch lessons:", error);
      }
    },
    navigateToCart() {
      this.$router.push({ name: "ShoppingCartPage" });
    },
    handleAddToCart(lesson) {
      if (lesson.spaces > 0) {
        this.cart.push({ ...lesson });
        lesson.spaces--;

        // Save the updated cart to localStorage
        localStorage.setItem("cart", JSON.stringify(this.cart));
      } else {
        console.log("No available spaces left for this lesson.");
      }
    },
  },
  mounted() {
    this.fetchLessons();
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
