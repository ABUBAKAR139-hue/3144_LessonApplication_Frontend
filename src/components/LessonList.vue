<template>
  <div class="lesson-list">
    <h2 class="text-2xl font-semibold mb-4">Available Lessons</h2>
    <div v-if="lessons.length === 0" class="text-gray-500">
      No lessons available.
    </div>
    <div v-else>
      <ul>
        <li
          v-for="(lesson, index) in lessons"
          :key="index"
          class="flex justify-between items-center mb-4">
          <span>{{ lesson.title }}</span>
          <span>{{ lesson.price | currency }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LessonList",
  props: {
    lessons: {
      type: Array,
      required: true,
    },
  },
  filters: {
    currency(value) {
      return "£" + value.toFixed(2);
    },
  },
};
</script>

<style scoped>
.lesson-list {
  padding: 20px;
  background-color: #f9fafb;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
