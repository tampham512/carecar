import React from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../components/Input';
import Button from '../../components/Button';
// import RadioGroup from '../../components/RadioGroup';

import Logo from '../../assets/Icons/logo.png';
import {SITE_MAP} from '../../utils/constants/Path';

const options = [
  {value: 0, key: 0, name: 'Cá Nhân'},
  {value: 1, key: 1, name: 'Garage'},
];
const schema = yup
  .object({
    number_phone: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

function Login() {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => alert(JSON.stringify(data));
  const handleRegister = () => alert('Regiter link');
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#d9463e', flex: 0.5}} />
      <View style={{backgroundColor: '#FFFFFF', flex: 0.5}} />
      <View style={[styles.container]}>
        <View style={styles.containerCenter}>
          <Image source={Logo} style={styles.img} resizeMode="contain" />
          {/* <RadioGroup
            options={options}
            name="category"
            control={control}
            errors={errors}
          /> */}
          <Input
            control={control}
            errors={errors}
            name="number_phone"
            label="Số điện thoại"
          />
          <Input
            control={control}
            errors={errors}
            name="password"
            label="Mật Khẩu"
          />
          <Button title="Đăng nhập" onPress={handleSubmit(onSubmit)} />
        </View>
        <View>
          <Link to="forgot">
            <Text style={{color: '#d9463e', fontSize: 15}}>Quên mật khẩu?</Text>
          </Link>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={{marginRight: 5}}>Bạn chưa có tài khoản</Text>
        <Link to={SITE_MAP.REGISTER}>
          <View style={{width: 100}}>
            <Button title="Đăng ký" onPress={handleRegister} />
          </View>
        </Link>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  containerCenter: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
  },

  img: {
    width: '60%',
  },
});
