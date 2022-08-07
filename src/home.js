import Logo from './logo.jpg'

const home = {
    create: function(){
        this.homePage = document.createElement('section')
        this.homePage.classList.add('tab__home', 'tab')

        const slogan = document.createElement('p')
        slogan.classList.add('home__slogan')
        slogan.textContent = 'Best sushi in town'
        this.homePage.appendChild(slogan)

        const logo = new Image()
        logo.src = Logo
        logo.classList.add('home__logo')
        this.homePage.appendChild(logo)
        

        return this.homePage
    }
}

export default home