<template>
  <!-- this header -->
  <header class="bg-white p-2 border-b-2">
    <div class="wrap-header flex items-center justify-between flex-wrap">
      <div class="flex flex-no-shrink items-center">
        <button
          class="text-gray-500 lg:hidden ml-3 block"
          @click="sidebarToggle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="2em"
            height="2em"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 16 16"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M2.75 12.25h10.5m-10.5-4h10.5m-10.5-4h10.5"
            />
          </svg>
        </button>
        <h2
          class="text-md text-indigo-800 ml-3 lg:block hidden px-5 p-2 rounded-md bg-indigo-200"
        >
          You can customize this dashboard template
        </h2>
      </div>
      <div class="mr-5 flex">
        <div
          class="input-box border rounded-md mr-5 hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100"
        >
          <span class="text-3xl p-2 text-gray-400"
            ><Icon icon="ei:search"
          /></span>
          <input
            type="text"
            placeholder="Search..."
            class="p-3 w-full rounded-md outline-none focus:bg-gray-100"
          />
        </div>
        <button class="mr-5 text-2xl text-gray-500">
          <Icon icon="clarity:notification-line" />
        </button>
        <button @click="menuToggle">
          <div
            class="user-avatar flex hover:bg-gray-100 p-1 cursor-pointer rounded-md"
          >
            <img
              src="../assets/img/user.jpg"
              class="rounded-full mr-4 w-10 h-10"
              alt=""
            />
            <span class="text-md mt-4 text-gray-300"
              ><Icon icon="bi:caret-down-fill"
            /></span>
          </div>
        </button>

        <transition name="fade">
          <div
            id="dropdownSmall"
            v-show="menu"
            class="block absolute right-10 mt-12 z-10 w-44 border bg-white rounded divide-y divide-gray-100 shadow"
          >
            <div class="py-3 px-4 text-sm text-gray-900">
              <div>Logged As</div>
              <div class="font-medium truncate">Moh Sahrullah</div>
            </div>
            <ul
              class="py-1 text-sm text-gray-700"
              aria-labelledby="dropdownSmallButton"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 0 hover:bg-primary hover:text-white"
                  >User Profile</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-primary hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-primary hover:text-white"
                  >Github</a
                >
              </li>
            </ul>
            <div class="py-1">
              <a href="#" class="block py-2 px-4 text-sm text-gray-700"
                >log out</a
              >
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
  import { Icon } from "@iconify/vue";
  export default {
    data() {
      return {
        menu: false,
      };
    },
    components: {
      Icon,
    },
    methods: {
      menuToggle: function () {
        this.menu = !this.menu;
      },
      sidebarToggle: function () {
        document.querySelector(".flex-sidebar").classList.toggle("hide");
      },
    },
    mounted() {},
  };
</script>
