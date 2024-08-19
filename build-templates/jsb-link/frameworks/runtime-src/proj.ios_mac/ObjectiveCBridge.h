//
//  ObjectiveCBridge.h
//
//  Created by Alexander Livshits on 14/08/2024.
//

#import <Foundation/Foundation.h>

@interface ObjectiveCBridge : NSObject
    + (void) callJSFunctionFromObjC:(NSString *) callbackName;
@end
