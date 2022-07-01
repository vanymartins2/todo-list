const inputEl = document.getElementById('input')
const checkbox = document.createElement('input')
const btnEl = document.getElementById('adicionar')

const adicionarTarefa = () => {
  const form = document.getElementById('list')

  const label = document.createElement('label')

  //create checkbox
  checkbox.type = 'checkbox'
  checkbox.name = 'item'

  //create label for checkbox
  label.htmlFor = checkbox.name
  label.textContent = inputEl.value

  //append to element
  form.appendChild(checkbox)
  form.appendChild(label)
  form.innerHTML += `<br/>`
  inputEl.value = ''
}

btnEl.onclick = e => {
  e.preventDefault()
  adicionarTarefa()
}
