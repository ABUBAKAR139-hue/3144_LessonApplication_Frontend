<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold">Available Lessons</h1>
    <LessonList />
    <!-- Include the LessonList component -->
  </div>
</template>

<script>
import LessonList from "@/components/LessonList.vue"; // Import the LessonList component

export default {
  name: "LessonsPage",
  components: {
    LessonList,
  },
};
</script>
