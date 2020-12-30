import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { Products } from '../screens/Products'

export const BASE_ROUTES = {
  products: '/',
  cart: '/cart',
}

const BaseRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={BASE_ROUTES.products} component={Products} />
    </Switch>
  </BrowserRouter>
)

export default BaseRoutes
