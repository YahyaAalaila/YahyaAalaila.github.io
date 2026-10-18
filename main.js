document.body.classList.add('js');

document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const citation = document.getElementById(button.dataset.copy)?.textContent;
    const status = document.querySelector('.citation-status');
    if (!citation) return;
    try {
      await navigator.clipboard.writeText(citation);
      button.textContent = 'Copied!';
      if (status) status.textContent = `${button.getAttribute('aria-label').replace('Copy ', '')} copied to clipboard.`;
      setTimeout(() => { button.textContent = 'Copy citation'; }, 2500);
    } catch {
      button.textContent = 'Select citation to copy';
      if (status) status.textContent = 'Clipboard access is unavailable. Select the citation text above to copy it.';
    }
  });
});
