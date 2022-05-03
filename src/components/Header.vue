<template>
  <!-- this header -->
  <header class="bg-white dark:bg-gray-800 p-2 border-b-2 dark:border-gray-700">
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
          Welcome back, Mohammad Sahrullah
        </h2>
      </div>
      <div class="mr-5 flex">
        <div
          class="input-box border dark:bg-gray-900 dark:border-gray-700 rounded-md mr-5 hidden lg:w-search w-full box-border lg:flex md:flex focus-within:bg-gray-100 dark:focus-within:bg-gray-700"
        >
          <span class="text-3xl p-2 text-gray-400"
            ><Icon icon="ei:search"
          /></span>
          <input
            type="text"
            placeholder="Search..."
            class="p-3 w-full bg-white dark:bg-gray-900 rounded-md outline-none focus:bg-gray-100 dark:focus:bg-gray-700"
          />
        </div>
        <button
          id="theme-toggle"
          type="button"
          class="text-gray-500 mr-5 dark:text-gray-400 h outline-none rounded-lg text-sm p-2.5"
        >
          <svg
            id="theme-toggle-light-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-dark-icon"
            class="hidden w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <button class="mr-5 text-2xl text-gray-500">
          <Icon icon="clarity:notification-line" />
        </button>
        <button @click="menuToggle" @blur="menuToggleBlur">
          <div
            class="user-avatar flex hover:bg-gray-100 dark:hover:bg-gray-700 p-1 cursor-pointer rounded-md"
          >
            <img
              src="../assets/img/user.jpg"
              class="rounded-full mr-4 w-10 h-10 p-1 ring-1 ring-gray-300 dark:ring-gray-500"
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
            class="block absolute right-10 mt-12 z-10 w-44 border dark:border-gray-700 bg-white dark:bg-gray-800 rounded divide-y dark:divide-gray-700 divide-gray-100 shadow"
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
      menuToggleBlur: function () {
        this.menu = false;
      },
      sidebarToggle: function () {
        document.querySelector(".flex-sidebar").classList.remove("hidden");
      },
    },
    mounted() {
      var themeToggleDarkIcon = document.getElementById(
        "theme-toggle-dark-icon"
      );
      var themeToggleLightIcon = document.getElementById(
        "theme-toggle-light-icon"
      );

      // Change the icons inside the button based on previous settings
      if (
        localStorage.getItem("color-theme") === "dark" ||
        !("color-theme" in localStorage)
      ) {
        document.documentElement.classList.add("dark");
        themeToggleLightIcon.classList.remove("hidden");
      } else {
        document.documentElement.classList.remove("dark");
        themeToggleDarkIcon.classList.remove("hidden");
      }

      // // if set via local storage previously
      // if (!localStorage.getItem("color-theme")) {
      //   if (localStorage.getItem("color-theme") === "light") {
      //     document.documentElement.classList.add("dark");
      //     localStorage.setItem("color-theme", "dark");
      //   } else {
      //     document.documentElement.classList.remove("dark");
      //     localStorage.setItem("color-theme", "light");
      //   }

      // if NOT set via local storage previously
      // } else {
      //   if (document.documentElement.classList.contains("dark")) {
      //     document.documentElement.classList.remove("dark");
      //     localStorage.setItem("color-theme", "light");
      //   } else {
      //     document.documentElement.classList.add("dark");
      //     localStorage.setItem("color-theme", "dark");
      //   }
      // }

      var themeToggleBtn = document.getElementById("theme-toggle");

      themeToggleBtn.addEventListener("click", function () {
        // toggle icons inside button
        themeToggleDarkIcon.classList.toggle("hidden");
        themeToggleLightIcon.classList.toggle("hidden");

        // if set via local storage previously
        if (localStorage.getItem("color-theme")) {
          if (localStorage.getItem("color-theme") === "light") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          }

          // if NOT set via local storage previously
        } else {
          if (document.documentElement.classList.contains("dark")) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("color-theme", "light");
          } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("color-theme", "dark");
          }
        }
      });
    },
  };
</script>
