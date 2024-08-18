//
//  AppLogic.h
//  js-to-objc
//
//  Created by Alexander Livshits on 16/08/2024.
//

#import <Foundation/Foundation.h>
//#import <JavaScriptCore/JSObjectRef.h>

@interface AppLogic : NSObject
    + (void) nativeMethodWithCallbackName: (NSString *) callback;
@end
