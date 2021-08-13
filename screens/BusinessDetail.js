import * as React from 'react';
import { FlatList, View, Text,  NativeModules, requireNativeComponent} from 'react-native';
import { ListItem} from 'react-native-elements';
import styles from '../styles/businessDetailsStyles'
import BusinessUtils from '../utils/BusinessUtils'

modelKeyExtractor = (item) => item.id

const BarChart = requireNativeComponent("RNChart")

export default class BusinessDetail extends React.Component {
  render() {
    
    const company = this.props.route.params.company
    const viewModel = BusinessUtils.createCompanyDetailsViewModel(company)
    const JSONRev = JSON.stringify(company.revenue)
    
    return <View style={styles.wrapper}>
        <View style={styles.chartWrapper}>
          <BarChart style={styles.chart} revenue={JSONRev}/>
        </View>
        <View style={styles.separator}/>
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
