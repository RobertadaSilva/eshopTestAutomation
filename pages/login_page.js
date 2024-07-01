const { I } = inject();

module.exports = {

  fields:{
    userName: '#user-name',
    password: '#password'
  },
  button:{
    loginButton: '#login-button'
  },
  message:{},
  labels:{
    titleProductsPage: '//span[@class="title"]'
  },


makeLoginWithSuccess() {
    I.fillField(this.fields.userName, 'standard_user')
    I.fillField(this.fields.password, 'secret_sauce')

    I.click(this.button.loginButton)

    I.waitForElement(this.labels.titleProductsPage, 10)
    I.see('Products')
  }
}
