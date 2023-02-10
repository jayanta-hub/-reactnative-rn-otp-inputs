# rn-otp-inputs

<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/rn-otp-inputs">
<img alt="GitHub followers" src="https://img.shields.io/github/followers/jayanta-hub?style=social">

**rn-otp-inputs** is a tiny Javascript library which provides an elegant UI for the end user to input one time passcode (OTP). It handles autocomplete functionality and it display remaining time for OTP. It also features a carefully crafted flow to handle edge cases for volatile user gestures. We provide default UI, but you can always customize the appearance as you like.

## Installation

`npm install --save rn-otp-inputs` or `yarn add rn-otp-inputs`

## PeerDependencies

### NOTES:

We use react@^ 17.0.2, prop-types@^ 15.8.1, react-native@^0.68.2 .So you should install react@^ 17.0.2, prop-types@^ 15.8.1 and react-native@^0.68.2

`npm install --save prop-types@15.8.1 react@17.0.2 react-native@0.68.2` or `yarn add prop-types@15.8.1 react@17.0.2 react-native@0.68.2`

## Basic Usage

```
import  RnOtpInputs  from  'rn-otp-inputs/src/Prasentation/Component/ReactOtpInput/RnOtpInputs';

...

<RnOtpInputs  pinCount={4}  />
```

## More Advanced Usage

```
import  RnOtpInputs  from  'rn-otp-inputs/src/Prasentation/Component/ReactOtpInput/RnOtpInputs';

...
const  [value,  setValue]  =  useState('');
...
<RnOtpInputs
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
  onlyResendOtp={false}
  onResentClick={false}
/>
```

## Parameters

| Parameter         | Required | Type       | Description                                                       |
| ----------------- | -------- | ---------- | ----------------------------------------------------------------- |
| pinCount          | `YES`    | `Number`   | Number of digits in the component, Default Number of digits is 4. |
| mode              | `No`     | `String`   | mode can be rectangle, flat or circle, Default mode is rectangle. |
| onSubmit          | `Yes`    | `Function` | Callback when Submit Button is Click.                             |
| secureTextEntry   | `No`     | `Boolean`  | Hide contents of text fields                                      |
| autoSubmit        | `No`     | `Boolean`  | Callback when the digits are filled.Default value is false.       |
| borderRadiusStyle | `No`     | `Number`   | Change borderRadius of input field.                               |
| borderWidth       | `No`     | `Number`   | Change borderWidth of input field.                                |
| borderColor       | `No`     | `String`   | Change borderColor of input field.                                |
| borderWidth       | `No`     | `Number`   | Change borderWidth of input field.                                |
| bgColor           | `No`     | `String`   | Change background Color of input field.                           |
| textColor         | `No`     | `String`   | The style of the input Text.                                      |
| onChageValue      | `No`     | `Function` | Callback when the digits are filled.                              |
| keyboardType      | `No`     | `String`   | Keyboard type. Default value is 'number-pad'.                     |
| buttonTitle       | `No`     | `String`   | ButtonTitle.Default value is 'Verify & Proceed'.                  |
| Minute            | `No`     | `Number`   | Remaining Time in minute.Default value is 1.                      |
| Second            | `No`     | `Number`   | Remaining Time in Second.Default value is 0.                      |
| onlyResendOtp     | `No`     | `Boolon`   | For Only Resend Otp UI View .Default value is false.              |
| onResentClick     | `No`     | `Function` | Callback when the resend button clicked.                          |
| buttonStyle       | `No`     | `object`   | The style of the button.                                          |
| buttonTitleStyle  | `No`     | `object`   | The style of the button Title.                                    |
| resendTextStyle   | `No`     | `object`   | The style of the Resend Text.                                     |

## Contributors

`Jayanta Garu`

## Keywords

- [react@^17.0.2](https://www.npmjs.com/search?q=keywords:react-native)
- [react-native@^0.68.2](https://www.npmjs.com/search?q=keywords:react-native)
- [prop-types@^15.8.1](https://www.npmjs.com/package/prop-types)
- [one time password](https://www.npmjs.com/search?q=keywords:one%20time%20password)
- [verifcation code](https://www.npmjs.com/search?q=keywords:verifcation%20code)
