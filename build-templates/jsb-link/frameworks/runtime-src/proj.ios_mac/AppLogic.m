//
//  AppLogic.m
//  js-to-objc-mobile
//
//  Created by Alexander Livshits on 16/08/2024.
//

#import "AppLogic.h"
#import "ObjectiveCBridge.h"

@implementation AppLogic
+ (void)nativeMethodWithCallbackName: (NSString *) callback {
    dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
        [NSThread sleepForTimeInterval: 2.0];
        dispatch_async(dispatch_get_main_queue(), ^{
            [ObjectiveCBridge callJSFunctionFromObjC:callback];
        });
    });
}

@end
