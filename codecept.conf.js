/** @type {CodeceptJS.MainConfig} */

exports.config = {
  tests: './steps/complete_login_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true,
      timeout: 3000,
    }
  },
  include: {
    I: './steps_file.js',
    login_page: "./pages/login_page.js",
    add_new_product_in_cart: "./pages/add_new_product_in_cart.js",
    yourCart_page: "./pages/yourCart_page.js"
  },

  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        admin: {
          // loginAdmin function is defined in `steps_file.js`
          login: async (I) => {
            I.fillField('#user-name', 'standard_user')
            I.fillField('#password', secret('secret_sauce'))
        
            I.click('#login-button')
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
            I.amOnPage('/');
            I.seeElement('//span[@class="title"]');
        
          }
        }
      }
    }
  },
  name: 'eshopTestAutomation'
}