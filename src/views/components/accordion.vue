<template>
  <!-- Search component Accordion with name of type,  press Ctrl + F -->

  <div class="accordion h-auto p-3">
    <nav class="flex" aria-label="Breadcrumb">
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
              >Accordion</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Accordion
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        Accordion use for vertically stacked content that with a click on a
        heading or down arrow, expands to show rolled up content.
      </p>
    </div>

    <div class="grid lg:grid-cols-1 grid-col-1 gap-4 mt-5">
      <!-- default alert  -->
      <div
        class="card col-span-1 grid grid-cols-1 gap-5 bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow"
      >
        <div class="accordion-packed">
          <h2 class="font-semibold dark:text-gray-200">Accordion Default</h2>
          <div class="wrapper mt-5">
            <!-- copy this component  -->
            <app-accordion>
              <template v-slot:title> Click me to open</template>
              <template v-slot:content>
                <p>
                  <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing
                  elit. Quia, porro. Non a excepturi, voluptatibus ipsam magnam,
                  eligendi, accusantium ipsa quae quis praesentium voluptate
                  saepe ullam sint ea itaque consectetur impedit?
                </p>
              </template>
            </app-accordion>
            <!-- end copy -->
          </div>
        </div>
        <div class="accordion-packed">
          <h2 class="font-semibold dark:text-gray-200">Accordion With icon</h2>
          <p class="mt-1 dark:text-gray-200">
            you can add
            <span class="bg-gray-200 text-red-500"> v-slot:icon </span>
            above the title slot and add icon inside slot with element
            <a
              href="https://icon-sets.iconify.design/"
              class="underline hover:text-blue-800"
              target="_blank"
              >Iconify.</a
            >
          </p>
          <div class="wrapper mt-5">
            <!-- copy this component  -->
            <app-accordion>
              <template v-slot:icon>
                <Icon icon="akar-icons:link-out" />
              </template>
              <template v-slot:title> Click me to open</template>
              <template v-slot:content>
                <p>
                  <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing
                  elit. Quia, porro. Non a excepturi, voluptatibus ipsam magnam,
                  eligendi, accusantium ipsa quae quis praesentium voluptate
                  saepe ullam sint ea itaque consectetur impedit?
                </p>
              </template>
            </app-accordion>
            <!-- end copy -->
          </div>
        </div>
      </div>
      <div
        class="card row-span-1 grid grid-cols-1 gap-5 bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow"
      >
        <div class="accordion-packed">
          <h2 class="font-semibold dark:text-gray-200">Accordion Menu Only</h2>
          <div class="wrapper mt-5">
            <!-- copy this component  -->
            <menu-accordion>
              <template v-slot:title> Click me to open</template>
              <template v-slot:content>
                <p>
                  <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing
                  elit. Quia, porro. Non a excepturi, voluptatibus ipsam magnam,
                  eligendi, accusantium ipsa quae quis praesentium voluptate
                  saepe ullam sint ea itaque consectetur impedit?
                </p>
              </template>
            </menu-accordion>
            <!-- end copy -->
          </div>
        </div>
        <div class="accordion-packed">
          <h2 class="font-semibold dark:text-gray-200">
            Accordion Menu With icon
          </h2>
          <p class="mt-1 dark:text-gray-200">
            you can add
            <span class="bg-gray-200 text-red-500"> v-slot:icon </span>
            above the title slot and add icon inside slot with element
            <a
              href="https://icon-sets.iconify.design/"
              class="underline hover:text-blue-800"
              target="_blank"
              >Iconify.</a
            >
          </p>
          <div class="wrapper mt-5">
            <!-- copy this component  -->
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="akar-icons:link-out" />
              </template>
              <template v-slot:title> Click me to open</template>
              <template v-slot:content>
                <p>
                  <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing
                  elit. Quia, porro. Non a excepturi, voluptatibus ipsam magnam,
                  eligendi, accusantium ipsa quae quis praesentium voluptate
                  saepe ullam sint ea itaque consectetur impedit?
                </p>
              </template>
            </menu-accordion>
            <!-- end copy -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  import AppAccordion from "../../components/AppAccordion.vue";
  import MenuAccordion from "../../components/MenuAccordion.vue";
  export default {
    components: {
      Icon,
      AppAccordion,
      MenuAccordion,
    },
    mounted() {},
  };
</script>
