/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity
} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from './styles';
import globalStyles from '../../utils/globalStyles';

// Components
import Header from '../../components/header';
import PostHeader from '../../components/postHeader';

// Images
const post = require('../../../assets/profile.jpg');

class Feed extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    liked: false
  }

  pressed = (boolean) => {
    this.setState({
      liked: boolean
    });
  }

  render() {
    const { liked } = this.state;
    return (
      <View style={styles.container}>
        <View style={globalStyles.header}>
          <Header />
        </View>
        <View style={styles.postHeader}>
          <PostHeader />
        </View>
        <TouchableOpacity style={styles.post}>
          <Image
            source={post}
            style={styles.postImage}
          />
        </TouchableOpacity>
        <View style={styles.postBottom}>
          <TouchableOpacity onPress={() => (liked ? this.pressed(false) : this.pressed(true))}>
            <Ionicons
              name={liked ? 'ios-heart' : 'ios-heart-empty'}
              color="#D2895C"
              size={25}
            />
          </TouchableOpacity>
          <Text style={styles.likeCount}>
          418 likes
          </Text>
          <TouchableOpacity>
            <Entypo
              name="dots-three-vertical"
              size={25}
              color="white"
              style={styles.threeDotsIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Feed;
