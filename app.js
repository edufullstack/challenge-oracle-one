const encriptado = (texto) => {
  let encriptado = texto.split('').map((letra) => {
    switch (letra) {
      case 'a':
        letra = 'ai'
        return letra
      case 'e':
        letra = 'enter'
        return letra
      case 'i':
        letra = 'imes'
        return letra
      case 'o':
        letra = 'ober'
        return letra
      case 'u':
        letra = 'ufat'
        return letra
      default:
        return letra
    }
  })
  return encriptado.join('')
}

document.getElementById('encriptar-btn').addEventListener('click', function () {
  const texto = document.getElementById('texto').value
  const resultado = encriptado(texto)
  const boxResultado = document.getElementById('resultado')
  boxResultado.innerHTML = resultado
})

const desencriptar = (texto) => {
  let normalizado = texto.split('')
  let normal = []
  for (let i = 0; i < texto.length; i++) {
    let ai = normalizado[i].concat(normalizado[i + 1])
    let enter = normalizado.slice(i, i + 5).join('')
    let imes = normalizado.slice(i, i + 4).join('')
    let ober = normalizado.slice(i, i + 4).join('')
    let ufat = normalizado.slice(i, i + 4).join('')

    if (ai === 'ai') {
      ai = 'a'
      normal.push(ai)
      i++
    } else if (enter === 'enter') {
      enter = 'e'
      normal.push(enter)
      i++
      i++
      i++
      i++
    } else if (imes === 'imes') {
      imes = 'i'
      normal.push(imes)
      i++
      i++
      i++
    } else if (ober === 'ober') {
      ober = 'o'
      normal.push(ober)
      i++
      i++
      i++
    } else if (ufat === 'ufat') {
      ufat = 'u'
      normal.push(ufat)
      i++
      i++
      i++
    } else {
      normal.push(normalizado[i])
    }
  }

  return normal.join('')
}

document
  .getElementById('desencriptar-btn')
  .addEventListener('click', function () {
    const texto = document.getElementById('texto').value
    const resultado = desencriptar(texto)
    const elementoResultado = document.getElementById('resultado')
    elementoResultado.innerHTML = resultado
  })

// seleccionar el div que contiene el texto
const resultadoDiv = document.getElementById('resultado')

// crear una nueva instancia de MutationObserver
const observer = new MutationObserver(() => {
  // obtener el contenido actual del div
  const contenido = resultadoDiv.textContent.trim()

  if (contenido === '') {
    document.querySelector('img').style.display = 'block'
  } else {
    document.querySelector('img').style.display = 'none'
  }
})

// configurar el observer para observar cambios en el contenido del div
observer.observe(resultadoDiv, { childList: true })
