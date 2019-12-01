import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3339',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
  }
});

export default styles;
