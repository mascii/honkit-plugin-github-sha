const DEFAULT_ENV_VARIABLE_NAME = "GITHUB_SHA";
const DEFAULT_HASH_BYTE_LENGTH = 4;

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
      page.content = `<template id="github_sha">${GITHUB_SHA}</template>${page.content}`;
      return page;
    },
    config: function (config) {
      const pluginConfig = config.pluginsConfig["github-sha"];
      const environmentVariableName =
        pluginConfig.environmentVariableName || DEFAULT_ENV_VARIABLE_NAME;
      const hashByteLength =
        pluginConfig.hashByteLength || DEFAULT_HASH_BYTE_LENGTH;

      GITHUB_SHA = htmlspecialchars(
        (process.env[environmentVariableName] || "").slice(
          0,
          2 * hashByteLength
        )
      );
      return config;
    },
  },
};
