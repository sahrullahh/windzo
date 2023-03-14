<template>
  <div class="container lg:max-w-7xl mx-auto text-center mt-40">
    <div class="space-y-8">
      <h1
        class="text-9xl flex justify-center dark:text-white text-gray-800 font-bold"
      >
        <Icon icon="mdi:scheduled-maintenance" />
      </h1>
      <h2 class="text-4xl dark:text-white text-gray-800">
        We will be back, our server is under maintenance
      </h2>
      <p class="dark:text-gray-500 max-w-2xl mx-auto text-gray-800">
        Why is this happening?, Actually we are fixing bugs regularly and
        maintaining the server app, don't worry it won't take long.
      </p>
      <div class="flex gap-5 justify-center">
        <button
          class="bg-white border dark:bg-gray-800 dark:border-gray-700 rounded dark:text-white py-3 px-5"
        >
          Notify me, if ready to use
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    name: "maintenance",
    components: {
      Icon,
    },
  };
</script>
