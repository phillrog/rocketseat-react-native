import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'
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

  renderItem = ({item}) => (
    <View style={styles.productContainer}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <TouchableOpacity
       style={styles.productButton}
       onPress={() => {}}>
          <Text style={styles.productButtonText}>Acessar</Text>
       </TouchableOpacity>
    </View>
  );

  render() {
    const { navigation } = this.props;
      return (
        <View style={styles.container}>
         
          <FlatList keyExtractor={item => item._id}
          data={this.state.docs}
          renderItem={this.renderItem}
          contentContainerStyle={styles.list}
         >
         
          </FlatList>
          {/* <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Detail')}>
            <Text style={styles.buttonText}>Go to Detail Screen</Text>
               
          </TouchableOpacity> */}
        </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa'
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
  },
  list: {
    padding: 20
  },
  productContainer: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 20,
    marginBottom: 20
  },

  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333"
  },

  productDescription: {
    fontSize: 16,
    margin:5,
    color: "#999",
    lineHeight: 24
  },
  productButton: {
    height: 42,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#DA552F",
    backgroundColor: "transparent",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },

  productButtonText: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }
})