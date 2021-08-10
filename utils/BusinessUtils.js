import * as React from 'react';
import { FlatList, View, Text} from 'react-native';
import businessesStyles from '../styles/businessesStyles'
import detailStyles from '../styles/businessDetailsStyles'
import NumberFormat from 'react-number-format';
import moment from 'moment';

export default class BusinessUtils {

    static RevFormattedView = (props) => {
        revenue = props.rev
        return (<NumberFormat
                value = {BusinessUtils.getlastRev(revenue)}
                thousandSeparator={true}
                displayType={'text'}
                prefix={'$'}
                renderText = {(value, props)=>
                    <Text style={BusinessUtils.companyLastRevTextStyle(revenue)}>{value}</Text>
                }/>)
    }

    static parseCompanyAddressString = (companyLocation) => {
        return companyLocation.address + "\n" +
               companyLocation.city + ", " +
               companyLocation.country
      
    }
    
    static companyLastRevTextStyle = (companyRevs)  => {
        lastRevMonth = companyRevs[0].value
        previousRevMonth = companyRevs[1].value
        if (lastRevMonth > previousRevMonth){
          return businessesStyles.revItemPositive
        }else {
          return businessesStyles.revItemNegative
        }
    }

    static formatNumToCurrency = (number) => {
        return '$' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
  
    static getlastRev = (companyRevs) => {
        return companyRevs[0].value
    }

    static formatLocaleDate = (date) => {
        moment.locale('en')
        return moment(date).format('MMMM Do YYYY')
    }

    static getBestRevString = (companyRev) => {
        bestRev =  companyRev.reduce(
                (prev, current) => prev = prev.value > current.value ? prev : current, companyRev[0]
        );
        return this.formatLocaleDate(bestRev.date) +  "\n \n" +this.formatNumToCurrency( bestRev.value )
    }

    static getWorstRevString(companyRev) {
        worstRev = companyRev.reduce(
            (prev, current) => prev = prev.value < current.value ? prev : current, companyRev[0]
        );
        return this.formatLocaleDate(worstRev.date) + "\n \n" + this.formatNumToCurrency(worstRev.value)
    }

    static createCompanyDetailsViewModel = (company) => {
        model = [
                {
                    id:0,
                    label: "Name:",
                    data: company.name
                },
                {
                    id:1,
                    label: "Address:",
                    data: this.parseCompanyAddressString(company.location)
                },
                {
                    id:2,
                    label: "Best Revenue:",
                    data: this.getBestRevString(company.revenue)
                },
                {
                    id:3,
                    label: "Worst Revenue:",
                    data: this.getWorstRevString(company.revenue)
                },
            ]

        return model
    }
}
