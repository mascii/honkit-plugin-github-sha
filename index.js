const htmlspecialchars = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

const GITHUB_SHA = htmlspecialchars((process.env.GITHUB_SHA || "").slice(0, 8));

module.exports = {
  website: {
    assets: "./assets",
    js: ["plugin.js"],
  },
  hooks: {
    page: function (page) {
      page.content =
        `<template id="github_sha">${GITHUB_SHA}</template>` + page.content;
      return page;
    },
  },
};
