<template>
  <div class="modal-pages lg:h-screen h-auto p-3">
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
              >Modal</a
            >
          </div>
        </li>
      </ol>
    </nav>
    <!-- end nav -->
    <div class="mt-5 w-full">
      <h1 class="text-2xl text-gray-900 font-medium dark:text-gray-200">
        Modal
      </h1>
      <p class="mt-1 text-sm font-normal text-gray-400">
        modal-component can be used to save empty space on full columns,
        modal-component can be used for action notifications, and can also be
        used for more elegant forms and other things.
      </p>
    </div>
    <!-- Badge count notification -->
    <div class="grid grid-cols-2 gap-2 mt-3">
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5">
          <h2 class="dark:text-white">Default Modal</h2>
          <p class="text-gray-600 dark:text-white pt-3">
            use prop to add title subtitle and change text button in modal,
            <span class="bg-gray-200 text-red-500"
              >title, subtitle, btnText, btnTextSubmit</span
            >
          </p>
        </div>

        <Modal
          title="Modal title"
          btnTextSubmit="Click me"
          btnText="Launch modal demo"
          @submit="test"
        >
          <template v-slot:body>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente velit hic corrupti est atque, provident ex cupiditate
                aspernatur beatae optio corporis eum ullam? Non suscipit ex
                tenetur quaerat ducimus culpa.
              </p>
            </div>
          </template>
        </Modal>
      </div>
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5">
          <h2 class="dark:text-white">Modal Without Backdrop</h2>
          <p class="text-gray-600 dark:text-white pt-3">
            Remove backdrop in modal,
            <span class="bg-gray-200 text-red-500">:backdrop="false"</span>
          </p>
        </div>

        <Modal
          title="Modal title"
          btnTextSubmit="Click me"
          btnText="Launch modal without backdrop"
          :backdrop="false"
        >
          <template v-slot:body>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente velit hic corrupti est atque, provident ex cupiditate
                aspernatur beatae optio corporis eum ullam? Non suscipit ex
                tenetur quaerat ducimus culpa.
              </p>
            </div>
          </template>
        </Modal>
      </div>
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5">
          <h2 class="dark:text-white">Modal Custom Width</h2>
          <p class="text-gray-600 dark:text-white pt-3">
            use prop width in modal,
            <span class="bg-gray-200 text-red-500">width="max-w-full"</span> you
            can use max-width class from tailwindcss
          </p>
        </div>

        <Modal
          title="Modal title"
          btnTextSubmit="Click me"
          btnText="Launch modal width custom"
          width="max-w-full"
          @submit="test"
        >
          <template v-slot:body>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sapiente velit hic corrupti est atque, provident ex cupiditate
                aspernatur beatae optio corporis eum ullam? Non suscipit ex
                tenetur quaerat ducimus culpa.
              </p>
            </div>
          </template>
        </Modal>
      </div>
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5">
          <h2 class="dark:text-white">Modal With Icon</h2>
          <p class="text-gray-600 dark:text-white pt-3">
            add slot element from modal,
            <span class="bg-gray-200 text-red-500">v-slot:Icon</span> you can
            use Iconify for the icons or svg
          </p>
        </div>

        <Modal
          title="Delete"
          subtitle="Are you sure delete the items?"
          btnTextSubmit="Confirm"
          btnColorSubmit="bg-red-500"
          btnText="Launch Modal With Icon"
          @submit="confirmDelete"
          @submitForm=""
        >
        </Modal>
      </div>
      <div
        class="card bg-white dark:bg-gray-800 w-full rounded-md p-5 border dark:border-gray-700"
      >
        <div class="pb-5">
          <h2 class="dark:text-white">Form Login</h2>
          <p class="text-gray-600 dark:text-white pt-3">
            you can create form login with modal, to create form you can add
            <span class="bg-gray-200 text-red-500">v-slot:body</span> in your
            modal component.
          </p>
        </div>

        <Modal
          title="Login"
          subtitle="login your account to continue"
          btnTextSubmit="Login"
          btnText="Launch Modal form"
        >
          <template v-slot:body>
            <div class="space-y-5 pb-5">
              <div class="space-y-3">
                <p>Email</p>
                <input
                  type="text"
                  placeholder=""
                  class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                />
              </div>
              <div class="space-y-3">
                <p>Password</p>
                <input
                  type="password"
                  placeholder=""
                  class="p-2 border dark:border-gray-600 dark:bg-gray-700 w-full rounded outline-none"
                />
              </div>
            </div>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
  import Modal from "@/components/modal.vue";
  export default {
    components: {
      Modal,
    },
    methods: {
      test() {
        alert("clicked!");
      },
      confirmDelete() {
        alert("deleted!");
      },
    },
  };
</script>
