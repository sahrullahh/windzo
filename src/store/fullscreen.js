import { defineStore } from "pinia";
import { fullscreen } from "@/helper/fullscreen";

export const useFullscreenMode = defineStore({
  state: () => ({
    isFullscreen: false,
  }),

  actions: {
    fullscreen,
    toggleFullscreen() {
      this.fullscreen(this.isFullscreen);
    },
  },
});
