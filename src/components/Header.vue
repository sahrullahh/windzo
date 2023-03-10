<template>
  <!-- this header -->
  <header class="bg-white dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">
    <div class="wrap-header flex items-center gap-5 justify-between flex-wrap">
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
        <div
          class="input-box border dark:bg-gray-900 lg:ml-0 ml-5 dark:border-gray-700 rounded-md hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700"
        >
          <span class="text-3xl p-2 text-gray-400"
            ><Icon icon="ei:search"
          /></span>
          <input
            type="text"
            placeholder="Search..."
            class="p-3 w-full bg-white dark:bg-gray-900 dark:text-gray-400 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          />
        </div>
      </div>

      <div class="mr-5 flex gap-3">
        <!-- btn dark mode -->

        <button
          @click="fullscreenToggle"
          class="mr-5 text-2xl text-gray-500 relative"
        >
          <i v-if="!fullscreenMode">
            <Icon icon="ic:outline-fullscreen" />
          </i>
          <i v-else>
            <Icon icon="ic:outline-fullscreen-exit" />
          </i>
        </button>

        <button
          @click="setTheme(true)"
          class="mr-5 text-2xl text-gray-500"
          v-if="!darkMode"
        >
          <Icon icon="ph:sun-dim" />
        </button>
        <button
          @click="setTheme(false)"
          v-else
          class="mr-5 text-2xl text-gray-500"
        >
          <Icon icon="ri:moon-fill" />
        </button>
        <!-- btn notification -->
        <button class="mr-5 text-2xl text-gray-500 relative">
          <i
            class="bg-red-500 rounded-full p-1.5 border border-white dark:border-gray-700 -mt-1 absolute"
          ></i>
          <Icon icon="clarity:notification-line" />
        </button>

        <button
          @blur="menuToggleBlur"
          @click="menuToggle"
        >
          <div class="user-avatar flex p-1 cursor-pointer rounded-md">
            <div>
              <img
                src="../assets/img/user.jpg"
                class="rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500"
                alt=""
              />
            </div>
            <div class="text-left">
              <h2 class="dark:text-white text-gray-800">Hi, Moh Sahrullah.</h2>
              <p class="text-xs text-gray-400 dark:text-gray-500">
                Administrator Windzo
              </p>
            </div>
            <!-- <span class="text-md mt-4 text-gray-300"
              ><Icon icon="bi:caret-down-fill"
            /></span> -->
          </div>
        </button>

        <transition name="fade">
          <div
            id="dropdownSmall"
            v-show="menu"
            class="block absolute right-10 mt-12 z-50 w-52 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"
          >
            <div class="py-3 px-4 text-sm text-gray-900 dark:text-gray-200">
              <div>Logged As</div>
              <div class="font-medium truncate">Moh Sahrullah</div>
            </div>
            <ul
              class="py-1 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownSmallButton"
            >
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 hover:bg-primary hover:text-white"
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
              <a
                href="#"
                class="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white"
                >Sign out</a
              >
            </div>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>
<style></style>
<script>
  import { Icon } from "@iconify/vue";
  import { fullscreen } from "../helper/fullscreen.js";
  export default {
    data() {
      return {
        menu: false,
        darkMode: false,
        fullscreenMode: false,
      };
    },
    components: {
      Icon,
    },
    watch: {
      $route() {
        this.menu = false;
      },
    },
    methods: {
      fullscreen,
      menuToggle: function () {
        this.menu = !this.menu;
      },
      menuToggleBlur: function () {
        if (!this.$refs.menu) {
          this.menu = false;
        }
      },
      fullscreenToggle() {
        this.fullscreenMode = !this.fullscreenMode;
        this.fullscreen(this.fullscreenMode);
      },
      sidebarToggle: function () {
        document.querySelector(".flex-sidebar").classList.remove("hidden");
      },
      loadTheme() {
        this.darkMode =
          localStorage.getItem("color-theme") == "dark" ? true : false;

        if (localStorage.getItem("color-theme")) {
          if (localStorage.getItem("color-theme") === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }
          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      },
      setTheme(bool) {
        this.darkMode = bool;
        if (localStorage.getItem("color-theme")) {
          if (this.darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }
          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains("light")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      },
    },
    mounted() {
      this.loadTheme();
      document.onfullscreenchange = (event) => {
        if (document.fullscreenElement) {
          this.fullscreenMode = true;
        } else {
          this.fullscreenMode = false;
        }
      };
    },
  };
</script>
