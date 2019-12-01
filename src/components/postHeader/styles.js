import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  profileImage: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(10) / 2,
    resizeMode: 'contain',
    borderColor: '#D2895C',
    borderWidth: wp(0.5),
    marginLeft: wp(4)
  },
  username: {
    marginLeft: wp(3),
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  followText: {
    marginLeft: 'auto',
    marginRight: wp(3),
  }
});

export default styles;
