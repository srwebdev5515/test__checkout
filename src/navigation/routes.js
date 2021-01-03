import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Products } from '../screens/Products'
import { Carts } from '../screens/Carts'

export const BASE_ROUTES = {
  products: '/',
  cart: '/cart',
}

const BaseRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={BASE_ROUTES.products} component={Products} />
      <Route exact path={BASE_ROUTES.carts} component={Carts} />
    </Switch>
  </BrowserRouter>
)

export default BaseRoutes
