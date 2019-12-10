import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

// Images
const profileImage = require('../../../assets/profile.jpg');

const PostHeader = () => (
  <>
    <TouchableOpacity>
      <Image
        source={profileImage}
        style={styles.profileImage}
      />
    </TouchableOpacity>
    <Text style={styles.username}>
      gmemmy
    </Text>
    <TouchableOpacity style={styles.followText}>
      <Text style={{ color: '#4D80F7', fontWeight: 'bold' }}>
        Follow
      </Text>
    </TouchableOpacity>
  </>
);

export default PostHeader;
