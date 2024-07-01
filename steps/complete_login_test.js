const {I, login_page, add_new_product_in_cart } = inject()

Feature('A complete process of buying itens');

Scenario('Login with Success', async () => {
  
    I.amOnPage('/')
    login_page.makeLoginWithSuccess()
    pause()
    add_new_product_in_cart.addNewProductInCart()

});

