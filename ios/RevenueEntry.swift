//
//  RevenueEntry.swift
//  BusinessIntelligence
//
//  Created by Christian Finger on 8/12/21.
//

import Foundation

struct RevenueEntry: Decodable {
  
  enum Category: String, Decodable {
    case swift, combine, debugging, xcode
  }
  
  let date: String
  let value: Double
  let seq: Int
}
