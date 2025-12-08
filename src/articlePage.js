document.addEventListener("DOMContentLoaded", () => {
  const copyBtn = document.querySelector("[data-copy-link]");
  if (!copyBtn || !navigator.clipboard) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      const originalText = copyBtn.textContent;
      copyBtn.textContent = "Link copied!";
      copyBtn.disabled = true;

      setTimeout(() => {
        copyBtn.textContent = originalText;
        copyBtn.disabled = false;
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Could not copy the link. Please copy it manually.");
    }
  });
});
