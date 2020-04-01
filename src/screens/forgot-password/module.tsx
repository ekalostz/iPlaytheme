import React from 'react'
import { View, TextInput } from 'react-native';
import { Button, Layout, Text, useStyleSheet } from '@ui-kitten/components';
import { Dropdown } from 'react-native-material-dropdown';

import { KeyboardAvoidingView } from '../../components/avoidingview';
import themedStyles from './style';

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const [phone, setPhone] = React.useState<string>();
  const checkPhone = phone && phone.length > 8;

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
        <Text style={styles.formLabel}>Please enter your phone number that registered on iCafe Hub Application for reset password.</Text>
        <View style={styles.drawLine} />
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
          <View style={styles.drawLineUp} />
          <TextInput
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
          style={styles.nextButton}
          size='giant'
          disabled={!checkPhone}
          onPress={(): void => { navigation && navigation.navigate('Opt', { screen: "resetPassword" }) }}>
          RESET PASSWORD
      </Button>
    </KeyboardAvoidingView>
  );
};