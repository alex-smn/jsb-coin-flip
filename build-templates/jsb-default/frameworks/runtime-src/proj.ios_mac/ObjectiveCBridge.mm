//
//  ObjectiveCBridge.mm
//
//  Created by Alexander Livshits on 14/08/2024.
//

#import "ObjectiveCBridge.h"
#import "CppBridge.h"

@implementation ObjectiveCBridge
+ (void)callJSFunctionFromObjC:(NSString *) callbackName {
    callJsFunctionFromCpp([callbackName UTF8String]);
}

@end
