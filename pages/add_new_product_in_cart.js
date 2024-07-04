const { I } = inject();
const login_page = require('./login_page')

module.exports = {

  fields:{},

  button:{
    productJacket: '#item_5_title_link',
    productTshirt: '#item_3_title_link',
    addToCart: '#add-to-cart',
     backFoward: '#back-to-products'
  },

  message:{},
  
  labels:{
    titleYourCart: '.header_secondary_container'
  },

addNewProductInCart(){
    I.click(this.button.productTshirt)
    I.click(this.button.addToCart)
    I.click(this.button.backFoward)

    I.waitForElement(login_page.labels.titleProductsPage)
    I.click(this.button.productJacket)
    I.click(this.button.addToCart)
    
    I.waitForElement(this.labels.titleYourCart, 10)
    I.seeElement(this.labels.titleYourCart)
  }
}



