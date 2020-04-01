import React from 'react'
import { View, ScrollView } from 'react-native';
import { Button, Input, Layout, Text, useStyleSheet, Icon } from '@ui-kitten/components';
import { WebView } from 'react-native-webview';

import { KeyboardAvoidingView } from '../../components/avoidingview';
import themedStyles from './style';

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Layout style={styles.formWebView} >
        {/* <ScrollView style={styles.scrollView}>
          <Text>Test</Text>
        </ScrollView> */}
        <WebView source={{ uri: 'https://terms.line.me/line_terms/' }} />
      </Layout>
      <Layout style={styles.formBottom}>
        <View style={styles.drawLine} />
        <Button
          size='large'
          style={styles.btnAgree}
          onPress={(): void => { navigation && navigation.navigate('Opt', { screen: "login" }) }}>
          ACCEPT
        </Button>
        <Button appearance="ghost"
         style={styles.btnAgree}
         textStyle={styles.btnFont}>Disagree</Button>
      </Layout>
    </KeyboardAvoidingView>
  );
};