const pages = [
  { id: 1, title: "NodePress" },
  { id: 2, title: "Showcase" },
  { id: 3, title: "Learn" },
  { id: 4, title: "Themes" },
  { id: 5, title: "Plugins" },
  { id: 6, title: "Support" },
];
export default {
  getPageById: (id) => {
    return new Promise((resolve) => {
      const res = pages.filter((item) => item.id == id);
      if (res.length > 0) {
        resolve(res[0]);
        return;
      }
      resolve(null);
    });
  },
};
