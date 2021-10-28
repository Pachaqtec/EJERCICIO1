import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Hero from './Hero/index'
import Home from './Home/index'
import Otros from './Otros/Otros'
import Hola from './Hola/Hola'
import Chau from './Chau/Chau'

import View from '../layout/View'

const RouterApp = () => {
  return (
    <View>
      <Switch>
        <Route path="/hero" component={Hero} />
        <Route exact path="/" component={Home} />
        <Route path="/otros" component={Otros} />
        <Route path="/hola" component={Hola} />
        <Route path="/chau" component={Chau} />
      </Switch>
    </View>
  )
}

export default RouterApp
