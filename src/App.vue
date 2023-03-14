<template>
  <!-- App -->
  <div class="flex bg-gray-50 font-lexend dark:bg-gray-900">
    <div
      v-if="!$route.meta.hideNav"
      class="lg:block"
      :class="{ 'lg:block hidden': !sidebar, block: sidebar }"
    >
      <div
        class="lg:flex-auto w-sidebar bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 lg:z-0 z-20 overflow-auto lg:relative fixed"
      >
        <perfect-scrollbar class="h-screen">
          <Sidebar
            v-if="!$route.meta.hideNav"
            @sidebarToggle="close"
          />
        </perfect-scrollbar>
      </div>
    </div>

    <div
      class="flex-auto w-full overflow-auto h-screen transition-colors"
      id="body-scroll"
    >
      <Header
        v-if="!$route.meta.hideNav"
        @sidebarToggle="open"
      />
      <router-view />
      <Footer v-if="!$route.meta.hideNav" />
    </div>
  </div>
  <!-- End app -->
</template>

<script>
  import { alertDismis } from "@/helper/alert-dismis";

  // Vue components
  import Sidebar from "@/components/Sidebar";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  // npm-js
  import Scrollbar from "smooth-scrollbar";

  export default {
    name: "App",

    data() {
      return {
        sidebarDark: false,
        sidebar: false,
      };
    },

    components: {
      Header,
      Footer,
      Sidebar,
    },
    methods: {
      alertDismis,

      open() {
        this.sidebar = true;
      },
      close() {
        this.sidebar = false;
      },
    },
    mounted() {
      Scrollbar.init(document.querySelector("#body-scroll"));

      // this set globaly alert dismis
      this.alertDismis(".alert-dismis");
    },
  };
</script>
