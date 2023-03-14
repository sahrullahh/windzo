export const themeSidebar = (toggle) => {
  if (localStorage.getItem("sidebar-theme")) {
    if (toggle) {
      alert("dark");
      document.querySelector(".sidebar").classList.remove("bg-white");
      document.querySelector(".w-sidebar").classList.remove("bg-white");
      document.querySelector(".sidebar").classList.add("bg-gray-800");
      document.querySelector(".w-sidebar").classList.add("bg-gray-800");
      localStorage.setItem("sidebar-theme", "dark");
    } else {
      alert("light");
      document.querySelector(".sidebar").classList.add("bg-white");
      document.querySelector(".w-sidebar").classList.add("bg-white");
      document.querySelector(".sidebar").classList.remove("bg-gray-800");
      document.querySelector(".w-sidebar").classList.remove("bg-gray-800");
      localStorage.setItem("sidebar-theme", "light");
    }
  } else {
    if (
      document.querySelector(".sidebar").classList.contains("bg-white") &&
      document.querySelector(".w-sidebar").classList.contains("bg-white")
    ) {
      document.querySelector(".sidebar").classList.add("bg-white");
      document.querySelector(".w-sidebar").classList.add("bg-white");
      document.querySelector(".sidebar").classList.remove("bg-gray-800");
      document.querySelector(".w-sidebar").classList.remove("bg-gray-800");
      localStorage.setItem("sidebar-theme", "light");
    } else {
      document.querySelector(".sidebar").classList.remove("bg-white");
      document.querySelector(".w-sidebar").classList.remove("bg-white");
      document.querySelector(".sidebar").classList.add("bg-gray-800");
      document.querySelector(".w-sidebar").classList.add("bg-gray-800");
      localStorage.setItem("sidebar-theme", "dark");
    }
  }
};
export const loadSidebarMode = () => {
  const isDarkSidebar =
    localStorage.getItem("sidebar-theme") == "dark" ? true : false;

  if (localStorage.getItem("sidebar-theme")) {
    if (localStorage.getItem("sidebar-theme") === "dark") {
      document.querySelector(".sidebar").classList.remove("bg-white");
      document.querySelector(".w-sidebar").classList.remove("bg-white");
      document.querySelector(".sidebar").classList.add("bg-gray-800");
      document.querySelector(".w-sidebar").classList.add("bg-gray-800");
      localStorage.setItem("sidebar-theme", "dark");
    } else {
      document.querySelector(".sidebar").classList.remove("bg-white");
      document.querySelector(".w-sidebar").classList.remove("bg-white");
      document.querySelector(".sidebar").classList.add("bg-gray-800");
      document.querySelector(".w-sidebar").classList.add("bg-gray-800");
      localStorage.setItem("sidebar-theme", "light");
    }
    // if NOT set via local storage previously
  } else {
    if (
      document.querySelector(".sidebar").classList.contains("bg-white") &&
      document.querySelector(".w-sidebar").classList.contains("bg-white")
    ) {
      document.querySelector(".sidebar").classList.add("bg-white");
      document.querySelector(".w-sidebar").classList.add("bg-white");
      document.querySelector(".sidebar").classList.remove("bg-gray-800");
      document.querySelector(".w-sidebar").classList.remove("bg-gray-800");
      localStorage.setItem("sidebar-theme", "light");
    } else {
      document.querySelector(".sidebar").classList.remove("bg-white");
      document.querySelector(".w-sidebar").classList.remove("bg-white");
      document.querySelector(".sidebar").classList.add("bg-gray-800");
      document.querySelector(".w-sidebar").classList.add("bg-gray-800");
      localStorage.setItem("sidebar-theme", "dark");
    }
  }

  return isDarkSidebar;
};
