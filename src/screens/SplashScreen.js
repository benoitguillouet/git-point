import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors'

import { NavigationActions } from 'react-navigation'

import { connect }  from 'react-redux';

const mapStateToProps = state => (
  {
    isAuthenticated: state.auth.isAuthenticated
  }
)

class Splash extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this._navigateTo('Main');
    } else {
      this._navigateTo('Login');
    }
  }

  _navigateTo = (routeName: string) => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName })]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.logoContainer}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100
  },
});

export default connect(mapStateToProps)(Splash);
