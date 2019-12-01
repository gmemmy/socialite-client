import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import globalStyles from '../../utils/globalStyles';

// Components
import Header from '../../components/header';
import PostHeader from '../../components/postHeader';

const Feed = () => (
  <View style={styles.container}>
    <View style={globalStyles.header}>
      <Header />
    </View>
    <View style={styles.postHeader}>
      <PostHeader />
    </View>
  </View>
);

export default Feed;
