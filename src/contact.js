import addressImg from './address-img.png'


const contact = {
    create: function(){
        this.contactPage = document.createElement('section')
        this.contactPage.classList.add('tab__contact', 'tab')

        const phoneNum = document.createElement('p')
        phoneNum.classList.add('contact__number')
        phoneNum.textContent = '+7 (917) 707 15 72'
        this.contactPage.appendChild(phoneNum)

        const address = new Image()
        address.src = addressImg
        address.classList.add('contact__image')
        this.contactPage.appendChild(address)

        const addressStreet = document.createElement('p')
        addressStreet.classList.add('contact__street')
        addressStreet.textContent = '19, Gagarina Street'
        this.contactPage.appendChild(addressStreet)

        return this.contactPage
    }

}

export default contact