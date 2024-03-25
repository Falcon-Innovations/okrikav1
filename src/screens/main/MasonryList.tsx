import React, { FC, ReactElement, useMemo } from 'react';
import { data } from '../../data/localData';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Image,
  useColorScheme,
} from 'react-native';
import MasonryList from 'reanimated-masonry-list';



const MasonryCard: FC<{ item: MasonryList }> = ({ item }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View key={item.id} style={{ marginTop: 12, flex: 1 }}>
      <Image
        source={{ uri: item.imgURL }}
        style={{
          height: 200,
          width:80,
          alignSelf: 'stretch',
          borderRadius:3,
          margin:10
        }}
        resizeMode="cover"
      />
      {/* <Text style={{ marginTop: 8 }}>{item.name}</Text> */}
    </View>
  );
};



const renderItem = ({
  item,
}: {
  item: MasonryList;
  index?: number;
}): ReactElement => {
  return <MasonryCard item={item} />;
};

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <MasonryList
        keyExtractor={(item: MasonryList): string => item.id}
        ListHeaderComponent={<View />}
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignSelf: 'stretch',
          
        }}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default App;