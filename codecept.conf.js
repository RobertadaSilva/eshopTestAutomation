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
  name: 'eshopTestAutomation'
}