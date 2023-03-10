<template>
  <!-- Search component dropdown with name of type, press Ctrl + F -->

  <div class="card-page lg:h-screen h-auto p-3">
    <nav
      class="flex"
      aria-label="Breadcrumb"
    >
      <ol class="inline-flex items-center space-x-1 md:space-x-3">
        <li class="inline-flex items-center">
          <a
            href="#"
            class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              class="mr-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              ></path>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a
              href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >Components</a
            >
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <svg
              class="w-6 h-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a
              href="#"
              class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
              >Dropdown</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Dropdown
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Show the location of the current page in a hierarchical structure using
        the Tailwind CSS breadcrumb components
      </p>
    </div>
    <div class="w-full mt-10 grid grid-cols-1 gap-5">
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 bpx"
      >
        <h2 class="dark:text-gray-200">Dropdown default</h2>
        <div class="wrapper-dropdown flex gap-4 w-full box-border mt-4">
          <dropdown placement="left">
            <template v-slot:button>
              <button class="flex px-5 py-3 rounded-md bg-primary text-white">
                Dropdown
                <span class="ml-5 mt-1"
                  ><Icon icon="ant-design:caret-down-filled"
                /></span>
              </button>
            </template>
            <template v-slot:content>
              <div class="">
                <a
                  href="#"
                  class="block hover:bg-primary hover:text-white px-4 py-2"
                  >Action 1</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 2</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 3</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 4</a
                >
              </div>
            </template>
          </dropdown>
          <dropdown placement="left">
            <template v-slot:button>
              <button
                class="flex px-5 py-3 rounded-md bg-transparent text-gray-500 border border-gray-300 dark:border-gray-500"
              >
                Light
                <span class="ml-5 mt-1"
                  ><Icon icon="ant-design:caret-down-filled"
                /></span>
              </button>
            </template>
            <template v-slot:content>
              <div class="">
                <a
                  href="#"
                  class="block hover:bg-primary hover:text-white px-4 py-2"
                  >Action 1</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 2</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 3</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 4</a
                >
              </div>
            </template>
          </dropdown>
          <dropdown placement="left">
            <template v-slot:button>
              <button
                class="flex px-5 py-3 rounded-md bg-transparent text-gray-500"
              >
                Blank
                <span class="ml-5 mt-1"
                  ><Icon icon="ant-design:caret-down-filled"
                /></span>
              </button>
            </template>
            <template v-slot:content>
              <div class="">
                <a
                  href="#"
                  class="block hover:bg-primary hover:text-white px-4 py-2"
                  >Action 1</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 2</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 3</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 4</a
                >
              </div>
            </template>
          </dropdown>
        </div>
      </div>
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700 bpx"
      >
        <h2 class="dark:text-gray-200">Dropdown Icon</h2>
        <div class="wrapper-dropdown flex gap-4 w-full box-border mt-4">
          <dropdown placement="left">
            <template v-slot:button>
              <button class="flex px-5 py-3 rounded-md bg-primary text-white">
                <span class="mr-3 mt-1"
                  ><Icon icon="ci:settings-filled"
                /></span>
                Settings
              </button>
            </template>
            <template v-slot:content>
              <div class="">
                <a
                  href="#"
                  class="block hover:bg-primary hover:text-white px-4 py-2"
                  >Action 1</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 2</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 3</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 4</a
                >
              </div>
            </template>
          </dropdown>
          <dropdown placement="left">
            <template v-slot:button>
              <button
                class="flex px-5 py-3 rounded-md bg-transparent text-gray-500 border border-gray-300 dark:border-gray-500"
              >
                <span class="mr-3 mt-1"><Icon icon="cil:smile" /></span>
                Smile
              </button>
            </template>
            <template v-slot:content>
              <div class="">
                <a
                  href="#"
                  class="block hover:bg-primary hover:text-white px-4 py-2"
                  >Action 1</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 2</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 3</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 4</a
                >
              </div>
            </template>
          </dropdown>
          <dropdown placement="left">
            <template v-slot:button>
              <button
                class="flex px-5 py-3 rounded-md bg-transparent text-gray-500"
              >
                Blank
                <span class="ml-5 mt-1"
                  ><Icon icon="ant-design:caret-down-filled"
                /></span>
              </button>
            </template>
            <template v-slot:content>
              <div class="">
                <a
                  href="#"
                  class="block hover:bg-primary hover:text-white px-4 py-2"
                  >Action 1</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 2</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 3</a
                >
                <a
                  href="#"
                  class="block mt-4 hover:bg-primary hover:text-white px-4 py-2"
                  >Action 4</a
                >
              </div>
            </template>
          </dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Icon } from "@iconify/vue";
  import Dropdown from "../../components/Dropdown.vue";
  export default {
    components: {
      Dropdown,
      Icon,
    },
    methods: {
      alert() {
        alert("Hello");
      },
    },
  };
</script>
