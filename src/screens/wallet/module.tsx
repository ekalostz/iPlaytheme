import React, { useCallback }  from 'react';
import { Image, ListRenderItemInfo, View, Alert } from 'react-native';
import { Button, Card, List, Text, useStyleSheet, } from '@ui-kitten/components';
import { CreditCardIcon, MoreVerticalIcon } from './extra/icons';
import { PaymentCard } from './extra/data';
import Icon from '@expo/vector-icons/MaterialCommunityIcons'

import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation'

import themedStyles from './style';

const paymentCards: PaymentCard[] = [
  PaymentCard.emilyClarckVisa(),
];

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  const onPlaceholderCardPress = (): void => {
    navigation && navigation.navigate('AddNewCard');
  };
  

  const handleTabPress = useCallback(
    newTab => navigation.navigate(newTab.key),
    [navigation]
  )

  const tabs = [
    {
      key: 'Wallet',
      icon: 'wallet',
      label: 'Wallet',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Login',
      icon: 'newspaper',
      label: 'News',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Forgot_password',
      icon: 'alien',
      label: 'Explore',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Forgot_password',
      icon: 'account',
      label: 'Account',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'Forgot_password',
      icon: 'barcode-scan',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  const renderIcon = iconName => () => {
    return <Icon size={24} color="white" name={iconName} />
  }
  
  const renderTab = ({ tab, isActive }) => {
    return (
      <FullTab
        key={tab.key}
        isActive={isActive}
        label={tab.label}
        renderIcon={renderIcon(tab.icon)}
      />
    )
  }

  const renderFooter = (): React.ReactElement => (
    <Card
      style={styles.placeholderCard}
      onPress={onPlaceholderCardPress}>
      <CreditCardIcon {...styles.creditCardIcon}/>
      <Text
        appearance='hint'
        category='s1'>
        Add New Card
      </Text>
    </Card>
  );
  
  const renderCardItem = (info: ListRenderItemInfo<PaymentCard>): React.ReactElement => (
    <View style={styles.cardItem}>
      <View style={styles.cardLogoContainer}>
        <Image
          style={styles.cardLogo}
          source={info.item.logo}
        />
        <Button
          style={styles.cardOptionsButton}
          appearance='ghost'
          status='control'
          icon={MoreVerticalIcon}
          onPress={():void => { }}
        />
      </View>
      <Text
        style={styles.cardNumber}
        category='h6'
        status='control'>
        {info.item.number}
      </Text>
      <View style={styles.cardNameContainer}>
        <Text
          style={styles.cardDetailsLabel}
          category='p2'
          status='control'>
          Cardholder Name
        </Text>
        <Text
          category='s1'
          status='control'>
          {info.item.cardholderName}
        </Text>
      </View>
      <View style={styles.cardExpirationContainer}>
        <Text
          style={styles.cardDetailsLabel}
          category='p2'
          status='control'>
          Expire Date
        </Text>
        <Text
          category='s1'
          status='control'>
          {info.item.expireDate}
        </Text>
      </View>
    </View>
  );

  return (
    <React.Fragment>
      <List
        style={styles.list}
        contentContainerStyle={styles.listContent}
        data={paymentCards}
        renderItem={renderCardItem}
        ListFooterComponent={renderFooter}
      />
      <BottomNavigation
          activeTab='Wallet'
          renderTab={renderTab}
          tabs={tabs}
          onTabPress={() => {}}
      />
    </React.Fragment>
  );
};