import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import searchStore from './store/Search';
import trendingStore from './store/Trending';
import {observer} from 'mobx-react';
import {TabNavigator} from 'react-navigation';
import {getRandomColor} from './utils/api';

const getDimensions = ({width, height}) => {
  const window = Dimensions.get('window');
  return {
    width: window.width,
    height: window.width * height / width
  };
}
@observer
class SearchBox extends React.Component {
  render() {
    return (<View style={styles.searchBox}>
          <TextInput 
            placeholder={this.props.placeholder} 
            style={styles.input}
            onChangeText={(value) => searchStore.updateKeyword(value)}
            />
          <Button
            title='Go'
            onPress={() => searchStore.fetchResults()}
          />
        </View>);
  }
}

const ResultImage = ({item}) => (<Image 
  style={[getDimensions({
    width: parseInt(item.images.downsized_still.width,10),
    height: parseInt(item.images.downsized_still.height, 10)
  }), {backgroundColor: getRandomColor()}]}
  source={{uri: item.images.downsized.url}}
/>);

@observer
class TrendingPage extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('./img/trending.png')} style={[styles.icon, {tintColor}]} />
    )
  }
  componentWillMount() {
    trendingStore.fetchResults();
  }

  render() {
    return <View style={styles.container}>
      {trendingStore.isLoading ? 
          <ActivityIndicator size='large' style={{flex: 1}}/> :
          <FlatList 
            style={styles.list}
            data={trendingStore.resultItems}
            keyExtractor={(item) => item.id }
            renderItem={ResultImage}
          />
        }
    </View>
  }
}

@observer
class SearchPage extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Image source={require('./img/home.png')} style={[styles.icon, {tintColor}]} />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <SearchBox 
          placeholder='Search'
          />
        {searchStore.isLoading ? 
          <ActivityIndicator size='large' style={{flex: 1}}/> :
          <FlatList 
            style={styles.list}
            data={searchStore.resultItems}
            keyExtractor={(item) => item.id }
            renderItem={ResultImage}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
  text: {
    color: '#000'
  },
  input:{
    flex: 1,
    height: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  searchBox:{
    flexDirection: 'row',
    borderBottomColor: 'rgba(0, 0, 0, 0.4)',
    borderBottomWidth: 1,
  },
  list: {
    flex: 1,
    width: '100%'
  },
  icon: {
    width: 24,
    height: 24
  }
});

export default TabNavigator({
  Search: {
    screen: SearchPage,
  },
  Trending: {
    screen: TrendingPage,
  }
});