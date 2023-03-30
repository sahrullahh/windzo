<template>
  <!-- sidebar -->
  <nav class="sidebar bg-white dark:bg-gray-800">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link
        to="/"
        exact
        class="flex"
      >
        <img
          class="w-8 mt-1"
          src="@/assets/logo/logo.svg"
          alt="logo windzo"
        />
        <h2
          class="text-2xl font-normal ml-3 mt-2 text-gray-800 dark:text-gray-200"
          translate="no"
        >
          Windzo<span class="text-primary">.</span>
        </h2>
      </router-link>
      <div
        class="bg-gray-700 absolute mt-3 dark:block hidden rounded-md py-1 px-2 text-xs text-gray-200"
      >
        Dark mode
      </div>
      <button
        class="lg:hidden block dark:text-gray-400 float-right -mt-7"
        @click="$emit('sidebarToggle')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="25px"
          height="25px"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M7.219 5.781L5.78 7.22L14.563 16L5.78 24.781l1.44 1.439L16 17.437l8.781 8.782l1.438-1.438L17.437 16l8.782-8.781L24.78 5.78L16 14.563z"
          />
        </svg>
      </button>
    </div>
    <!-- sidebar list -->
    <div class="sidebar-list p-4 mt-4 divide-y dark:divide-gray-700">
      <div class="pb-5">
        <p class="font-medium text-gray-400 dark:text-gray-400">Menu</p>
        <div class="wrap-item mt-4 dark:text-gray-500">
          <div class="item">
            <router-link
              to="/"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
              <span class="w-full"> Dashboard </span>
            </router-link>
          </div>
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="gg:components" />
              </template>
              <template v-slot:title> Components </template>
              <template v-slot:content>
                <router-link
                  to="/component/alert"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Alert
                </router-link>
                <router-link
                  to="/component/accordion"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Accordion
                </router-link>
                <router-link
                  to="/component/badge"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Badge
                </router-link>
                <router-link
                  to="/component/breadcumb"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Breadcumb
                </router-link>
                <router-link
                  to="/component/button"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Button
                </router-link>
                <router-link
                  to="/component/card"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Card
                </router-link>
                <router-link
                  to="/component/dropdown"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Dropdown
                </router-link>
                <router-link
                  to="/component/modal"
                  class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  Modal
                </router-link>
              </template>
            </menu-accordion>
          </div>
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="ri:layout-2-fill" />
              </template>
              <template v-slot:title> Layouts </template>
              <template v-slot:content>
                <p>Coming soon.</p>
              </template>
            </menu-accordion>
          </div>
          <div class="item mt-3">
            <menu-accordion>
              <template v-slot:icon>
                <Icon icon="ri:pages-fill" />
              </template>
              <template v-slot:title> Pages </template>
              <template v-slot:content>
                <div class="">
                  <router-link
                    to="/blank"
                    class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                  >
                    Blank Page
                  </router-link>
                  <menu-accordion>
                    <template v-slot:title> Error Page </template>
                    <template v-slot:content>
                      <router-link
                        to="/404page"
                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        404 page
                      </router-link>
                      <router-link
                        to="/500"
                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        500 page
                      </router-link>
                      <router-link
                        to="/maintenance"
                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Maintenance page
                      </router-link>
                    </template>
                  </menu-accordion>
                  <menu-accordion>
                    <template v-slot:title> Authentication </template>
                    <template v-slot:content>
                      <router-link
                        to="/auth/login"
                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Login
                      </router-link>
                      <router-link
                        to="/auth/register"
                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Register
                      </router-link>
                      <router-link
                        to="/auth/forgot-password"
                        class="w-full text-left block rounded-md p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                      >
                        Forgot Password
                      </router-link>
                    </template>
                  </menu-accordion>
                </div>
              </template>
            </menu-accordion>
          </div>
        </div>
      </div>
      <div class="pb-5">
        <p class="font-medium text-gray-400 mt-4 dark:text-gray-400">
          UI Form & Tables
        </p>

        <div class="item mt-3">
          <menu-accordion>
            <template v-slot:icon>
              <Icon icon="ant-design:form-outlined" />
            </template>
            <template v-slot:title> Form Element </template>
            <template v-slot:content>
              <p class="text-gray-800 dark:text-gray-500">Coming soon.</p>
            </template>
          </menu-accordion>
        </div>

        <div class="item mt-3">
          <router-link to="/tables">
            <button
              class="text-gray-800 dark:text-gray-500 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-xl"><Icon icon="bi:table" /></span>
              <span class="w-full"> Tables </span>
              <span class="box-border mt-1 text-gray-500"> </span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { Icon } from "@iconify/vue";
  import MenuAccordion from "./MenuAccordion.vue";
  export default {
    components: {
      Icon,
      MenuAccordion,
    },
  };
</script>
