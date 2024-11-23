<template>
  <div class="lesson-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <LessonItem
      v-for="lesson in lessons"
      :key="lesson.id"
      :lesson="lesson"
      @add-to-cart="handleAddToCart" />
  </div>
</template>

<script>
import LessonItem from "./LessonItem.vue";

export default {
  name: "LessonList",
  props: {
    lessons: {
      type: Array,
      required: true,
    },
  },
  components: {
    LessonItem,
  },
  methods: {
    handleAddToCart(lesson) {
      this.$emit("add-to-cart", lesson);
    },
  },
};
</script>

<style scoped>
/* Custom styles */
</style>
