import * as React from 'react';
import { FlatList, Text, View } from 'react-native';
import {ListItem, Icon} from 'react-native-elements';
import companies from '../data.json';

export default class Businesses extends React.Component {
 
  render() {
    const goToCompanyDetails = (company) => {
      this.props.navigation.navigate('Details')
    }
     return (
       <FlatList
          keyExtractor = {(item) => item.id}
          data = {companies}
          renderItem = {
            ({item}) => (
              <ListItem key={item.id} bottomDivider button onPress = {() => {goToCompanyDetails(item)}}>
                <ListItem.Content>
                  <ListItem.Title>{item.name}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
              
            )
              
            }
     

       />
     )
  }
}
