const { I } = inject();

module.exports = {

  fields:{},
  button:{
    productJacket: '(//button[text() = "Add to cart"])[4]',
    productTshirt: '(//button[text() = "Add to cart"])[6]'
  },
  message:{},
  labels:{},

addNewProductInCart(){
    I.click(this.button.productJacket)
    I.waitForClickable(this.button.productTshirt)
    I.click(this.button.productTshirt)

  }
}



// fields:{},
// button:{},
// message:{},
// labels:{},