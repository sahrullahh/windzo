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
      <!-- <div class="pb-5">
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
              </template>
            </menu-accordion>
          </div>
        </div>
      </div> -->
      <div
        class="pb-5"
        :key="index"
        v-for="(item, index) in sidebarList.menu"
      >
        <p class="font-medium text-gray-400 dark:text-gray-400">
          {{ item.name }}
        </p>
        <div class="wrap-item mt-4 dark:text-gray-500">
          <!-- <div
            class="item"
            v-for="(child, id) in item.children"
            :key="id"
          >
            <router-link
              v-if="child.type == 'default'"
              :to="url"
              exact
              class="w-full flex text-left rounded-md box-border p-3 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              <span class="mr-3 text-xl"><Icon :icon="child.icon" /></span>
              <span class="w-full"> {{ child.name }} </span>
            </router-link> -->
          <!-- <menu-accordion v-else>
              <template v-slot:icon>
                <Icon :icon="child.icon" />
              </template>
              <template v-slot:title>{{ child.name }}</template>
              <template v-slot:content> </template>
            </menu-accordion> -->
          <!-- </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import { useSidebar } from "@/store/sidebar";
  import { Icon } from "@iconify/vue";
  import MenuAccordion from "./MenuAccordion.vue";

  export default {
    setup() {
      const sidebarList = useSidebar();
      return { sidebarList };
    },
    components: {
      Icon,
      MenuAccordion,
    },
    mounted() {
      console.log(this.sidebarList.menu.map());
    },
  };
</script>
