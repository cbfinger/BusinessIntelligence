import * as React from 'react';
import { FlatList, View, Text } from 'react-native';
import { ListItem} from 'react-native-elements';
import styles from '../styles/businessDetailsStyles'
import BusinessUtils from '../utils/BusinessUtils'

modelKeyExtractor = (item) => item.id

export default class BusinessDetail extends React.Component {
  render() {
    
    const company = this.props.route.params.company
    const viewModel = BusinessUtils.createCompanyDetailsViewModel(company)
    return <View style={styles.wrapper}>
        <View style={styles.chartWrapper}>
        </View>
        <View style={styles.contentWrapper}>
            <FlatList
              style = {styles.flatList}
              keyExtractor = {this.modelKeyExtractor}
              data ={viewModel} 
              renderItem = {({item}) => (
                  <ListItem key={item.id}
                  containerStyle = {styles.listItem}>
                    <ListItem.Content>
                    <View style={styles.listItemWrapper}>
                      <Text style={styles.itemViewLabel}>{item.label}</Text>
                      <Text style={styles.itemViewValue}>{item.data}</Text>
                    </View>
                    <View style={styles.separator}/>
                    </ListItem.Content>
                  </ListItem>
              )}>

            </FlatList>
          </View>
          </View>
  }
}
