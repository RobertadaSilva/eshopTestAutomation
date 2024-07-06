const { faker } = require ('@faker-js/faker');
const { I } = inject();
const add_new_product_in_cart = require('./add_new_product_in_cart');
const login_page =require('./login_page');


module.exports = {

  fields:{
    itensDescription: '.cart_desc_label',
    qtdItens: '.shopping_cart_badge',
    firstName: '#first-name',
    lastName: '#last-name',
    zipCode: '#postal-code',
    total: '.summary_total_label'
  },

  button:{
    iconeCart: '#shopping_cart_container',
    buttoncheckout: '#checkout',
    buttonContinue: '#continue',
    buttonFinish: '#finish',
    buttonBackToHome: '#back-to-products',
    buttonMenu: '#react-burger-menu-btn',
    buttonLogout: "//*[contains(@id, 'logout_sidebar_link') and text()='Logout']"
  },

  message:{
    textPageFinishOrder: 'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
  },

  labels:{
    titlePageCheckout: '.header_secondary_container',
    titlePageOverview: '.header_secondary_container',
    titlePageFinishOrder: "//*[contains(@class, 'complete-header') and text()='Thank you for your order!']"
  },

seeMyCart(){
  I.seeElement(this.fields.qtdItens)
  I.click(this.button.iconeCart)

  I.waitForElement(add_new_product_in_cart.button.productTshirt, 10)
  I.seeElement(add_new_product_in_cart.button.productTshirt)
  I.seeElement(add_new_product_in_cart.button.productJacket)
  },

checkoutwithSuccess(){
    I.click(this.button.buttoncheckout)
    I.seeElement(this.labels.titlePageCheckout)

    // Fazer melhoria
    I.fillField(this.fields.firstName, faker.person.firstName())
    I.fillField(this.fields.lastName, faker.person.lastName())
    I.fillField(this.fields.zipCode, faker.location.zipCode())
    I.click(this.button.buttonContinue)


    I.seeElement(this.labels.titlePageOverview)
    I.seeElement(add_new_product_in_cart.button.productTshirt)
    I.seeElement(add_new_product_in_cart.button.productJacket)

    function totalPrice() {
      // como o preço é fixo, decidi criar uma variavel sem a necessidade de validar o produto em si
     const p1 = 49.99;
     const p2 = 15.99;
     const itemTotal = p1 + p2;
     const tax = itemTotal * 0.08;
     const total = itemTotal + tax;
     return total.toFixed(2)
    };
     
    const expectedTotal = `$${totalPrice()}`
    I.see(expectedTotal, this.fields.total)

    I.click(this.button.buttonFinish)
    I.waitForElement(this.labels.titlePageFinishOrder, 10)
    I.see(this.message.textPageFinishOrder)
    I.click(this.button.buttonBackToHome)

    
    I.seeElement(this.button.buttonMenu)
    I.click(this.button.buttonMenu)
    I.click(this.button.buttonLogout)



  
  }
}

// fields:{},
// button:{},
// message:{},
// labels:{}
