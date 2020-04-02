import React from 'react';
import { View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Layout, Text, useStyleSheet, BottomNavigation, BottomNavigationTab, Modal, Avatar, Icon } from '@ui-kitten/components';
import { walletIcon, newsIcon, exploreIcon, accountIcon, qrIcon } from './extra/icons';

import QR_Modal from '../qr-code'
import themedStyles from './style';

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const [visible, setVisible] = React.useState(false);

  

  const toggleModal = () => {
    setVisible(!visible);
  };

  const onSelect = (index) => {
    switch(index)
    {
      case 0:{
        navigation && navigation.navigate('Wallet');
        break;
      }
      case 1:{
        navigation && navigation.navigate('News');
        break;
      }
      case 2:{
        navigation && navigation.navigate('Explore');
        break;
      }
      case 4:{
        setVisible(true);
        break;
      }
    }
  };

  return (
    <React.Fragment>
      <Layout style={styles.formLayout}>
        <TouchableOpacity style={styles.touchLayout}>
          <Layout style={styles.buttonLayout}>
            <Avatar shape='rounded' source={require('./assets/avatar.png')}/>
            <Text style={styles.userText}>{localStorage.getItem('username')}</Text>
            <Text style={styles.phoneText}>(+66)81-3984-1923</Text>
            <Icon style={styles.arrowIcon} name="arrow-forward" pack="material" />
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchLayout}>
          <Layout style={styles.buttonLayout}>
          <Image style={{ height:24, width:24, marginTop: 9, marginRight: 6,}} source={require('./assets/icChangePassword.png')}/>
          <Text style={styles.defaultText}>Change Password</Text>
          <Icon style={styles.passIcon} name="arrow-forward" pack="material" />
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchLayout}>
          <Layout style={styles.buttonLayout}>
          <Image style={{ height:24, width:24, marginTop: 9, marginRight: 6,}} source={require('./assets/icPrivacyPolicy.png')}/>
          <Text style={styles.defaultText}>Privacy Policy</Text>
          <Icon style={styles.privacyIcon} name="arrow-forward" pack="material" />
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity style={styles.termLayout}>
          <Layout style={styles.buttonLayout}>
          <Image style={{ height:24, width:24, marginTop: 9, marginRight: 6,}} source={require('./assets/icTerms.png')}/>
          <Text style={styles.defaultText}>Terms and Condition</Text>
          <Icon style={styles.termIcon} name="arrow-forward" pack="material" />
          </Layout>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchLayout}>
          <Layout style={styles.buttonLayout}>
          <Text style={styles.defaultText}>Logout</Text>
          </Layout>
        </TouchableOpacity>
      </Layout>
      <View style={styles.drawLine} />
      <BottomNavigation
      appearance='noIndicator'
      selectedIndex={3}
      onSelect={onSelect}>
      <BottomNavigationTab title='Wallet' icon={walletIcon} />
      <BottomNavigationTab title='News' icon={newsIcon} />
      <BottomNavigationTab title='Explore' icon={exploreIcon}/>
      <BottomNavigationTab title='Account' titleStyle={styles.tapActive} icon={accountIcon}/>
      <BottomNavigationTab icon={qrIcon}/>
    </BottomNavigation>
    <Modal
      backdropStyle={styles.backdrop}
      onBackdropPress={toggleModal}
      visible={visible}>
      {QR_Modal()}
    </Modal>
    </React.Fragment>
  );
};