<template>
  <!-- Search component Badge with name of type, press Ctrl + F -->

  <div class="Badge h-auto p-3">
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
              >Badge</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Badge
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        badges are used for labeled text or counting like e-commerce shopping
        cart notifications and other.
      </p>
    </div>
    <!-- Badge count notification -->
    <div class="grid grid-cols-2 gap-2 mt-3">
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <h2 class="dark:text-gray-200">Badge count notification</h2>
        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-700 rounded-full py-1 px-3 text-white">57</span>
          <span class="bg-green-600 rounded-full py-1 px-3 text-white">0</span>
          <span class="bg-orange-600 rounded-full py-1 px-3 text-white"
            >0%</span
          >
          <span class="bg-red-600 rounded-full py-1 px-2 text-white">100</span>
        </div>

        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-700 rounded-full text-xs py-1 px-2 text-white"
            >57</span
          >
          <span class="bg-green-600 rounded-full text-xs py-1 px-2 text-white"
            >0</span
          >
          <span class="bg-orange-600 rounded-full text-xs py-1 px-2 text-white"
            >0%</span
          >
          <span class="bg-red-600 rounded-full text-xs py-1 px-2 text-white"
            >100</span
          >
        </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <h2 class="dark:text-gray-200">Badge labeled</h2>
        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-700 rounded-md py-1 px-4 text-white"
            >ongoing</span
          >
          <span class="bg-green-600 rounded-md py-1 px-4 text-white">paid</span>
          <span class="bg-orange-600 rounded-md py-1 px-4 text-white"
            >50% OFF
          </span>
          <span class="bg-red-600 rounded-md py-1 px-4 text-white">unpaid</span>
        </div>
        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-700 rounded-md text-xs py-1 px-4 text-white"
            >ongoing</span
          >
          <span class="bg-green-600 rounded-md text-xs py-1 px-4 text-white"
            >paid</span
          >
          <span class="bg-orange-600 rounded-md text-xs py-1 px-4 text-white"
            >50% OFF
          </span>
          <span class="bg-red-600 rounded-md text-xs py-1 px-4 text-white"
            >unpaid</span
          >
        </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <h2 class="dark:text-gray-200">Badge Light count notification</h2>
        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-200 rounded-full py-1 px-2 text-blue-700"
            >57</span
          >
          <span class="bg-green-200 rounded-full py-1 px-2 text-green-700"
            >0</span
          >
          <span class="bg-orange-200 rounded-full py-1 px-2 text-orange-700"
            >0%</span
          >
          <span class="bg-red-200 rounded-full py-1 px-2 text-red-700"
            >100</span
          >
        </div>
        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-200 rounded-full text-xs py-1 px-2 text-blue-700"
            >57</span
          >
          <span
            class="bg-green-200 rounded-full text-xs py-1 px-2 text-green-700"
            >0</span
          >
          <span
            class="bg-orange-200 rounded-full text-xs py-1 px-2 text-orange-700"
            >0%</span
          >
          <span class="bg-red-200 rounded-full text-xs py-1 px-2 text-red-700"
            >100</span
          >
        </div>
      </div>
      <div class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 shadow">
        <h2 class="dark:text-gray-200">Badge Light labeled</h2>
        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-200 rounded-md py-1 px-4 text-blue-700"
            >ongoing</span
          >
          <span class="bg-green-200 rounded-md py-1 px-4 text-green-700"
            >paid</span
          >
          <span class="bg-orange-200 rounded-md py-1 px-4 text-orange-700"
            >50% OFF
          </span>
          <span class="bg-red-200 rounded-md py-1 px-4 text-red-700"
            >unpaid</span
          >
        </div>
        <div class="wrapper-badge w-full box-border flex gap-4 mt-4">
          <span class="bg-blue-200 rounded-md text-xs py-1 px-4 text-blue-700"
            >ongoing</span
          >
          <span class="bg-green-200 rounded-md text-xs py-1 px-4 text-green-700"
            >paid</span
          >
          <span
            class="bg-orange-200 rounded-md text-xs py-1 px-4 text-orange-700"
            >50% OFF
          </span>
          <span class="bg-red-200 rounded-md text-xs py-1 px-4 text-red-700"
            >unpaid</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
