<template>
  <!-- App -->
  <div class="flex bg-gray-50 font-lexend dark:bg-gray-900">
    <div
      v-if="!$route.meta.hideNav"
      class="flex-sidebar lg:flex-auto w-sidebar lg:block hidden bg-white dark:bg-gray-800 border-r-2 dark:border-gray-700 lg:z-0 z-20 overflow-auto lg:relative fixed"
    >
      <perfect-scrollbar class="h-screen">
        <Sidebar v-if="!$route.meta.hideNav" />
      </perfect-scrollbar>
    </div>

    <div
      class="flex-auto w-full overflow-auto h-screen"
      id="body-scroll"
    >
      <Header v-if="!$route.meta.hideNav" />
      <router-view />
      <Footer v-if="!$route.meta.hideNav" />
    </div>
  </div>
  <!-- end app -->
</template>

<script>
  // vue Components
  import Sidebar from "@/components/Sidebar";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  // npm-js
  import Scrollbar from "smooth-scrollbar";

  export default {
    name: "App",

    components: {
      Header,
      Footer,
      Sidebar,
    },
    mounted() {
      Scrollbar.init(document.querySelector("#body-scroll"));

      setTimeout(() => {
        var alert_dis = document.querySelectorAll(".alert-dismiss");
        alert_dis.forEach((x) =>
          x.addEventListener("click", function () {
            x.parentElement.classList.add("hidden");
          })
        );
      }, 100);
    },
  };
</script>
