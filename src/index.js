import header from "./header"
import navBar from "./nav"
import home from "./home"
import menu from "./menu"
import contact from "./contact"

const contentDiv = document.querySelector('#content')
contentDiv.appendChild(header.create())
contentDiv.appendChild(navBar.create())

const tabs = navBar.getTabs()

window.onload = start()

tabs.forEach(tab => {
    tab.addEventListener('click', function(){
        if (tab.textContent === 'Home'){
            clearSection()
            clearActive()
            tab.classList.add('active')
            contentDiv.appendChild(home.create())
        }
        if (tab.textContent === "Menu"){
            clearSection()
            clearActive()
            tab.classList.add('active')
            contentDiv.appendChild(menu.create())
        }
        if (tab.textContent === "Contact"){
            clearSection()
            clearActive()
            tab.classList.add('active')
            contentDiv.appendChild(contact.create())
        }
        
    })
})

function clearSection(){
    if(contentDiv.childNodes.length > 2){
        let lastChild = contentDiv.childNodes[contentDiv.childNodes.length - 1]
        contentDiv.removeChild(lastChild)
    }
}

function clearActive(){
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
}

function start(){
    tabs[0].classList.add('active')
    contentDiv.appendChild(home.create())
}
