<template>
  <div class="flex bg-packed font-lexend">
    <transition name="fade">
      <div
        id="sidebar-scroll"
        class="flex-sidebar flex-auto w-sidebar lg:block hidden bg-white border-r-2 h-screen lg:z-0 z-40 overflow-auto lg:relative fixed"
      >
        <Sidebar />
      </div>
    </transition>
    <div class="flex-auto w-full overflow-auto h-screen" id="body-scroll">
      <Header />
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
  // vue components
  import Sidebar from "@/components/Sidebar";
  import Header from "@/components/Header";
  import Footer from "@/components/Footer";
  // npmjs
  import Scrollbar from "smooth-scrollbar";
  import PerfectScrollbar from "perfect-scrollbar";
  export default {
    name: "App",
    components: {
      Header,
      Footer,
      Sidebar,
    },
    mounted() {
      // const container = document.querySelector("#sidebar-scroll");
      // const ps = new PerfectScrollbar(container);

      Scrollbar.init(document.querySelector("#body-scroll"));
    },
  };
</script>
