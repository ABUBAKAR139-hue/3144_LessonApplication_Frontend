<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-blue-600 text-white py-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Navigation -->
        <nav
          class="relative flex flex-wrap items-center justify-between px-2 bg-blueGray-500">
          <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <RouterLink to="/">
                <h2
                  class="text-xl font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
                  Lessons Application
                </h2>
              </RouterLink>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <!-- Main Content Section -->
    <main class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <router-view></router-view>
        <!-- Dynamic component loading -->
      </div>
    </main>

    <!-- Footer Section -->
    <footer class="bg-gray-800 text-white text-center py-4">
      <p class="text-sm">© 2024 Lesson Application. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import "vue3-toastify/dist/index.css";

export default {
  name: "App",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
