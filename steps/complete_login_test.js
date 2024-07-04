const {I, login_page, add_new_product_in_cart, yourCart_page } = inject()

Feature('A complete process of buying itens');

Scenario('Login with Success', async () => {
  
    I.amOnPage('/')
    login_page.makeLoginWithSuccess()
    add_new_product_in_cart.addNewProductInCart()
    yourCart_page.seeMyCart()
    yourCart_page.checkoutwithSuccess()

});


