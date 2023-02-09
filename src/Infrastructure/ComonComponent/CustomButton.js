import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from '../utils/screenUtility';
import PropTypes from 'prop-types';

const CustomButton = props => {
  const {
    borderRadius,
    height,
    fontsize,
    textbgcolor,
    borderRadiusColor,
    fontFamily,
    marginTop,
    marginBottom,
    marginLeft,
    marginHorizontal,
    marginVertical,
    buttonStyle,
    onSubmit
  } = props;

  return (
    <View
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scale(10),
        marginHorizontal: scale(30),
      }}>
      <TouchableOpacity
        onPress={onSubmit}
        style={
          Object.keys(buttonStyle).length === 0
            ? {
                flex: 1,
                backgroundColor: textbgcolor,
                height: height,
                fontFamily: fontFamily,
                fontSize: fontsize,
                borderColor: borderRadiusColor,
                borderRadius: borderRadius,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: marginTop,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                marginHorizontal: marginHorizontal,
                marginVertical: marginVertical,
              }
            : buttonStyle
        }>
        <Text
          style={{
            fontFamily: 'SourceSansPro-SemiBold',
            fontSize: scale(15),
            color: '#FFFFFF',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
CustomButton.propTypes = {
  borderRadius: PropTypes.number,
  height: PropTypes.number,
  fontsize: PropTypes.number,
  onChageValue: PropTypes.func,
  textbgcolor: PropTypes.string,
  borderRadiusColor: PropTypes.string,
  fontFamily: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginHorizontal: PropTypes.number,
  marginVertical: PropTypes.number,
  buttonStyle: PropTypes.object,
};

CustomButton.defaultProps = {
  /**
   * ? not required, this prop mentioned as required in propTypes
   */

  borderRadius: 6,
  fontsize: scale(8),
  height: scale(40),
  textbgcolor: '#349beb',
  borderRadiusColor: '',
  fontFamily: 'SourceSansPro-Regular',
  marginTop: scale(10),
  marginBottom: scale(0),
  marginLeft: scale(0),
  marginHorizontal: scale(0),
  marginVertical: scale(0),
  buttonStyle: {},
};
export default CustomButton;
