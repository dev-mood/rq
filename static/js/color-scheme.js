// If `prefers-color-scheme` is not supported, fall back to light mode.
// In this case, dark.css will be downloaded with `highest` priority.
if (window.matchMedia('(prefers-color-scheme: light)').media === 'not all') {
  document.documentElement.style.display = 'none'
  document.head.insertAdjacentHTML(
    'beforeend',
    '<link rel="stylesheet" href="/css/dark.css" onload="document.documentElement.style.display = \'\'">'
  )
}
