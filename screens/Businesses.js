import * as React from 'react';
import { FlatList, View, Text} from 'react-native';
import { ListItem} from 'react-native-elements';
import NumberFormat from 'react-number-format';
import companies from '../data.json';
import styles from '../styles/businessesStyles'
import BusinessUtils from '../utils/BusinessUtils'

companiesKeyExtractor = (item) => item.id

export default class Businesses extends React.Component {
 
  render() {
     return (
       <View>
          <FlatList
            style = {styles.flatList}
            keyExtractor = {this.companiesKeyExtractor}
            data = {companies}
            renderItem = {({item}) => (
              <ListItem key={item.id} 
                        containerStyle = {styles.listItem}
                        button onPress = {() => {
                          this.props.navigation.push('Details', {company: item})
                        }}>
                <ListItem.Content style = {styles.listItemContent}>
                  <ListItem.Title style = {styles.listItemTitle}>
                    {item.name}
                  </ListItem.Title>
                  <ListItem.Subtitle >
                    <View style ={styles.listItemSubtileWrapper}>
                      <Text style= {styles.listItemSubtitle}>{
                          BusinessUtils.parseCompanyAddressString(item.location)}
                      </Text>
                      <BusinessUtils.RevFormattedView rev = {item.revenue}></BusinessUtils.RevFormattedView>
                    </View>
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            )}
            />          
       </View>   
     )
  }
}
