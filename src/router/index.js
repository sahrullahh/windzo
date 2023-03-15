import { createRouter, createWebHistory } from "vue-router";
var appname = " - Windzo Dashboard Admin Template";

const routes = [
  // Routes
  {
    path: "/",
    name: "Dashboard",
    component: import("../views/Dashboard.vue"),
    meta: { title: "Dashboard " + appname },
  },

  // Components based Routes
  {
    path: "/component/alert",
    name: "Valert",
    component: import("../views/components/alert.vue"),
    meta: { title: "Alert" + appname },
  },
  {
    path: "/component/accordion",
    name: "Vaccordion",
    component: import("../views/components/accordion.vue"),
    meta: { title: "Accordion" + appname },
  },
  {
    path: "/component/badge",
    name: "Vbadge",
    component: import("../views/components/badges.vue"),
    meta: { title: "Badge" + appname },
  },
  {
    path: "/component/breadcumb",
    name: "Vbreadcumb",
    component: import("../views/components/breadcumbs.vue"),
    meta: { title: "Breadcumb" + appname },
  },
  {
    path: "/component/button",
    name: "Vbutton",
    component: import("../views/components/button.vue"),
    meta: { title: "Button" + appname },
  },
  {
    path: "/component/card",
    name: "Vcard",
    component: import("../views/components/card.vue"),
    meta: { title: "Card" + appname },
  },
  {
    path: "/component/dropdown",
    name: "Vdropdown",
    component: import("../views/components/dropdown.vue"),
    meta: { title: "Dropdown" + appname },
  },
  // layouts
  {
    path: "/auth/login",
    name: "Login",
    component: import("../views/layouts/auth/Login.vue"),
    meta: { title: "Login" + appname, hideNav: true },
  },
  // layout/error
  // default page 404
  {
    path: "/:pathMatch(.*)*",
    name: "Page404",
    component: import("../views/layouts/error/404.vue"),
    meta: { title: "Upps! 404" + appname, hideNav: true },
  },
  {
    path: "/500",
    name: "Page500",
    component: import("../views/layouts/error/500.vue"),
    meta: { title: "Server internal Error" + appname, hideNav: true },
  },
  {
    path: "/maintenance",
    name: "maintenanc",
    component: import("../views/layouts/error/maintenance.vue"),
    meta: {
      title: "Sorry the app has been Maintenance" + appname,
      hideNav: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
