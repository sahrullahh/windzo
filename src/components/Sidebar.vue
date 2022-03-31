<template>
  <!-- sidebar -->
  <nav class="sidebar">
    <!-- sidebar head -->
    <div class="sidebar-head p-4">
      <router-link to="/" exact>
        <h2 class="text-2xl font-normal text-gray-800" translate="no">
          Windzo<span class="text-primary">.</span>
        </h2>
      </router-link>
      <button class="lg:hidden block float-right -mt-7" @click="sidebarToggle">
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
    <div class="sidebar-list p-4 mt-4">
      <p class="font-medium text-gray-400">Menu</p>
      <div class="wrap-item mt-4">
        <div class="item">
          <router-link
            to="/"
            exact
            class="w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="bxs:dashboard" /></span>
            <span class="w-full"> Dashboard </span>
          </router-link>
        </div>
        <div class="item mt-3">
          <button
            class="accordion text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="gg:components" /></span>
            <span class="w-full"> Components </span>
            <span class="box-border mt-1 text-gray-500">
              <span class="float-right">
                <Icon icon="fa6-solid:angle-down" />
              </span>
            </span>
          </button>
          <div class="panel hidden">
            <router-link
              to="/component/alert"
              class="w-full text-left block rounded-md p-3 hover:bg-gray-100"
            >
              Alert
            </router-link>
            <router-link
              to="/component/badge"
              class="w-full text-left block rounded-md p-3 hover:bg-gray-100"
            >
              Badge
            </router-link>
            <router-link
              to="/component/breadcumb"
              class="w-full text-left block rounded-md p-3 hover:bg-gray-100"
            >
              Breadcumb
            </router-link>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Button
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Card
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Owl Carousel
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Dropdown
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              List Group
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Modal
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Navs
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Pagenation
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Progress
            </button>
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Tooltip
            </button>
          </div>
        </div>
        <div class="item mt-3">
          <router-link to="/">
            <button
              class="accordion text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
            >
              <span class="mr-3 text-xl"><Icon icon="bi:layout-wtf" /></span>
              <span class="w-full"> Layouts </span>
              <span class="box-border mt-1 text-gray-500">
                <span class="float-right">
                  <Icon icon="fa6-solid:angle-down" />
                </span>
              </span>
            </button>
            <div class="panel hidden">
              <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
                Coming Soon
              </button>
            </div>
          </router-link>
        </div>
      </div>
      <p class="font-medium text-gray-400 mt-4">UI Form & Tables</p>

      <div class="item mt-3">
        <router-link to="/">
          <button
            class="accordion text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"
              ><Icon icon="ant-design:form-outlined"
            /></span>
            <span class="w-full"> Form Element </span>
            <span class="box-border mt-1 text-gray-500">
              <span class="float-right">
                <Icon icon="fa6-solid:angle-down" />
              </span>
            </span>
          </button>
          <div class="panel hidden">
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Coming Soon
            </button>
          </div>
        </router-link>
      </div>
      <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="clarity:form-line" /></span>
            <span class="w-full"> Form Layout </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      <div class="item mt-3">
        <router-link to="/">
          <button
            class="accordion text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="mdi:form-textbox" /></span>
            <span class="w-full"> Form Editor </span>
            <span class="box-border mt-1 text-gray-500">
              <span class="float-right">
                <Icon icon="fa6-solid:angle-down" />
              </span>
            </span>
          </button>
          <div class="panel hidden">
            <button class="w-full text-left rounded-md p-3 hover:bg-gray-100">
              Coming Soon
            </button>
          </div>
        </router-link>
      </div>
      <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="bi:table" /></span>
            <span class="w-full"> Table </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
      <div class="item mt-3">
        <router-link to="/">
          <button
            class="text-gray-800 bg-transparent hover:bg-gray-100 w-full flex text-left rounded-md box-border p-3"
          >
            <span class="mr-3 text-xl"><Icon icon="carbon:data-table" /></span>
            <span class="w-full"> DataTables </span>
            <span class="box-border mt-1 text-gray-500"> </span>
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<style>
  .active {
  }
</style>
<script>
  import { Icon } from "@iconify/vue";
  export default {
    components: {
      Icon,
    },
    methods: {
      sidebarToggle: function () {
        document.querySelector(".flex-sidebar").classList.toggle("hide");
      },
    },
    mounted() {},
  };
</script>
