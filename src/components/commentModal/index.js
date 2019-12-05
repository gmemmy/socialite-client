/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import Modalize from 'react-native-modalize';
import { TextInput } from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

import Comment from '../comment';

const CommentModal = () => (
  <Modalize
    modalStyle={{ backgroundColor: '#2A2C31', borderTopRightRadius: hp(5) }}
    modalHeight={hp(60)}
    alwaysOpen={hp(20)}
    HeaderComponent={() => (
      <View style={styles.modalHeader}>
        <Text style={styles.headerText}>Comments</Text>
        <Text style={[styles.headerText, { color: '#626367' }]}>(20)</Text>
        <TouchableOpacity style={{ marginLeft: 'auto', marginRight: wp(8) }}>
          <Ionicons
            name="ios-arrow-down"
            size={25}
            style={{ color: '#4D80F7' }}
          />
        </TouchableOpacity>
      </View>
    )}
  >
    <Comment />
    <TextInput
      placeholder="Type a comment"
      style={styles.textInput}
      underlineColor="#4D80F7"
      selectionColor="#4D80F7"
    />
  </Modalize>
);

export default CommentModal;
