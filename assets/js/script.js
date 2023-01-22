const body = document.querySelector('body')
const container = document.querySelector('.container')
const addTarefa = document.querySelector('.addTarefa')
const btnAddTarefa = document.querySelector('.btnAddTarefa')
const listTarefas = document.querySelector('.listTarefas')
const inputNovaTarefa = document.querySelector('.addTarefa')

//adicionando evento no botão principal

btnAddTarefa.addEventListener('click', adicionandoTarefa)
inputNovaTarefa.addEventListener('keypress', enterAdicionandoTarefa)

function enterAdicionandoTarefa(e) {

if(e.key === 'Enter') {

adicionandoTarefa()

}

}

function adicionandoTarefa() {

//declarando uma váriavel para o que for digitado

let nomeTarefa = addTarefa.value

//criando a tag 'li'

let listNovaTarefa = document.createElement('li')
listNovaTarefa.classList.add('listItem')

//Inserindo a tag 'li' e colocando condição para que tenha mais de um dígito.

if(addTarefa.value.length > 0) {

listTarefas.appendChild(listNovaTarefa)

} else {

alert('Campo adicionar tarefas vázio!')

}
console.log(document.querySelectorAll('.listItem').length)
//atualização scroll do container


if(document.querySelectorAll('.listItem').length > 5) container.style.overflowY = 'scroll'
        

//criando e inserindo a 'span'

let textAddTarefa = document.createElement('span')
textAddTarefa.classList.add('textTarefa')
listNovaTarefa.appendChild(textAddTarefa)

//inserindo o valor digitado na 'li'

textAddTarefa.textContent = nomeTarefa


//resetando o input principal

addTarefa.value = ''

//criando div para inserir actionEdit e actionDelete

let containerActions = document.createElement('div')
containerActions.classList.add('containerActions')
listNovaTarefa.appendChild(containerActions)

//criando e inserindo evento para actionEdit para editar tarefas

let actionEdit = document.createElement('button')
actionEdit.classList.add('actions')
actionEdit.classList.add('actionEdit')
containerActions.appendChild(actionEdit)
actionEdit.addEventListener('click', editando => {

let backgroundEdit = document.createElement('div')
backgroundEdit.classList.add('backgroundEdit')
let boxEdit = document.createElement('div')
boxEdit.classList.add('boxEdit')

body.appendChild(backgroundEdit)
body.appendChild(boxEdit)


let closeEdit = document.createElement('button')
closeEdit.classList.add('closeEdit')
let titleEdit = document.createElement('h1')
titleEdit.classList.add('titleEdit')
titleEdit.innerHTML = 'Editar'
let inputEdit = document.createElement('input')
inputEdit.setAttribute('maxlength', '50')
inputEdit.classList.add('inputEdit')
inputEdit.value = textAddTarefa.textContent
let btnEdit = document.createElement('button')
btnEdit.classList.add('btnEdit')
btnEdit.textContent = 'Salvar'

boxEdit.appendChild(closeEdit)
boxEdit.appendChild(titleEdit)
boxEdit.appendChild(inputEdit)
boxEdit.appendChild(btnEdit)

backgroundEdit.addEventListener('click', fechandoEdit => {

body.removeChild(backgroundEdit)
body.removeChild(boxEdit)

})

closeEdit.addEventListener('click', fechandoEdit => {

body.removeChild(backgroundEdit)
body.removeChild(boxEdit)

})

btnEdit.addEventListener('click', salvandoEdit => {

textAddTarefa.textContent = inputEdit.value
body.removeChild(backgroundEdit)
body.removeChild(boxEdit)

})

})

//criando e inserindo evento para actionDelete para excluir tarefas

let actionDelete = document.createElement('button')
actionDelete.classList.add('actions')
actionDelete.classList.add('actionDelete')
containerActions.appendChild(actionDelete)


actionDelete.addEventListener('click', deletando => {

let result = confirm('Você realmente quer deletar permanentemente este item?')

if(result == true) {

listTarefas.removeChild(listNovaTarefa)

}


})
}
