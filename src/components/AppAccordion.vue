<template>
  <button
    @click="toggleAccordion()"
    class="text-gray-800 dark:text-gray-500 transition-all bg-transparent border dark:border-gray-700 dark:hover:bg-gray-700 hover:bg-gray-200 w-full flex text-left rounded-md box-border p-3"
    :aria-expanded="isOpen"
    :aria-controls="`collapse${uid}`"
    :class="{
      'bg-gray-200 dark:bg-gray-700': isOpen,
      'bg-transparent': !isOpen,
    }"
  >
    <!-- icon accordion -->
    <span class="mr-3 text-xl">
      <slot name="icon"></slot>
    </span>
    <!-- title accordion -->
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
    :id="uid"
    class="p-3 mt-2 bg-gray-100 dark:bg-gray-700"
  >
    <slot name="content" />
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  let _uid = 0;

  export default {
    data() {
      _uid += 1;
      return {
        isOpen: false,
        uid: `collapse${_uid}`,
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
