import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
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
  },
  post: {
    overflow: 'hidden',
    maxHeight: hp(31),
    maxWidth: wp(100),
    marginTop: hp(2),
  },
  postImage: {
    height: wp(100),
    width: wp(100),
    marginLeft: wp(5),
    borderRadius: wp(15) / 2,
  },
  postBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(2),
    marginLeft: wp(4)
  },
  likeCount: {
    marginLeft: wp(4),
    color: '#ffff',
    fontWeight: 'bold'
  },
  threeDotsIcon: {
    marginLeft: wp(60)
  },
  modalHeader: {
    flexDirection: 'row',
    marginTop: hp(4)
  },
  headerText: {
    color: '#fff',
    fontSize: hp(2.2),
    fontWeight: 'bold'
  }
});

export default styles;
