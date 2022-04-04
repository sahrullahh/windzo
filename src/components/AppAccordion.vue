<template>
  <button
    @click="toggleAccordion()"
    class="text-gray-800 dark:text-gray-500 bg-transparent border dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 w-full flex text-left rounded-md box-border p-3"
    :aria-expanded="isOpen"
    :aria-controls="`collapse${_uid}`"
    :class="{
      'bg-gray-200 dark:bg-gray-700': isOpen,
      'bg-transparent': !isOpen,
    }"
  >
    <span class="mr-3 text-xl">
      <slot name="icon"></slot>
    </span>
    <span class="w-full">
      <slot name="title" />
    </span>
    <span
      class="box-border mt-1 text-gray-500 dark:text-gray-600"
      :class="{
        'rotate-180': isOpen,
        'rotate-0': !isOpen,
      }"
    >
      <span class="float-right">
        <Icon icon="fa6-solid:angle-down" />
      </span>
    </span>
  </button>

  <div
    v-show="isOpen"
    :id="`collapse${_uid}`"
    class="p-3 mt-2 bg-gray-100 dark:bg-gray-700"
  >
    <slot name="content" />
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    data() {
      return {
        isOpen: false,
      };
    },

    methods: {
      toggleAccordion() {
        this.isOpen = !this.isOpen;
      },
    },
    components: {
      Icon,
    },
  };
</script>
