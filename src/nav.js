const navBar = {
    create: function(){
        this.nav = document.createElement('ul')

        this.nav.classList.add('nav')

        this.homeTab = document.createElement('li')
        this.menuTab = document.createElement('li')
        this.contactTab = document.createElement('li')

        this.homeTab.textContent = 'Home'
        this.menuTab.textContent = 'Menu'
        this.contactTab.textContent = 'Contact'

        this.tabs = [this.homeTab, this.menuTab, this.contactTab]

        this.tabs.forEach(tab => {
            navBar.nav.appendChild(tab)
        })

        this.tabs.forEach(tab => {
            tab.classList.add('nav__tab')
        })


        return this.nav
    },

    getTabs: function(){
        return this.tabs
    }
}

export default navBar