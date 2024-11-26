<template>
  <div class="sort-options flex items-center space-x-4 mb-6">
    <label class="flex items-center">
      <span class="font-semibold">Sort By:</span>
      <select
        :value="sortAttribute"
        @input="$emit('update:sortAttribute', $event.target.value)"
        class="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="subject">Subject</option>
        <option value="location">Location</option>
        <option value="price">Price</option>
        <option value="spaces">Spaces</option>
      </select>
    </label>

    <label class="flex items-center">
      <span class="font-semibold">Order:</span>
      <select
        :value="sortOrder"
        @input="$emit('update:sortOrder', $event.target.value)"
        class="ml-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </label>
  </div>
</template>

<script>
export default {
  name: "SortOptions",
  props: {
    sortAttribute: {
      type: String,
      required: true,
    },
    sortOrder: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* The custom CSS is no longer needed because we replaced it with Tailwind CSS */
</style>
