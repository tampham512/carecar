import React, {lazy} from 'react';
import {View, Text} from 'react-native';
import Navigation from '../../containers/layout/Navigation';
import ItemContact from '../../components/Contacts/ItemContact';
import MyCard from '../../components/Contacts/MyCard';

import {H1} from '../../components/common/Heading/Heading';

function index() {
  return (
    <Navigation>
      <View style={{flex: 1}}>
        <H1>Contacts</H1>
        <MyCard />
        <ItemContact />
        <ItemContact />
        <ItemContact />
      </View>
    </Navigation>
  );
}

export default index;
