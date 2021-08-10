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
    console.log(viewModel);
    return <View style={styles.wrapper}>
        <View style={styles.chartWrapper}>
        </View>
        <View style={styles.contentWrapper}>
            <FlatList
              keyExtractor = {this.modelKeyExtractor}
              data ={viewModel} 
              renderItem = {({item}) => (
                  <ListItem key={item.id}>
                    <ListItem.Content>
                    <View>
                      <Text>{item.label}</Text>
                      <Text>{item.data}</Text>
                    </View>
                    </ListItem.Content>
                  </ListItem>
              )}>

            </FlatList>
          </View>
          </View>
  }
}
