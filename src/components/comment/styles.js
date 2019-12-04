import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: hp(6)
  },
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
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  followText: {
    marginLeft: 'auto',
    marginRight: wp(3),
  },
  commentView: {
    marginLeft: wp(3),
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  comment: {
    color: '#c2c2c4'
  },
  bottomContent: {
    flexDirection: 'row',
    marginTop: hp(1),
  },
  bottomContentText: {
    color: '#626367'
  }
});

export default styles;
