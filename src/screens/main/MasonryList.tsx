import React, { FC, useMemo } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,

} from 'react-native';
import MasonryListComponent from 'reanimated-masonry-list';
import { MasonryListData } from '../../data/localData';
import Icon from "react-native-vector-icons/Feather";
import { COLORS } from '../../constants/styles';




interface MasonryCardProps {
  item: typeof MasonryListData[number];
}

const MasonryCard: FC<MasonryCardProps> = ({ item }) => {
  const randomBool = useMemo(() => Math.random() < 0.5, []);

  return (
    <View key={item.id} style={{ marginTop: 12, flex: 1, }}>
      <Image
        source={{ uri: item.imgURL }}
        style={{
          height: 169,
          width: 150,
          alignSelf: 'stretch',
          borderRadius: 6,
          
        }}
        resizeMode="cover"


      />
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 100,
            height: 32,
            aspectRatio: 1,
            alignItems: "center",
            justifyContent: "center",
            position:'absolute',
            top:6,
            right:23
            
          }}
        >
          <Icon
            name="heart"
            size={20}
            color={COLORS.black}
          />
        </View>
      <View style={{ flexDirection: "row", gap: 8, padding: 4 }}>
        <Text
          style={{
            flex: 1,
            fontSize: 16,
            fontWeight: "600",
            color: COLORS.primary.primary_500,
            textShadowOffset: {
              height: 1,
              width: 0,
            },
            textShadowRadius: 4,
          }}
        >
          {item.name}
        </Text>
       

      </View>

    </View>
  );
};

const renderItem: ({ item, index }:
  { item: typeof MasonryListData[number], index: number }) =>
  React.ReactElement = ({ item, index }) => {
    return <MasonryCard item={item} />;
  };

const App: FC = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <MasonryListComponent
        keyExtractor={(item: typeof MasonryListData[number]) => item.id}
        ListHeaderComponent={<View />}
        contentContainerStyle={{
          paddingHorizontal: 24,
          alignSelf: 'stretch',
        }}
        numColumns={2}
        data={MasonryListData}
        renderItem={renderItem}
        
      />


    </SafeAreaView>
  );
};

export default App;

