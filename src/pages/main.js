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
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
    </View>
  );

  render() {
    const { navigation } = this.props;
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Produto</Text>
          <FlatList keyExtractor={item => item._id}
          data={this.state.docs}
          renderItem={this.renderItem}
         >
           <TouchableOpacity onPress={() => {}}></TouchableOpacity>
          </FlatList>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Detail')}>
            <Text style={styles.buttonText}>Go to Detail Screen</Text>
               
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