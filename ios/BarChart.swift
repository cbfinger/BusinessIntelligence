//
//  RNBarChart.swift
//  BusinessIntelligence
//
//  Created by Christian Finger on 8/11/21.
//

import UIKit
import Charts

@objc 
class BarChart: UIView {
  
  private var revenue: NSString = ""
  private var barChartView = BarChartView()
  
  
  @objc
  func setRevenue(_ val: NSString) {
    revenue = val
  }
  
  override public func layoutSubviews() {
    super.layoutSubviews()
    let frame = CGRect(x: 0, y: 0, width: self.frame.width, height: self.frame.height)
        barChartView.frame = frame

        self.initBarChart()
  }

  private func initBarChart(){
    let revEntryArray = parseJsonRevenue();
    setupBarChartViewWithData(revArray: revEntryArray)
    barChartView.animate(xAxisDuration: 2.0, yAxisDuration: 2.0)
    self.addSubview(barChartView)
  }
  
  private func setupBarChartViewWithData (revArray: [RevenueEntry]){
    var barChartData: [BarChartDataEntry] = []
    var labels: [String] = []
   
    for revEntry in revArray {
      let chartEntry:BarChartDataEntry = BarChartDataEntry()
      let date = formatStringToDate(dateString: revEntry.date)
      labels.append(formatDate(date: date))
      chartEntry.x = Double(revEntry.seq)
      chartEntry.y =  revEntry.value
      barChartData.append(chartEntry)
      
    }
    let dataSet = BarChartDataSet(entries: barChartData, label: "Revenue")
    let barColor = UIColor(red: 0.26, green: 0.35, blue: 0.38, alpha: 1.00)
    dataSet.valueFormatter = DefaultValueFormatter(formatter: formatToCurrency())
    dataSet.colors = [barColor]
    barChartView.data = BarChartData(dataSet: dataSet)
    barChartView.rightAxis.enabled = false
    barChartView.leftAxis.enabled = false
    barChartView.xAxis.valueFormatter = IndexAxisValueFormatter(values: labels)
  }
  

  private func parseJsonRevenue() -> [RevenueEntry]{
    let jsonData = String(revenue).data(using: .utf8)!
    let revEntries: [RevenueEntry] = try! JSONDecoder().decode([RevenueEntry].self, from: jsonData)
    return revEntries
  }
  
  private func formatToCurrency() -> NumberFormatter{
    let formatter = NumberFormatter()
    formatter.locale = Locale.current
    formatter.numberStyle = .currency
    formatter.usesGroupingSeparator = true
    return formatter
  }
  
  private func formatDate(date: Date) -> String{
    let formatter = DateFormatter()
    formatter.dateFormat = "MM/dd/yy"
    let dateString = formatter.string(from: date)
    return dateString
  }
  
  private func formatStringToDate(dateString: String) -> Date{
    let formatter = DateFormatter()
    formatter.dateFormat = "yyyy-MM-dd HH:mm:ss"
    let date = formatter.date(from: dateString)
    return date!
  }

}
