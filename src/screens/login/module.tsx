import React from 'react'
import { View, Image } from 'react-native';
import { Button, Input, Layout, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import { InputComponent } from '@ui-kitten/components/ui/input/input.component';

import { KeyboardAvoidingView } from '../../components/avoidingview';
import themedStyles from './style';

import 'localstorage-polyfill'

export default ({ navigation }): React.ReactElement => {

  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const [userFocus, setUserFocus] = React.useState<boolean>(false);
  const [passFocus, setPassFocus] = React.useState<boolean>(false);

  const checkUsername = username && username.length > 0;
  const checkPassword = password && password.length > 0;
  
  const styles = useStyleSheet(themedStyles);
  const InputPassword = React.createRef<InputComponent>();
  
  const EyeIcon = (style) => (
    <Icon {...style} name='eye'/>
  );
  
  const EyeOffIcon = (style) => (
    <Icon {...style} name='eye-off'/>
  );
  
  const PersonIcon = (style) => (
    <Icon {...style} name='person'/>
  );

  const onLoginPress = (): void => {
    navigation && navigation.navigate('Wallet');
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/logo/logo.png')} />
        <Text style={styles.logoText}>
          iCAFE HUB
        </Text>
      </View>
      <Layout style={styles.formContainer}>
        <Text style={styles.formLabel}>Username:</Text>
        <Input
          style={styles.formInput}
          placeholder='Username'
          icon={PersonIcon}
          value={username}
          onChangeText={setUsername}
          returnKeyType='next'
          status={!userFocus || checkUsername ? 'default' : 'danger'}
          caption={!userFocus || checkUsername ? '' : 'Can not be empty'}
          onFocus={() => { setUserFocus(true); }}
          onSubmitEditing={() => InputPassword.current.focus() }
        />
        <View style={styles.drawLine} />
        <Text style={styles.formLabel}>Password:</Text>
        <Input
          ref={InputPassword}
          style={styles.formInput}
          placeholder='Password'
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={password}
          secureTextEntry={!passwordVisible}
          onChangeText={setPassword}
          status={!passFocus || checkPassword ? 'default' : 'danger'}
          caption={!passFocus || checkPassword ? '' : 'Can not be empty'}
          onFocus={() => { setPassFocus(true); }}
          onIconPress={(): void => { setPasswordVisible(!passwordVisible) }}
        />
      </Layout>
      <View style={styles.forgotPasswordContainer}>
          <Button
            style={styles.forgotPasswordButton}
            textStyle={styles.ghostStlye}
            appearance='ghost'
            onPress={(): void => { navigation && navigation.navigate('Forgot_password', ) }}>
            Forgot password?
          </Button>
      </View>
      <Button size='giant' disabled={!checkUsername || !checkPassword} onPress={onLoginPress}>
        SIGN IN
      </Button>
      <Button
        style={styles.formPhone}
        textStyle={styles.ghostStlye}
        appearance='ghost'
        onPress={(): void => { navigation && navigation.navigate('Phone_Login') }}>
        Phone Number Login
      </Button>
      <View style={styles.formSignUp}>
        <Text>Don't have an account?</Text>
        <Button
          appearance='ghost'
          textStyle={styles.ghostStlye}
          onPress={(): void => { navigation && navigation.navigate('Sign_up') }}>
          Create an account
        </Button>
      </View>
    </KeyboardAvoidingView>
  );
};