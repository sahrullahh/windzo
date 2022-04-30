<template>
  <!-- Search component Alert with name of type,  press Ctrl + F -->

  <div class="alert h-auto p-3">
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
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <h2 class="dark:text-gray-200">Default</h2>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <div
            class="primary-alert bg-blue-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam primary and can also info alert
          </div>
          <div
            class="success-alert bg-green-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert success
          </div>
          <div
            class="warning-alert bg-orange-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert warning
          </div>
          <div
            class="danger-alert bg-red-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert danger
          </div>
          <div
            class="dark-alert bg-gray-800 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert dark
          </div>
          <div
            class="secondary-alert bg-gray-300 py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            Hello iam alert secondary
          </div>
          <div
            class="light-alert bg-gray-100 py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            Hello iam alert light
          </div>
          <div
            class="light-alert bg-primary py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert custom colors
          </div>
        </div>
      </div>
      <!-- heading alert  -->
      <div
        class="card row-span-2 bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow"
      >
        <h2 class="dark:text-gray-200">Heading</h2>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <div
            class="primary-alert bg-blue-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam primary and can also info alert
          </div>
          <div
            class="success-alert bg-green-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam alert success
          </div>
          <div
            class="warning-alert bg-orange-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam alert warning
          </div>
          <div
            class="danger-alert bg-red-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam alert danger
          </div>
          <div
            class="dark-alert bg-gray-800 py-3 px-5 text-white w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam alert dark
          </div>
          <div
            class="secondary-alert bg-gray-300 py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam alert secondary
          </div>
          <div
            class="light-alert bg-gray-100 py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam alert light
          </div>
          <div
            class="light-alert bg-primary py-3 px-5 text-white w-full box-border rounded-md"
          >
            <h1 class="text-xl font-bold">Windzo</h1>
            Hello iam alert custom colors
          </div>
        </div>
      </div>
      <!-- With icon alert -->
      <div
        class="card row-span-3 bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow"
      >
        <h2 class="dark:text-gray-200">With icon alert</h2>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <div
            class="primary-alert bg-blue-500 flex py-3 px-5 text-white w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="bytesize:info" />
            </span>
            <span> Hello iam primary and can also info alert </span>
          </div>
          <div
            class="success-alert flex bg-green-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="bi:check-circle" />
            </span>
            <span> Hello iam alert success </span>
          </div>
          <div
            class="warning-alert bg-orange-500 flex py-3 px-5 text-white w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="clarity:warning-line" />
            </span>
            <span> Hello iam alert warning </span>
          </div>
          <div
            class="danger-alert bg-red-500 flex py-3 px-5 text-white w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="ic:outline-dangerous" />
            </span>
            <span> Hello iam alert danger </span>
          </div>
          <div
            class="dark-alert bg-gray-800 flex py-3 px-5 text-white w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="bxs:moon" />
            </span>
            <span> Hello iam alert dark </span>
          </div>
          <div
            class="secondary-alert bg-gray-300 dark:bg-gray-800 flex py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="bx:cog" />
            </span>
            <span> Hello iam alert secondary </span>
          </div>
          <div
            class="light-alert bg-gray-100 flex py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="ci:sun" />
            </span>
            <span> Hello iam alert light </span>
          </div>
          <div
            class="light-alert bg-primary flex py-3 px-5 text-white w-full box-border rounded-md"
          >
            <span class="text-2xl mr-3">
              <Icon icon="cib:visual-studio-code" />
            </span>
            <span> Hello iam alert custom colors </span>
          </div>
        </div>
      </div>
      <!-- Dismis alert  -->
      <div
        class="card row-span-4 bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow"
      >
        <h2 class="dark:text-gray-200">Dismissable Alert</h2>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <div
            class="primary-alert bg-blue-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam primary and can also info alert
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
          <div
            class="success-alert bg-green-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert success
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
          <div
            class="warning-alert bg-orange-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert warning
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
          <div
            class="danger-alert bg-red-500 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert danger
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
          <div
            class="dark-alert bg-gray-800 py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert dark
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
          <div
            class="secondary-alert bg-gray-300 py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            Hello iam alert secondary
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
          <div
            class="light-alert bg-gray-100 py-3 px-5 text-gray-800 w-full box-border rounded-md"
          >
            Hello iam alert light
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
          <div
            class="light-alert bg-primary py-3 px-5 text-white w-full box-border rounded-md"
          >
            Hello iam alert custom colors
            <button class="alert-dismiss float-right text-2xl">
              <Icon icon="la:times" />
            </button>
          </div>
        </div>
      </div>
      <!-- Light alert  -->
      <div
        class="card row-span-4 bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow"
      >
        <h2 class="dark:text-gray-200">Light alert</h2>
        <div class="wrapper-alert grid grid-cols-1 gap-3 mt-3">
          <div
            class="primary-alert bg-blue-200 py-3 px-5 text-blue-800 border-2 border-blue-800 w-full box-border rounded-md"
          >
            Hello iam primary and can also info alert
          </div>
          <div
            class="success-alert bg-green-200 py-3 px-5 text-green-800 border-2 border-green-800 w-full box-border rounded-md"
          >
            Hello iam alert success
          </div>
          <div
            class="warning-alert bg-orange-200 py-3 px-5 text-orange-800 border-2 border-orange-800 w-full box-border rounded-md"
          >
            Hello iam alert warning
          </div>
          <div
            class="danger-alert bg-red-200 py-3 px-5 text-red-800 border-2 border-red-800 w-full box-border rounded-md"
          >
            Hello iam alert danger
          </div>
          <div
            class="dark-alert bg-gray-200 py-3 px-5 text-gray-800 border-2 border-gray-800 w-full box-border rounded-md"
          >
            Hello iam alert dark
          </div>
          <div
            class="secondary-alert bg-gray-300 py-3 px-5 text-gray-500 border-2 border-gray-500 w-full box-border rounded-md"
          >
            Hello iam alert secondary
          </div>
          <div
            class="light-alert bg-gray-100 py-3 px-5 text-gray-500 border-2 border-gray-300 w-full box-border rounded-md"
          >
            Hello iam alert light
          </div>
          <div
            class="light-alert bg-indigo-200 py-3 px-5 text-indigo-800 border-2 border-indigo-800 w-full box-border rounded-md"
          >
            Hello iam alert custom colors
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    components: {
      Icon,
    },
    mounted() {
      var alert_dis = document.querySelectorAll(".alert-dismiss");
      alert_dis.forEach((x) =>
        x.addEventListener("click", function () {
          x.parentElement.classList.add("hidden");
        })
      );
    },
  };
</script>
