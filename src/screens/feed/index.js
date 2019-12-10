/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// Icons
import { Ionicons, Entypo, MaterialIcons } from '@expo/vector-icons';

import styles from './styles';
import globalStyles from '../../utils/globalStyles';

// Components
import Header from '../../components/header';
import PostHeader from '../../components/postHeader';
import CommentModal from '../../components/commentModal';

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
        <ScrollView>
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
          <View style={styles.commentView}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.commentHeader}>
                gmemmy
              </Text>
              <Text style={{ marginLeft: wp(52), color: '#5b5959', fontWeight: 'bold' }}>
                3 hours ago
              </Text>
            </View>
            <Text style={{ marginTop: hp(2), color: '#c2c2c4' }}>
              Hello there, my name is Emmanuel and I am a Software Engineer
              who enjoys building software.
            </Text>
            <View style={{ flexDirection: 'row', marginTop: hp(3) }}>
              <TouchableOpacity style={{ flexDirection: 'row' }}>
                <MaterialIcons
                  name="chat"
                  size={20}
                  color="#4D80F7"
                />
                <Text style={[styles.commentButtons, { marginLeft: wp(2) }]}>Add Comment</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginLeft: wp(23) }}>
                <Text style={styles.commentButtons}>View all comments</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <CommentModal />
      </View>
    );
  }
}

export default Feed;
