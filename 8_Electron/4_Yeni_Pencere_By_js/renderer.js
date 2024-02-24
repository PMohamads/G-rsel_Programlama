const setButton = document.getElementById('btn')
const titleInput = document.getElementById('title')
const nextpage = document.getElementById('degersayfa')
setButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})
nextpage.addEventListener('click', () => {
  
})


