import CardImage1 from './philadelphia.jpg'
import CardImage2 from './salmon-on-apple.jpg'
import CardImage3 from './avocado-and-cucumber.jpg'
import CardImage4 from './fresh-eel.jpg'
import CardImage5 from './creamy-california.jpg'

const menu = {
    create: function(){
        this.menuPage = document.createElement('section')
        this.menuPage.classList.add('tab__menu', 'tab')

        this.menuItems.forEach(item => {
            const newItem = menu.createMenuItem(item.name, item.image, item.description)

            menu.menuPage.appendChild(newItem)
        })

        return this.menuPage
    },

    createMenuItem: function(title, image,  description){
        const itemCard = document.createElement('div')
        itemCard.classList.add('menu__item')

        const itemTitle = document.createElement('h2')
        itemTitle.classList.add('item__title')
        itemTitle.textContent = title

        const itemImage = new Image()
        itemImage.src = image
        itemImage.classList.add('item__img')

        const itemDesc = document.createElement('p')
        itemDesc.classList.add('item__desc')
        itemDesc.textContent = description

        itemCard.appendChild(itemTitle)
        itemCard.appendChild(itemImage)
        itemCard.appendChild(itemDesc)

        return itemCard
    },

    menuItems: [
        {
            name: 'Philadelphia',
            image: CardImage1,
            description: 'Rice, Nori, Cream Cheese, Cucumber, Salmon',
        },
        {
            name: 'Sweet Salmon',
            image: CardImage2,
            description: 'Rice, Nori, Cream Cheese, Apple, Salmon',
        },
        {
            name: 'Fresh Avocado',
            image: CardImage3,
            description: 'Rice, Nori, Sesame, Cucumber, Avocado',
        },
        {
            name: 'Fresh Eel',
            image: CardImage4,
            description: 'Rice, Nori, Cream Cheese, Cucumber, Eel, Sesame, Unagi sauce',
        },
        {
            name: 'Creamy California',
            image: CardImage5,
            description: 'Rice, Nori, Cream Cheese, Avocado, Caviar, Crab',
        },
    ]
}

export default menu