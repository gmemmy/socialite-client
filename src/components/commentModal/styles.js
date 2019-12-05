import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  modalHeader: {
    flexDirection: 'row',
    marginTop: hp(4),
    marginLeft: wp(4)
  },
  headerText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: 'bold'
  },
  textInput: {
    marginTop: hp(28),
    borderRadius: wp(5),
    fontSize: hp(1.7)
  }
});

export default styles;
