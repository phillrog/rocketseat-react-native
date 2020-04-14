import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import api from '../services/api';

export default class Product extends React.Component {
  state = {
    docs: []
  };

  componentDidMount()
  {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/products');
    const {docs} = response.data;

    this.setState({ docs });
  };

  render() {
    const { navigation } = this.props;
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Produto {this.state.counter}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Detail')}>
            <Text style={styles.buttonText}>Go to Detail Screen</Text>
            {
              this.state.docs.map(product => (
               <Text key={product._id}>{product.title}</Text>
              ))
            }            
          </TouchableOpacity>
        </View>
      )
  }
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