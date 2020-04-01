import React from 'react'
import { Button, Layout, Text, Input, useStyleSheet, Icon } from '@ui-kitten/components';

import { KeyboardAvoidingView } from '../../components/avoidingview';
import themedStyles from './style';
import { Alert } from 'react-native';

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const ArrowBack = () => (
    <Icon width={36} height={36} fill='black' name='arrow-back'/>
  );
  
  const onPressResend = () => {
    if(navigation.getParam('screen') == 'creatAccount'){
      navigation && navigation.navigate('Terms')
    } else if(navigation.getParam('screen') == 'resetPassword') {
      navigation && navigation.navigate('Reset_password')
    } else {
      navigation && navigation.navigate('Wallet')
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Layout style={styles.layoutOtp}>
        <Text>Enter your OTP</Text>
        <Layout style={styles.gridOtp}>
        <Input textStyle={styles.inputText} style={styles.inputStyle} maxLength={1} placeholder='•'/>
        <Input textStyle={styles.inputText} style={styles.inputStyle} maxLength={1} placeholder='•'/>
        <Input textStyle={styles.inputText} style={styles.inputStyle} maxLength={1} placeholder='•'/>
        <Input textStyle={styles.inputText} style={styles.inputStyle} maxLength={1} placeholder='•'/>
        <Input textStyle={styles.inputText} style={styles.inputStyle} maxLength={1} placeholder='•'/>
        <Input textStyle={styles.inputText} style={styles.inputStyle} maxLength={1} placeholder='•'/>
        </Layout>
      </Layout>
      <Layout style={styles.layoutNum}>
        <Button style={styles.numButton} textStyle={styles.numFont}>1</Button>
        <Button style={styles.numButton} textStyle={styles.numFont}>2</Button>
        <Button style={styles.numButton} textStyle={styles.numFont}>3</Button>
      </Layout>
      <Layout style={styles.layoutNum}>
        <Button style={styles.numButton} textStyle={styles.numFont}>4</Button>
        <Button style={styles.numButton} textStyle={styles.numFont}>5</Button>
        <Button style={styles.numButton} textStyle={styles.numFont}>6</Button>
      </Layout>
      <Layout style={styles.layoutNum}>
        <Button style={styles.numButton} textStyle={styles.numFont}>7</Button>
        <Button style={styles.numButton} textStyle={styles.numFont}>8</Button>
        <Button style={styles.numButton} textStyle={styles.numFont}>9</Button>
      </Layout>
      <Layout style={styles.layoutNum}>
        <Button style={styles.hideButton} disabled={true}/>
        <Button style={styles.numButton} textStyle={styles.numFont}>0</Button>
        <Button style={styles.numButton} textStyle={styles.numFont} icon={ArrowBack} />
      </Layout>
      <Layout style={styles.formResend}>
        <Button
          appearance='ghost'
          textStyle={styles.ghostStlye}
          onPress={onPressResend}>
          Resend
        </Button>
      </Layout>
    </KeyboardAvoidingView>
  );
};