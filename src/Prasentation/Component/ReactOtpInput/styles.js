import {StyleSheet} from 'react-native';

import {scale} from '../../../Infrastructure/utils/screenUtility';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  TextInput: {
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
