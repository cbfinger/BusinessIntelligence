//
//  RNChartManager.m
//  BusinessIntelligence
//
//  Created by Christian Finger on 8/11/21.
//

#import <Foundation/Foundation.h>
#import "React/RCTViewManager.h"
#import "BusinessIntelligence-Swift.h"


@interface RNChartManager : RCTViewManager
@end

@implementation RNChartManager

RCT_EXPORT_MODULE()

-(UIView *) view {
  BarChart *barView = [[BarChart alloc] init];
  return barView;
}

RCT_EXPORT_VIEW_PROPERTY(revenue, NSString)


@end

