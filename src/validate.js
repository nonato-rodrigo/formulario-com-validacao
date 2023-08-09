let todosInputs = document.querySelectorAll('.input-texto')

let botao = document.querySelector('.botao')

let erro = document.querySelectorAll('.erro')

botao.addEventListener('click', () => {
    todosInputs.forEach(input => {
        erro.forEach(item => {

            if (input.value === '') {
                input.classList.add('borda-vermelha')
                item.innerHTML = `campo obrigatorio`

            } else if (input !== '') {
                input.classList.remove('borda-vermelha')
                item.innerHTML = ``
            }
        })
    })
})