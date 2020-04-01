import React from 'react'
import { Dropdown } from 'react-native-material-dropdown';
import { View, Image } from 'react-native';
import { Button, Layout, Text, Input, useStyleSheet } from '@ui-kitten/components';

import { KeyboardAvoidingView } from '../../components/avoidingview';
import themedStyles from './style';

export default ({ navigation }): React.ReactElement => {

  const [phone, setPhone] = React.useState<string>();
  const checkPhone = phone && phone.length > 8;

  const styles = useStyleSheet(themedStyles);
  
  let phoneList = [{
    label: 'Thailand (+66)',
    value: '+66',
  }, {
    label: 'China (+86)',
    value: '+86',
  }];

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={require('../../assets/images/logo/logo.png')} />
        <Text style={styles.logoText}>
          iCAFE HUB
        </Text>
      </View>
      <Layout style={styles.formContainer}>
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
              keyboardType='phone-pad'
              style={styles.phoneText}
              placeholder='Phone number'
              value={phone}
              onChangeText={setPhone}
              maxLength={9}
            />
        </Layout>
      </Layout>
      <Button
        style={styles.confirmButton}
        size='giant'
        disabled={!checkPhone}
        onPress={(): void => { navigation && navigation.navigate('Opt', { screen: "login" }) }}>
        SIGN IN
      </Button>
      <Button
        appearance='ghost'
        textStyle={styles.ghostStlye}
        onPress={(): void => { navigation && navigation.goBack() }}>
        Login by Email
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