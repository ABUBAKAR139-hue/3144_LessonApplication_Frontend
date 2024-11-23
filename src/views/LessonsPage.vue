<template>
  <div>
    <!-- Passing props and handle updates via events -->
    <SortOptions
      :sortAttribute="sortAttribute"
      :sortOrder="sortOrder"
      @update:sortAttribute="sortAttribute = $event"
      @update:sortOrder="sortOrder = $event" />

    <LessonList :lessons="sortedLessons" />
  </div>
</template>

<script>
import LessonList from "../components/LessonList.vue";
import SortOptions from "../components/SortOptions.vue";

export default {
  name: "LessonsPage",
  data() {
    return {
      sortAttribute: "subject", // Default sort attribute
      sortOrder: "asc", // Default sort order
      lessons: [
        {
          id: 1,
          subject: "Psychology",
          location: "London",
          price: 20,
          spaces: 5,
          image: "/images/Psychology.jpg",
        },
        {
          id: 2,
          subject: "Art",
          location: "Bristol",
          price: 15,
          spaces: 5,
          image: "/images/art.jpg",
        },
        {
          id: 3,
          subject: "Biology",
          location: "Manchester",
          price: 10,
          spaces: 5,
          image: "/images/biology.jpg",
        },
        {
          id: 4,
          subject: "Chemistry",
          location: "Liverpool",
          price: 18,
          spaces: 5,
          image: "/images/chemistry.jpg",
        },
        {
          id: 5,
          subject: "Computer Science",
          location: "Oxford",
          price: 25,
          spaces: 5,
          image: "/images/computer.jpg",
        },
        {
          id: 6,
          subject: "Economics",
          location: "Cambridge",
          price: 22,
          spaces: 5,
          image: "/images/economics.jpg",
        },
        {
          id: 7,
          subject: "Engineering",
          location: "Edinburgh",
          price: 27,
          spaces: 5,
          image: "/images/engineering.jpg",
        },
        {
          id: 8,
          subject: "English",
          location: "Leeds",
          price: 15,
          spaces: 5,
          image: "/images/english.jpg",
        },
        {
          id: 9,
          subject: "French",
          location: "Glasgow",
          price: 19,
          spaces: 5,
          image: "/images/french.jpg",
        },
        {
          id: 10,
          subject: "Geography",
          location: "Birmingham",
          price: 24,
          spaces: 5,
          image: "/images/geography.jpg",
        },
        {
          id: 11,
          subject: "History",
          location: "London",
          price: 20,
          spaces: 5,
          image: "/images/history.jpg",
        },
        {
          id: 12,
          subject: "Law",
          location: "Manchester",
          price: 30,
          spaces: 5,
          image: "/images/law.jpg",
        },
        {
          id: 13,
          subject: "Mathematics",
          location: "Cambridge",
          price: 22,
          spaces: 5,
          image: "/images/mathematics.jpg",
        },
        {
          id: 14,
          subject: "Music",
          location: "Liverpool",
          price: 30,
          spaces: 5,
          image: "/images/music.jpg",
        },
        {
          id: 15,
          subject: "Philosophy",
          location: "Oxford",
          price: 18,
          spaces: 5,
          image: "/images/philosophy.jpg",
        },
        {
          id: 16,
          subject: "Physical Education",
          location: "Edinburgh",
          price: 15,
          spaces: 5,
          image: "/images/physicaleducation.jpg",
        },
        {
          id: 17,
          subject: "Physics",
          location: "Bristol",
          price: 20,
          spaces: 5,
          image: "/images/physics.jpg",
        },
      ],
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
};
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 2rem;
}
</style>
