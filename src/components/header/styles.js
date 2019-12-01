import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  headerText: {
    marginLeft: wp(30),
    color: '#ffff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  arrowIcon: {
    marginLeft: wp(4)
  },
  threeDotsIcon: {
    marginLeft: wp(25)
  }
});

export default styles;
