import React from 'react'
import { View } from 'react-native';
import { Button, Input, Layout, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import { InputComponent } from '@ui-kitten/components/ui/input/input.component';
import { Dropdown } from 'react-native-material-dropdown';

import { KeyboardAvoidingView } from '../../components/avoidingview';
import themedStyles from './style';

export default ({ navigation }): React.ReactElement => {

  const [username, setUsername] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [conpassword, setConfirmPassword] = React.useState<string>();
  const [phonenumber, setPhoneNumber] = React.useState<string>();

  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);
  const [conpasswordVisible, setConPasswordVisible] = React.useState<boolean>(false);

  const [userFocus, setUserFocus] = React.useState<boolean>(false);
  const [passFocus, setPassFocus] = React.useState<boolean>(false);

  const checkUsername = username && username.length > 0;
  const checkPassword = password && password.length > 0;
  const confirmPassword = password == conpassword;
  const checkPhone = phonenumber && phonenumber.length > 8;

  const styles = useStyleSheet(themedStyles);
  const InputPassword = React.createRef<InputComponent>();
  const InputConPassword = React.createRef<InputComponent>();
  const InputPhone = React.createRef<InputComponent>();
  
  const EyeIcon = (style) => (
    <Icon {...style} name='eye'/>
  );
  
  const EyeOffIcon = (style) => (
    <Icon {...style} name='eye-off'/>
  );
  
  const PersonIcon = (style) => (
    <Icon {...style} name='person'/>
  );

  let phoneList = [{
    label: 'Thailand (+66)',
    value: '+66',
  }, {
    label: 'China (+86)',
    value: '+86',
  }];

  return (
    <KeyboardAvoidingView style={styles.container}>
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
          onIconPress={(): void => { setPasswordVisible(!passwordVisible) }}
          returnKeyType='next'
          status={!passFocus || checkPassword ? 'default' : 'danger'}
          caption={!passFocus || checkPassword ? '' : 'Can not be empty'}
          onFocus={() => { setPassFocus(true); }}
          onSubmitEditing={() => InputConPassword.current.focus() }
        />
        <View style={styles.drawLine} />
        <Text style={styles.formLabel}>Confirm Password:</Text>
        <Input
          ref={InputConPassword}
          disabled={!checkPassword}
          style={styles.formInput}
          placeholder='Confirm Password'
          icon={conpasswordVisible ? EyeIcon : EyeOffIcon}
          value={conpassword}
          secureTextEntry={!conpasswordVisible}
          onChangeText={setConfirmPassword}
          onIconPress={(): void => { setConPasswordVisible(!conpasswordVisible) }}
          returnKeyType='next'
          status={confirmPassword ? 'success' : 'danger'}
          caption={confirmPassword ? '' : 'Password mismatch'}
          onSubmitEditing={() => InputPhone.current.focus() }
        />
      </Layout>
      <Layout style={styles.layoutPhone}>
        <Text style={styles.formLabel}>Phone Number:</Text>
        <Layout style={styles.flexLayout}>
          <View style={styles.viewRow}>
            <Dropdown
              data={phoneList}
              value='+66'
              inputContainerStyle={{ borderBottomWidth: 0}}
              fontSize={14}
            />
          </View>
          <View style={styles.drawLineUp}></View>
          <Input
            ref={InputPhone}
            keyboardType='phone-pad'
            style={styles.phoneText}
            placeholder='Phone number'
            value={phonenumber}
            onChangeText={setPhoneNumber}
            maxLength={9}
          />
        </Layout>
      </Layout>
      <Button
          style={styles.nextButton}
          size='giant'
          disabled={!checkUsername || !checkPassword || !confirmPassword || !checkPhone}
          onPress={(): void => { navigation && navigation.navigate('Opt', { screen: "creatAccount" }) }}>
          NEXT
      </Button>
    </KeyboardAvoidingView>
  );
};