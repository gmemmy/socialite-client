import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp, heightPercentageToDP as
  hp
} from 'react-native-responsive-screen';

const globalStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(5),
    borderBottomWidth: wp(0.1),
    borderBottomColor: '#4f5454'
  },
});

export default globalStyles;
