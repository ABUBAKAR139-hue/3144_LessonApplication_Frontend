<template>
  <div class="lesson-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <LessonItem v-for="lesson in lessons" :key="lesson.id" :lesson="lesson" />
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
};
</script>

<style scoped>
/* Custom styles can be added if needed */
</style>
