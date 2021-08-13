//
//  RNBarChart.swift
//  BusinessIntelligence
//
//  Created by Christian Finger on 8/11/21.
//

import UIKit
import Charts

@objc(RNBarChart)
class BarChart: BarChartView {
  
  @objc let revenueEntries: String = ""


  override init(frame: CGRect) {
    super.init(frame: frame)
    self.data = splitData()
    
  }
  
  private func splitData () -> BarChartData{
    var barChartData: [BarChartDataEntry] = []
    let jsonData = revenueEntries.data(using: .utf8)!
    let revEntries: [RevenueEntry] = try! JSONDecoder().decode([RevenueEntry].self, from: jsonData)
    
    for revEntry in revEntries {
      let chartEntry:BarChartDataEntry = BarChartDataEntry()
      
      chartEntry.x = Double(revEntry.seq)
      chartEntry.y = revEntry.revenueVal
      barChartData.append(chartEntry)
      
    }
    return BarChartData(dataSet: BarChartDataSet(entries: barChartData))
  }

  required init?(coder aDecoder: NSCoder) {
      fatalError("init(coder:) has not been implemented")
  }
  
}
