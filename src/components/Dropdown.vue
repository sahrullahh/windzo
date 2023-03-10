<template>
  <div class="relative">
    <button
      class="z-10 relative flex items-center focus:outline-none select-none"
      @click="open = true"
    >
      <slot name="button"></slot>
    </button>

    <!-- to close when clicked on space around it-->
    <button
      class="fixed inset-0 h-full w-full cursor-default focus:outline-none"
      v-if="open"
      @click="open = false"
      tabindex="-1"
    ></button>

    <!--dropdown menu-->
    <div
      v-if="placement == 'right'"
      @click="open = false"
    >
      <transition name="fade">
        <div
          @blur="close"
          class="absolute right-0 shadow-lg rounded-md border dark:border-gray-600 w-48 text-sm mt-2 bg-white dark:bg-gray-800 dark:text-white z-50"
          v-show="open"
        >
          <slot name="content"></slot>
        </div>
      </transition>
    </div>
    <div
      v-else
      @click="open = false"
    >
      <transition name="fade">
        <div
          @blur="close"
          class="absolute left-0 shadow-lg rounded-md border dark:border-gray-600 w-48 text-sm mt-2 bg-white dark:bg-gray-800 dark:text-white z-50"
          v-show="open"
        >
          <slot name="content"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        open: false,
      };
    },
    props: {
      placement: String,
      dropdown: Boolean,
    },
    methods: {
      toggle() {
        this.open = !this.open;
      },
    },
    mounted() {},
  };
</script>
