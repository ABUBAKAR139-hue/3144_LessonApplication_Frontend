<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-blue-600 text-white py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-semibold">Lesson Application</h1>
        <p class="text-xl mt-2">Your Learning and Shopping Cart</p>

        <!-- Navigation links -->
        <nav class="mt-4">
          <ul class="flex space-x-6">
            <li>
              <router-link to="/" class="text-white hover:text-blue-300"
                >Lessons</router-link
              >
            </li>
            <li>
              <router-link to="/cart" class="text-white hover:text-blue-300"
                >Shopping Cart</router-link
              >
            </li>
            <li>
              <router-link
                to="/confirmation"
                class="text-white hover:text-blue-300"
                >Confirmation</router-link
              >
            </li>
          </ul>
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
export default {
  name: "App",
};
</script>
