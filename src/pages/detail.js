import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native'

function Detail(props) {
  const { navigation, route: { params: { product: product } }, route  } = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: product.title });
  }, [navigation, route]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product.title}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => Linking.openURL(`${product.url}`)}>
        <Text style={styles.buttonText}>Abrir site</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb'
      },
      text: {
        color: '#101010',
        fontSize: 24,
        fontWeight: 'bold'
      },
      buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
      },
      buttonText: {
        fontSize: 20,
        color: '#fff'
      }
})

export default Detail;