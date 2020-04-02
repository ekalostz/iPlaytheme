import React from 'react';
import { Icon } from '@ui-kitten/components';

export const walletIcon = () => (
  <Icon style={{ fontSize:26, color:"gray" }} name="wallet" pack="entypo" />
);

export const newsIcon = () => (
  <Icon style={{ paddingTop:6, fontSize:20, color:"gray" }} name="newspaper-o" pack="fontawesome" />
);

export const exploreIcon = () => (
  <Icon style={{ paddingTop:4, fontSize:22, color:"#FF9D1A" }} name="explore" pack="material" />
);

export const accountIcon = () => (
  <Icon style={{ paddingTop:2, fontSize:26, color:"gray" }} name="account" pack="community" />
);

export const qrIcon = () => (
  <Icon style={{ fontSize:36, color:"#FF9D1A", width:40, height:40 }} name="qrcode-scan" pack="community" />
);