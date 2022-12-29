import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {SITE_MAP} from '../../../utils/constants/Path';
import {Link} from 'react-router-native';
import HomeIcon from '../../../assets/Icons/home.png';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import * as S from './styled';
function Navigation({children}) {
  const menuList = [
    {
      title: 'Trang Chủ',
      icon: '',
      menu: SITE_MAP.INDEX.menu,
      path: SITE_MAP.INDEX.path,
    },
    {
      title: 'Contacts',
      icon: '',
      menu: SITE_MAP.CONTACT.menu,
      path: SITE_MAP.CONTACT.path,
    },
    {
      title: 'QR-Code Rửa Xe',
      icon: '',
      menu: SITE_MAP.INDEX.menu,
      path: SITE_MAP.INDEX.path,
    },
    {
      title: 'Chat',
      icon: '',
      menu: SITE_MAP.INDEX.menu,
      path: SITE_MAP.INDEX.path,
    },
    {
      title: 'Tài Khoản',
      icon: '',
      menu: '',
      path: SITE_MAP.LOGIN,
    },
  ];
  return (
    <View style={{flex: 1, height: '100%'}}>
      <ScrollView style={{flex: 1}}>{children}</ScrollView>

      <View style={styles.container}>
        {menuList.map(({title, icon, menu, path}, index) => (
          <Link to={path} key={index}>
            <View style={styles.item}>
              <Image source={HomeIcon} style={styles.img} />
              <Text>{title}</Text>
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
}

export default Navigation;
const styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  item: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    alignItems: 'center',
  },
  img: {
    color: '#a23535',
  },
});
