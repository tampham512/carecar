import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
// import {Radio, NativeBaseProvider, Input} from 'native-base';
function index({
  name,
  label = '',
  options,
  valid = true,
  control,
  defaultValue,
  ...rest
}) {
  return (
    <View style={{width: '100%'}}>
      {label && <Text style={styles.label}>{label}</Text>}
      {/* <Controller
          control={control}
          name={name}
          render={({field: {onChange, value}}) => (
            <Radio.Group
              // defaultValue={defaultValue}
              onChange={onChange}
              name={name}
              value={value}
              flexDirection="row"
              {...rest}>
              {options.map(item => (
                <Radio
                  value={item.value}
                  key={item.key}
                  // colorScheme={item.color || '#d9463e'}
                >
                  <Text>{item.name}</Text>
                </Radio>
              ))}
            </Radio.Group>
          )}
        /> */}
      {/* {errors[name] && <Text>This is required.</Text>} */}
    </View>
  );
}

export default index;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    padding: 5,
    borderColor: '#afb6bd',
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
