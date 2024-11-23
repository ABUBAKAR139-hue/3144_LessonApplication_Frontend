<template>
  <div class="sort-options">
    <label>
      <span class="font-semibold">Sort By:</span>
      <select
        :value="sortAttribute"
        @input="$emit('update:sortAttribute', $event.target.value)"
        class="ml-2 p-2 border rounded">
        <option value="subject">Subject</option>
        <option value="location">Location</option>
        <option value="price">Price</option>
        <option value="spaces">Spaces</option>
      </select>
    </label>

    <label class="ml-4">
      <span class="font-semibold">Order:</span>
      <select
        :value="sortOrder"
        @input="$emit('update:sortOrder', $event.target.value)"
        class="ml-2 p-2 border rounded">
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
.sort-options {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}
</style>
