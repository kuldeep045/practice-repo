function addLang (lang){
    const li = document.createElement('li')
    li.innerHTML = `${lang}`
    document.querySelector('ul').appendChild(li)
}
addLang('typescript')
addLang('python')


function addOptiLang (lang) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(lang))
    document.querySelector('ul').appendChild(li)

}
addOptiLang('java')

//edit
const seclang = document.querySelector('li:nth-child(2)')
const newLi = document.createElement('li')
newLi.textContent = 'mojo'
seclang.replaceWith(newLi)

const last = document.querySelector('li:last-Child')
last.remove()