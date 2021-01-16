import React from 'react';
import { connect } from 'react-redux'
import { setCurrentUser} from './redux/user/user.actions'

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
 

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {

         setCurrentUser({id:snapShot.id, ...snapShot.data()})
          
          
        })
      } else {
        // si no hay usuario, lo almacenaremos como NULL en el estado del componente
        setCurrentUser(userAuth)
      }


    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInSignUp}></Route>
        </Switch>
      </div>
    );
  } 
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
