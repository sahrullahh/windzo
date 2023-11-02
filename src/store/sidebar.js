import { defineStore } from "pinia";

// this is sidebar data s
// if your adding a router or link add data use object
// here

export const useSidebar = defineStore({
  state: () => ({
    menu: [
      {
        name: "MENU",
        children: [
          {
            name: "Dashboard",
            icon: "bxs:dashboard",
            type: "default",
            url: "/",
          },
          {
            name: "Components",
            icon: "",
            type: "accordion",
            url: false,
            isChildren: true,
            children: [
              {
                name: "Alert",
                icon: false,
                type: "default",
              },
            ],
          },
        ],
      },
    ],
  }),
});
