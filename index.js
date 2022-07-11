const DEFAULT_ENV_VARIABLE_NAME = "GITHUB_SHA";

const htmlspecialchars = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
};

let GITHUB_SHA = "";

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
    config: function (config) {
      const environmentVariableName =
        config.pluginsConfig["github-sha"].environmentVariableName ||
        DEFAULT_ENV_VARIABLE_NAME;
      GITHUB_SHA = htmlspecialchars(
        (process.env[environmentVariableName] || "").slice(0, 8)
      );
      return config;
    },
  },
};
