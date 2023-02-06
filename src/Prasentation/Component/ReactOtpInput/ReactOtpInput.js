import {
  View,
  TextInput,
  Platform,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {
  guidelineBaseWidth,
  scale,
} from '../../../Infrastructure/utils/screenUtility';
import PropTypes from 'prop-types';
import CustomButton from '../../../Infrastructure/ComonComponent/CustomButton';
const OtpInput = props => {
  const {
    onSubmit,
    secureTextEntry,
    autoSubmit,
    mode,
    borderRadius,
    onChageValue,
    bgcolor,
    textColor,
    borderWidth,
    borderColor,
    keyboardType,
    ButtonTitle,
    Minute,
    Second,
  } = props;
  const inputRef = useRef();
  const [otp, setOtp] = useState(
    new Array(
      props.pinCount && props.pinCount <= 6 && props.pinCount >= 3
        ? props.pinCount
        : 4,
    ).fill(''),
  );
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const [minute, setMinute] = useState(Minute);
  const [second, setSecond] = useState(Second);

  const ChangeHandler = (e, index) => {
    const {text} = e.nativeEvent;
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    e.nativeEvent?.text
      ? setActiveOtpIndex(index + 1)
      : activeOtpIndex !== 0
      ? setActiveOtpIndex(index - 1)
      : null;
    /**
     * ? For AutoSubmit (After Fill All Input we Can call a Fun)
     */
    activeOtpIndex === props.pinCount - 1
      ? onChageValue(newOtp.join('').toString())
      : null;
    autoSubmit
      ? activeOtpIndex === props.pinCount - 1
        ? onSubmit()
          ? onSubmit(newOtp.join('').toString())
          : null
        : null
      : null;
  };
  const OnKeyHandler = (e, index) => {
    /**
     * ? When Enter BackSpace
     */
    e.nativeEvent.key === 'Backspace' ? setActiveOtpIndex(index - 1) : null;
  };

  /**
   * ? For Dynamic Array
   */

  useEffect(() => {
    setOtp(
      new Array(
        props.pinCount && props.pinCount <= 6 && props.pinCount >= 3
          ? props.pinCount
          : 4,
      ).fill(''),
    );
  }, [props.pinCount]);

  /**
   * ? For Focus on each box
   */

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeOtpIndex]);

  /**
   * ? For Timer
   */

  useEffect(() => {
    const interval = setInterval(() => {
      if (second > 0) {
        setSecond(second - 1);
      }
      if (second === 0) {
        if (minute === 0) {
          clearInterval(interval);
        } else {
          setSecond(59);
          setMinute(minute - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [second]);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerWrap}>
          {otp.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  borderWidth: scale(
                    activeOtpIndex === index ? borderWidth : 0,
                  ),
                  borderRadius: scale(
                    mode === 'circle'
                      ? 50
                      : mode === 'rectangle'
                      ? borderRadius
                      : borderRadius,
                  ),
                  backgroundColor: bgcolor,
                  marginHorizontal:
                    Platform.isPad || guidelineBaseWidth > 500
                      ? scale(40)
                      : scale(0),
                  marginTop:
                    Platform.isPad || guidelineBaseWidth > 500
                      ? scale(20)
                      : scale(0),

                  padding: scale(0.5),
                  borderColor: borderColor,
                }}>
                <TextInput
                  key={index}
                  ref={index === activeOtpIndex ? inputRef : null}
                  autoCorrect={false}
                  value={otp[index]}
                  maxLength={1}
                  keyboardType={keyboardType}
                  editable={true}
                  onChange={e => ChangeHandler(e, index)}
                  onKeyPress={e => OnKeyHandler(e, index)}
                  secureTextEntry={secureTextEntry}
                  style={{
                    height: scale(
                      props.pinCount === 4 && props.pinCount < 7
                        ? 60
                        : props.pinCount === 5 && props.pinCount < 7
                        ? 55
                        : props.pinCount === 6 && props.pinCount < 7
                        ? 45
                        : 60,
                    ),
                    width: scale(
                      props.pinCount === 4 && props.pinCount < 7
                        ? 60
                        : props.pinCount === 5 && props.pinCount < 7
                        ? 55
                        : props.pinCount === 6 && props.pinCount < 7
                        ? 45
                        : 60,
                    ),
                    textAlign: 'center',
                    fontSize: scale(22),
                    fontWeight: '500',
                    color: textColor,
                    borderRadius: scale(
                      mode === 'circle'
                        ? 50
                        : mode === 'rectangle'
                        ? borderRadius
                        : borderRadius,
                    ),
                    backgroundColor: bgcolor,
                    paddingBottom: 0,
                    paddingTop: 0,
                  }}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.containerWrap}>
          <Text style={styles.formTitle}>
            Time Remaining: {minute < 10 ? `0${minute}` : minute}:
            {second < 10 ? `0${second}` : second}
          </Text>
          <TouchableOpacity
            disabled={minute === 0 && second === 0 ? false : true}
            style={{
              opacity: minute === 0 && second === 0 ? 1 : 0.5,
            }}>
            <Text style={styles.formTitle}>Resend OPT</Text>
          </TouchableOpacity>
        </View>
        <CustomButton
          title={ButtonTitle}
          buttonStyle={props.buttonStyle}
          props={props}
        />
      </View>
    </>
  );
};

OtpInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  pinCount: PropTypes.number.isRequired,
  secureTextEntry: PropTypes.bool,
  autoSubmit: PropTypes.bool,
  mode: PropTypes.string,
  borderRadius: PropTypes.number,
  onChageValue: PropTypes.func,
  bgcolor: PropTypes.string,
  textColor: PropTypes.string,
  borderColor: PropTypes.string,
  keyboardType: PropTypes.string,
  borderWidth: PropTypes.number,
  ButtonTitle: PropTypes.string,
  Minute: PropTypes.number,
  Second: PropTypes.number,
};

OtpInput.defaultProps = {
  /**
   * ? not required, this prop mentioned as required in propTypes
   */
  // pinCount: 0,
  secureTextEntry: false,
  autoSubmit: false,
  mode: 'rectangle',
  borderRadius: 6,
  bgcolor: '#D9E3F6',
  textColor: '#000000',
  borderWidth: 1,
  borderColor: '#A768F1',
  keyboardType: 'number-pad',
  ButtonTitle: 'Verify & Proceed',
  Minute: 1,
  Second: 0,
  onChageValue: () => {},
};
export default OtpInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: scale(10),
  },
  containerWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scale(10),
    marginHorizontal: scale(30),
    flexWrap: 'wrap',
  },
  formTitle: {
    fontFamily: 'SourceSansPro-SemiBold',
    fontSize: scale(15),
    color: '#404B69',
  },
});
