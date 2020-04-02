import React from 'react';
import { View } from 'react-native';
import { Layout, Text, useStyleSheet, BottomNavigation, BottomNavigationTab, Modal, Icon } from '@ui-kitten/components';
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
      case 3:{
        navigation && navigation.navigate('Account');
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
        <Icon style={styles.iconText} name="explore" pack="material" />
        <Text style={styles.subText}>COMING SOON</Text>
      </Layout>
      <View style={styles.drawLine} />
      <BottomNavigation
      appearance='noIndicator'
      selectedIndex={2}
      onSelect={onSelect}>
      <BottomNavigationTab title='Wallet' icon={walletIcon} />
      <BottomNavigationTab title='News' icon={newsIcon} />
      <BottomNavigationTab title='Explore' titleStyle={styles.tapActive} icon={exploreIcon}/>
      <BottomNavigationTab title='Account' icon={accountIcon}/>
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