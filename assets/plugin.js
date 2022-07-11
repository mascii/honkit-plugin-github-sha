document.body.addEventListener("keydown", (e) => {
  if (e.target instanceof HTMLInputElement) {
    return;
  }

  if (e.key === "y") {
    const templateTag = document.getElementById("github_sha");
    if (templateTag) {
      const hash = templateTag.innerHTML || "github_sha_is_not_provided";

      const searchParams = new URLSearchParams(location.search);
      searchParams.set("hash", hash);

      history.replaceState(
        history.state,
        "",
        `${location.pathname}?${searchParams}`
      );
    }
  }
});
