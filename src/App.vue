<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-blue-600 text-white py-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Navigation -->
        <nav
          class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blueGray-500 mb-3">
          <div
            class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div
              class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <h1
                class="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">
                Lessons Application
              </h1>

              <button
                class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                @click="toggleNavbar"
                :aria-expanded="showMenu ? 'true' : 'false'"
                aria-label="Toggle Navigation">
                <i class="fas fa-bars text-2xl"></i>
              </button>
            </div>

            <div
              :class="{ hidden: !showMenu, flex: showMenu }"
              class="lg:flex lg:flex-grow items-center">
              <ul class="flex flex-col lg:flex-row list-none ml-auto">
                <li class="nav-item">
                  <RouterLink
                    to="/"
                    class="px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug text-white hover:opacity-75">
                    Lessons
                  </RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink
                    to="/cart"
                    class="px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug text-white hover:opacity-75">
                    Shopping Cart
                  </RouterLink>
                </li>
                <!-- <li class="nav-item">
                  <RouterLink
                    to="/confirmation"
                    class="px-3 py-2 flex items-center text-sm uppercase font-semibold leading-snug text-white hover:opacity-75">
                    Confirmation
                  </RouterLink>
                </li> -->
              </ul>
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
// import "font-awesome/css/font-awesome.min.css";

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
