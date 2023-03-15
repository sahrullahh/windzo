<template>
  <transition
    name="fade"
    mode="out-in"
  >
    <div
      v-if="!close"
      :id="_id"
      :aria-close="!close"
      :aria-controls="`${_id}`"
      class="flex justify-between py-3 px-5 w-full box-border rounded-md"
    >
      <div class="flex">
        <span class="text-2xl mr-3">
          <slot name="icon"></slot>
        </span>
        <div>
          <h2 class="text-xl font-bold">
            <slot name="heading"></slot>
          </h2>
          <p>
            <slot name="content"></slot>
          </p>
        </div>
      </div>
      <button
        v-if="actionClose"
        class="text-2xl"
        @click="closeAlert"
      >
        <Icon icon="la:times" />
      </button>
    </div>
  </transition>
</template>
<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
<script>
  import { Icon } from "@iconify/vue";
  let _alertid = 0;
  export default {
    props: {
      background: {
        type: String,
        default: "",
      },
      demo: {
        type: Boolean,
        default: false,
      },
      border: {
        type: Boolean,
        default: false,
      },
      borderColor: {
        type: String,
      },
      textColor: {
        type: String,
      },
      actionClose: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      _alertid += 1;
      return {
        close: false,
        _id: `alert-id-${_alertid}`,
      };
    },
    components: {
      Icon,
    },
    methods: {
      demoAlert() {
        setTimeout(() => {
          this.close = false;
        }, 2000);
      },
      closeAlert() {
        this.close = true;
        if (this.demo == true) {
          this.demoAlert();
        }
      },
    },
    mounted() {},
  };
</script>
