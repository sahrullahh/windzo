<template>
  <!-- Search component Alert with name of type,  press Ctrl + F -->

  <div class="alert h-auto p-3">
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
              >Alert</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Alert
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        This Alert component helps you to notify about success and danger
        messages.
      </p>
    </div>
    <!-- grid wrapper card -->
    <div class="grid lg:grid-cols-2 grid-col-1 gap-4 mt-5">
      <!-- default alert  -->
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5 space-y-4">
          <h2 class="dark:text-gray-200">Default alert</h2>
          <p class="dark:text-gray-200">
            you can change background colors by adding props and text in your
            alert components.
          </p>
        </div>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <alert class="bg-blue-500 text-white">
            <template v-slot:content>
              Hello iam primary and can also info alert
            </template>
          </alert>
          <alert class="bg-green-500 text-white">
            <template v-slot:content> Hello iam alert success </template>
          </alert>
          <alert class="bg-orange-500 text-white">
            <template v-slot:content> Hello iam alert warning</template>
          </alert>
          <alert class="bg-red-500 text-white">
            <template v-slot:content> Hello iam alert danger</template>
          </alert>

          <alert class="bg-gray-700 text-white">
            <template v-slot:content> Hello iam alert dark </template>
          </alert>
          <alert class="bg-gray-300 text-gray-800">
            <template v-slot:content> Hello iam alert secondary </template>
          </alert>

          <alert class="bg-gray-100 text-gray-800">
            <template v-slot:content> Hello iam alert light </template>
          </alert>

          <alert class="bg-primary text-white">
            <template v-slot:content> Hello iam alert custom colors </template>
          </alert>
        </div>
      </div>
      <!-- heading alert  -->
      <div
        class="card row-span-2 bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5 space-y-4">
          <h2 class="dark:text-gray-200">Heading</h2>
          <p class="dark:text-gray-200">
            to use heading text on your alert adding
            <span class="text-red-500 bg-gray-200">v-slot:heading</span> on
            alert components.
          </p>
        </div>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <alert class="bg-blue-500 text-white">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content>
              Hello iam primary and can also info alert
            </template>
          </alert>
          <alert class="bg-green-500 text-white">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content> Hello iam alert success </template>
          </alert>
          <alert class="bg-orange-500 text-white">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content> Hello iam alert warning</template>
          </alert>
          <alert class="bg-red-500 text-white">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content> Hello iam alert danger</template>
          </alert>

          <alert class="bg-gray-700 text-white">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content> Hello iam alert dark </template>
          </alert>
          <alert class="bg-gray-300 text-gray-800">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content> Hello iam alert secondary </template>
          </alert>

          <alert class="bg-gray-100 text-gray-800">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content> Hello iam alert light </template>
          </alert>

          <alert class="bg-primary text-white">
            <template v-slot:heading> Windzo </template>
            <template v-slot:content> Hello iam alert custom colors </template>
          </alert>
        </div>
      </div>
      <!-- With icon alert -->
      <div
        class="card row-span-3 bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5 space-y-4">
          <h2 class="dark:text-gray-200">With icon alert</h2>
          <p class="dark:text-gray-200">
            to use icon on your alert adding
            <span class="text-red-500 bg-gray-200">v-slot:icon</span> and use
            iconify for default or others.
          </p>
        </div>

        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <alert class="bg-blue-500 text-white">
            <template v-slot:icon>
              <Icon icon="bytesize:info" />
            </template>
            <template v-slot:content>
              Hello iam primary and can also info alert
            </template>
          </alert>
          <alert class="bg-green-500 text-white">
            <template v-slot:icon>
              <Icon icon="bi:check-circle" />
            </template>
            <template v-slot:content> Hello iam alert success </template>
          </alert>
          <alert class="bg-orange-500 text-white">
            <template v-slot:icon>
              <Icon icon="clarity:warning-line" />
            </template>
            <template v-slot:content> Hello iam alert warning</template>
          </alert>
          <alert class="bg-red-500 text-white">
            <template v-slot:icon>
              <Icon icon="ic:outline-dangerous" />
            </template>
            <template v-slot:content> Hello iam alert danger</template>
          </alert>

          <alert class="bg-gray-700 text-white">
            <template v-slot:icon> <Icon icon="bxs:moon" /> </template>
            <template v-slot:content> Hello iam alert dark </template>
          </alert>
          <alert class="bg-gray-300 text-gray-800">
            <template v-slot:icon>
              <Icon icon="bx:cog" />
            </template>
            <template v-slot:content> Hello iam alert secondary </template>
          </alert>

          <alert class="bg-gray-100 text-gray-800">
            <template v-slot:icon> <Icon icon="ci:sun" /> </template>
            <template v-slot:content> Hello iam alert light </template>
          </alert>

          <alert class="bg-primary text-white">
            <template v-slot:icon>
              <Icon icon="cib:visual-studio-code" />
            </template>
            <template v-slot:content> Hello iam alert custom colors </template>
          </alert>
        </div>
      </div>
      <!-- Dismis alert  -->
      <div
        class="card row-span-4 bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5 space-y-4">
          <h2 class="dark:text-gray-200">Dismissable Alert</h2>
          <p class="dark:text-gray-200">
            adding props
            <span class="text-red-500 bg-gray-200">actionIcon to true </span> on
            your alert components to use Dismissable alert
          </p>
          <p class="dark:text-gray-200">
            and change the demo props to
            <span class="text-red-500 bg-gray-200">false</span>, aiming not to
            spawn the alert again
          </p>
        </div>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <alert
            class="bg-blue-500 text-white"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content>
              Hello iam primary and can also info alert
            </template>
          </alert>
          <alert
            class="bg-green-500 text-white"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content> Hello iam alert success </template>
          </alert>
          <alert
            class="bg-orange-500 text-white"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content> Hello iam alert warning</template>
          </alert>
          <alert
            class="bg-red-500 text-white"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content> Hello iam alert danger</template>
          </alert>

          <alert
            class="bg-gray-700 text-white"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content> Hello iam alert dark </template>
          </alert>
          <alert
            class="bg-gray-300 text-gray-800"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content> Hello iam alert secondary </template>
          </alert>

          <alert
            class="bg-gray-100 text-gray-800"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content> Hello iam alert light </template>
          </alert>

          <alert
            class="bg-primary text-white"
            :demo="true"
            :actionClose="true"
          >
            <template v-slot:content> Hello iam alert custom colors </template>
          </alert>
        </div>
      </div>
      <!-- Light alert  -->
      <div
        class="card row-span-4 bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <h2 class="dark:text-gray-200">Light alert</h2>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <alert class="bg-blue-200 text-blue-800">
            <template v-slot:content>
              Hello iam primary and can also info alert
            </template>
          </alert>
          <alert class="bg-green-200 text-green-800">
            <template v-slot:content> Hello iam alert success </template>
          </alert>
          <alert class="bg-orange-200 text-orange-800">
            <template v-slot:content> Hello iam alert warning</template>
          </alert>
          <alert class="bg-red-200 text-red-800">
            <template v-slot:content> Hello iam alert danger</template>
          </alert>

          <alert class="bg-gray-700/50 text-gray-500">
            <template v-slot:content> Hello iam alert dark </template>
          </alert>
          <alert class="bg-gray-300/20 text-gray-500">
            <template v-slot:content> Hello iam alert secondary </template>
          </alert>

          <alert class="bg-gray-100/50 text-gray-800">
            <template v-slot:content> Hello iam alert light </template>
          </alert>

          <alert
            class="bg-indigo-200/80 text-indigo-800"
            :actionClose="false"
          >
            <template v-slot:content> Hello iam alert custom colors </template>
          </alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Alert from "@/components/Alert.vue";
  import { Icon } from "@iconify/vue";
  export default {
    components: {
      Alert,
      Icon,
    },
  };
</script>
