import React, {useState} from 'react';
import {ScrollView, View, RefreshControl} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('terminamos');
      setRefreshing(false);
      setData('Hola mundo');
    }, 1500);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="#5856D6" //Android
          colors={['white', 'red', 'orange']} //Android
          style={{backgroundColor: '#5856D6'}} //IOS
          tintColor="white" //IOS
          title="Refreshing" //IOS
          titleColor="white" //IOS
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to Refresh" />
        {data && <HeaderTitle title={data} />}
      </View>
    </ScrollView>
  );
};
