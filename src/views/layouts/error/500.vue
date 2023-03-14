<template>
  <div class="container lg:max-w-7xl mx-auto text-center mt-40">
    <div class="space-y-8">
      <h1 class="text-9xl dark:text-white text-gray-800 font-bold">500</h1>
      <h2 class="text-4xl dark:text-white text-gray-800">
        Internal Server Error
      </h2>
      <p class="dark:text-gray-500 max-w-2xl mx-auto text-gray-800">
        Upps, Internal server error, this may occur because your hosting service
        has experienced a response failure
      </p>
      <div class="flex gap-5 justify-center">
        <button
          @click="
            directTo(
              'https://www.google.com/search?q=internal server error 500'
            )
          "
          class="bg-primary rounded text-white py-3 px-5"
        >
          How to fix this?
        </button>
        <button
          @click="directTo('')"
          class="bg-white border dark:bg-gray-800 dark:border-gray-700 rounded dark:text-white py-3 px-5"
        >
          Try Reload
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      directTo(links) {
        window.location.href = links;
      },
    },
  };
</script>
