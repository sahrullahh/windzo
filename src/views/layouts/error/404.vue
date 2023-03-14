<template>
  <div class="container lg:max-w-7xl mx-auto text-center mt-40">
    <div class="space-y-8">
      <h1 class="text-9xl dark:text-white text-gray-800 font-bold">404</h1>
      <h2 class="text-4xl dark:text-white text-gray-800">
        This Page Not Found
      </h2>
      <p class="dark:text-gray-500 text-gray-800">
        Sorry, the page you are looking for
        {{ this.$route.params.pathMatch[0] }} was not found!
      </p>
      <button
        @click="this.$router.push('/')"
        class="bg-primary rounded text-white py-3 px-5"
      >
        Return To Dashboard
      </button>
    </div>
  </div>
</template>
