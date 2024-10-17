import { View, Text, Image, FlatList } from 'react-native';

interface Props {
  images: string[];
}

const ProductImages = ({ images }: Props) => {
  if (images.length === 0) {
    return (
      <View>
        <Image
          source={require('../../../assets/images/no-product-image.png')}
          style={{ width: 300, height: 300 }}
        />
      </View>
    );
  }

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Image
          source={{ uri: item }}
          style={{
            width: 300,
            height: 300,
            marginHorizontal: 7,
            borderRadius: 5,
          }}
        />
      )}
    />
  );
};
export default ProductImages;
