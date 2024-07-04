const { faker } = require ('@faker-js/faker');
const { I } = inject();
const add_new_product_in_cart = require('./add_new_product_in_cart');


module.exports = {

  fields:{
    itensDescription: '.cart_desc_label',
    qtdItens: '.shopping_cart_badge',
    firstName: '#first-name',
    lastName: '#last-name',
    zipCode: '#postal-code'
  },

  button:{
    iconeCart: '#shopping_cart_container',
    buttoncheckout: '#checkout',
    buttonContinue: '#continue'
  },

  message:{},

  labels:{
    titlePageCheckout: '.header_secondary_container',
    titlePageOverview: '.header_secondary_container'
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

  }
}

// fields:{},
// button:{},
// message:{},
// labels:{}
