import businessesStyles from '../styles/businessesStyles'
import detailStyles from '../styles/businessDetailsStyles'

export default class BusinessUtils {
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
      
    static getlastRev = (companyRevs) => {
        return companyRevs[0].value
    }

    static getBestRevString = (companyRev) => {
        bestRev =  companyRev.reduce(
                (prev, current) => prev = prev.value > current.value ? prev : current, companyRev[0]
        );
        return bestRev.date + " " + bestRev.value
    }

    static getWorstRevString(companyRev) {
        worstRev = companyRev.reduce(
            (prev, current) => prev = prev.value < current.value ? prev : current, companyRev[0]
        );
        return worstRev.date + " " + worstRev.value
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
                    label: "Best Revenue",
                    data: this.getBestRevString(company.revenue)
                },
                {
                    id:3,
                    label: "Worst Revenue",
                    data: this.getWorstRevString(company.revenue)
                },
            ]

        return model
    }
}
