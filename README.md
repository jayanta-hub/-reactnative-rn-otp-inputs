# React Native OTP Inputs

**rn-otp-inputs** is a tiny Javascript library which provides an elegant UI for the end user to input one time passcode (OTP). It handles autocomplete functionality and it display remaining time for OTP. It also features a carefully crafted flow to handle edge cases for volatile user gestures. We provide default UI, but you can always customize the appearance as you like.


## Installation

`npm install --save rn-otp-inputs` or `yarn add rn-otp-inputs`

## PeerDependencies

### NOTES:
We use react@^ 17.0.2, prop-types@^ 15.8.1  react@^ 17.0.2 .So you should install react@^ 17.0.2, prop-types@^ 15.8.1  react@^ 17.0.2

`npm install --save prop-types@15.8.1 react@17.0.2 react-native@0.68.2` or `yarn add prop-types@15.8.1 react@17.0.2 react-native@0.68.2`


## Basic Usage
```
import  RnOtpInput  from  'rn-otp-inputs/src/Prasentation/Component/ReactOtpInput/RnOtpInput';

...

<RnOtpInput  pinCount={4}  />
```

## More Advanced Usage

```
import  RnOtpInput  from  'rn-otp-inputs/src/Prasentation/Component/ReactOtpInput/RnOtpInput';

...
const  [value,  setValue]  =  useState('');
...
<RnOtpInput  
  pinCount={4} 
  mode='rectangle' 
  onSubmit={()=>{}}
  secureTextEntry={false}
  autoSubmit={true}
  borderRadius={6}
  borderWidth={1}
  borderColor='#A768F1'
  bgColor='#D9E3F6'
  textColor='#000000'
  onChageValue={setValue}
  keyboardType='number-pad'
  buttonTitle='Verify & Proceed'
  Minute={1}
  Second={0}
/>
```

## Parameters

|  Parameter  |Required |Type |Description |
|----------------|-------------------------------|-----------------------------|----------------|
|pinCount|`YES` |`Number`|Number of digits in the component, Default Number of digits is 4.            
|mode|`No`|`String` |mode can be rectangle or circle, Default mode is rectangle.
|onSubmit|`Yes`|`Function`|Callback when Submit Button is Click.Default value is false
|secureTextEntry |`No`|`Boolean`
|autoSubmit |`No`|`Boolean`|Callback when the digits are filled.  Default value is false.
|borderRadius |`No`|`Number`|The style of the input field.
|borderWidth |`No`|`Number`|The style of the input field.
|borderColor |`No`|`String`|The style of the input field.
borderWidth |`No`|`Number`|The style of the input field.
bgColor |`No`|`String`|The style of the input field.
textColor |`No`|`String`|The style of the input Text.
onChageValue |`No`|`Function`|Callback when the digits are changed.
keyboardType |`No`|`String`|Keyboard type. Default value is 'number-pad'.
buttonTitle |`No`|`String`|ButtonTitle.Default value is 'Verify & Proceed'.
Minute |`No`|`Number`|Remaining Time in minute.Default value is 1.
Second |`No`|`Number`|Remaining Time in Second.Default value is 0.


## Contributors

`Jayanta Garu`

## Keywords

-   [react-native](https://www.npmjs.com/search?q=keywords:react-native)
-   [otp](https://www.npmjs.com/search?q=keywords:otp)
-   [otc](https://www.npmjs.com/search?q=keywords:otc)
-   [one time password](https://www.npmjs.com/search?q=keywords:one%20time%20password)
-   [one time pin](https://www.npmjs.com/search?q=keywords:one%20time%20pin)
-   [one time pincode](https://www.npmjs.com/search?q=keywords:one%20time%20pincode)
-   [one time code](https://www.npmjs.com/search?q=keywords:one%20time%20code)
-   [verifcation code](https://www.npmjs.com/search?q=keywords:verifcation%20code)
-   [phone](https://www.npmjs.com/search?q=keywords:phone)
-   [verification](https://www.npmjs.com/search?q=keywords:verification)


