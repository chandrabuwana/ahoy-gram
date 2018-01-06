import React from 'react'
import { StackNavigator} from 'react-navigation'
import Login from './login'
import Photo from './photo'

const RootNavigator = StackNavigator({
  Login : {
    screen: Login,
    navigationOptions:{
      headerTitle: 'Login Page'
    }
  },
  Photo: {
    screen: Photo,
    navigationOptions:{
      headerTitle: 'Ini halaman Photo'
    }
  }
})

export default RootNavigator