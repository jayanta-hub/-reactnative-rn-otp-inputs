import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
const guidelineBaseWidth = Platform.isPad ? 600 : 375;
const guidelineBaseHeight = Platform.isPad ? 1024 : 812;
const scale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {
  guidelineBaseWidth,
  guidelineBaseHeight,
  scale,
  verticalScale,
  moderateScale,
  width,
  height,
};
