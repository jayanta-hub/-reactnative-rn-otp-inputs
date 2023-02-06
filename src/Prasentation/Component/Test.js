import {View} from 'react-native';
import React, {useState} from 'react';
import styles from './ReactOtpInput/styles';
import ReactOtpInput from '../../Prasentation/Component/ReactOtpInput/ReactOtpInput';
import {scale} from '../../Infrastructure/utils/screenUtility';

const Test = () => {
  const [value, setValue] = useState('');
  const OnSubmit = e => {};
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          marginVertical: scale(20),
          marginTop: scale(50),
          justifyContent: 'center',
        }}>
        <ReactOtpInput
          pinCount={4} //Number of digits in the component
          secureTextEntry={false}
          onSubmit={OnSubmit}
          autoSubmit={true} // Call a function after fill all field
          mode="rectangle"
          borderRadius={6} // Rectanlge Border Radius
          onChageValue={setValue}
          // Second={10}
          // Minute={2}
          // buttonStyle={{
          //   flex: 1,
          //   borderRadius: 6,
          //   fontsize: scale(8),
          //   height: scale(40),
          //   backgroundColor: 'green',
          //   borderColor: '',
          //   fontFamily: 'SourceSansPro-Regular',
          //   marginTop: scale(10),
          //   alignItems: 'center',
          //   flexDirection: 'row',
          //   justifyContent: 'center',
          // }}
          // ButtonTitle="Submit"
        />
        {/* <Text style={{marginLeft: scale(30), marginTop: scale(20)}}>
          Opt: {value}
        </Text> */}
      </View>
    </View>
  );
};

export default Test;
