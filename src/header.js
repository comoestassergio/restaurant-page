const header = {
    create: function(){
        this.logo = document.createElement('p')
        this.logo.textContent = 'Rice&Fish'
        this.logo.classList.add('header')

        return this.logo
    }
}

export default header