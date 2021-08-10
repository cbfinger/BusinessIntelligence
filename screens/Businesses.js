import * as React from 'react';
import { FlatList, View, Text} from 'react-native';
import { ListItem, ListItemProps} from 'react-native-elements';
import NumberFormat from 'react-number-format';
import companies from '../data.json';
import styles from '../styles'

companiesKeyExtractor = (item) => item.id

function parseCompanyAddressString(companyLocation){
  return companyLocation.address + "\n" +
         companyLocation.city + ", " +
         companyLocation.country

}

function companyLastRevTextStyle(companyRev) {
  lastRevMonth = companyRev[0].value
  previousRevMonth = companyRev[1].value
  if (lastRevMonth > previousRevMonth){
    return styles.revItemPositive
  }else {
    return styles.revItemNegative
  }
}

function getlastRev(companyRev) {
  return companyRev[0].value
}

export default class Businesses extends React.Component {
 
  render() {
     return (
       <View>
          <FlatList
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
                      <Text style= {styles.listItemSubtitle}>{parseCompanyAddressString(item.location)}</Text>
                      <NumberFormat
                        value = {getlastRev(item.revenue)}
                        thousandSeparator={true}
                        displayType={'text'}
                        prefix={'$'}
                        renderText = {(value, props)=>
                          <Text style={companyLastRevTextStyle(item.revenue)}>{value}</Text>
                        }
                        />
                    </View>
                  </ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            )}
            style = {styles.flatList}/>          
       </View>   
     )
  }
}
