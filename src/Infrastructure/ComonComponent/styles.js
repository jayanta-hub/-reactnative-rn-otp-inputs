import {StyleSheet} from 'react-native';
import {scale} from '../utils/screenUtility';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: scale(10),
    marginHorizontal: scale(30),
  },
  buttonText: {
    marginTop: scale(5),
    borderRadius: scale(4),
    borderColor: '#C3D0DE',
    borderWidth: 1,
    height: scale(40),
    fontSize: scale(14),
    fontFamily: 'SourceSansPro-Regular',
    color: '#4D4F5C',
    minWidth: scale(40),
    textAlign: 'center',
  },
});

export default styles;
