import React, {Component} from 'react';

import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { WebView } from 'react-native-webview';

function Detail(props) {

  const { navigation, route: { params: { product: product } }, route  } = props;

  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: product.title });
  }, [navigation, route]);
  
  return (
    <WebView source={{uri: product.url}}></WebView>
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