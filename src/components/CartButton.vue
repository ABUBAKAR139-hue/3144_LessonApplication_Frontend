<template>
  <div class="go-back-to-lessons-container flex justify-center mt-8 pb-8">
    <RouterLink to="/">
      <button
        class="go-back-btn bg-blue-500 text-white py-2 px-4 rounded-md text-lg cursor-pointer transition ease-in-out duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed hover:enabled:bg-blue-700">
        Go Back to Lessons
      </button>
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "CartButton",
};
</script>

<style scoped>
/* You can add specific styles for the button here if needed */
</style>
