import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from './styles';

const Header = () => (
  <>
    <TouchableOpacity>
      <Ionicons
        name="ios-arrow-round-back"
        size={35}
        color="white"
        style={styles.arrowIcon}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>
      posts
    </Text>
    <TouchableOpacity>
      <Entypo
        name="dots-three-horizontal"
        size={25}
        color="white"
        style={styles.threeDotsIcon}
      />
    </TouchableOpacity>
  </>
);

export default Header;
