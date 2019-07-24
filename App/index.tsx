/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import SignUp from './Components/SignUp';

const App = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="signUp" component={SignUp} title="Sign Up" />
      </Stack>
    </Router>
  );
};

export default App;
