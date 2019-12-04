import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import styles from './styles';

// Images
const profileImage = require('../../../assets/profile.jpg');

const Comment = () => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Image
        source={profileImage}
        style={styles.profileImage}
      />
    </TouchableOpacity>
    <View style={styles.commentView}>
      <TouchableOpacity>
        <Text style={styles.username}>
          Matt Wotjas
        </Text>
      </TouchableOpacity>
      <Text style={styles.comment}>Hello there. Wonderful post!</Text>
      <View style={styles.bottomContent}>
        <Text style={styles.bottomContentText}>3 hours ago</Text>
        <Text style={[{ marginLeft: wp(5) }, styles.bottomContentText]}>2 likes</Text>
        <TouchableOpacity style={{ marginLeft: wp(5) }}>
          <Text style={styles.bottomContentText}>Reply</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default Comment;
