/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type login_page = typeof import('./pages/login_page.js');
type add_new_product_in_cart = typeof import('./pages/addNewProductInCart_page.js/index.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, login_page: login_page, add_new_product_in_cart: add_new_product_in_cart }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
