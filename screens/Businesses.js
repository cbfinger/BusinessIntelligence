import * as React from 'react';
import { FlatList, View} from 'react-native';
import { ListItem, ListItemProps} from 'react-native-elements';
import companies from '../data.json';
import styles from '../styles'

companiesKeyExtractor = (item) => item.id
companiesRenderItem = ({item}) => (
  <ListItem key={item.id} 
            bottomDivider 
            chevron
            button onPress = {() => {goToCompanyDetails(item)}}>
    <ListItem.Content>
      <ListItem.Title style = {styles.listItemTitle}>
        {item.name}
      </ListItem.Title>
      <ListItem.Subtitle style= {styles.listItemSubtitle}>
        {parseCompanyAddressString(item.location)}
      </ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>

)

function parseCompanyAddressString(companyLocation){
  return companyLocation.address + "\n" +
         companyLocation.city + ", " +
         companyLocation.country

}

export default class Businesses extends React.Component {
 
  render() {
    const goToCompanyDetails = (company) => {
      this.props.navigation.navigate('Details')
    }
     return (
       <View>
          <FlatList
            keyExtractor = {this.companiesKeyExtractor}
            data = {companies}
            renderItem = {companiesRenderItem}
            style = {styles.flatList}/>          
       </View>   
     )
  }
}
