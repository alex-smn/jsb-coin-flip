//
//  CppBridge.cpp
//  js-to-objc
//
//  Created by Alexander Livshits on 16/08/2024.
//

#include "CppBridge.h"
#include "cocos2d.h"
#include <iostream>
#include "scripting/js-bindings/jswrapper/SeApi.h"

void callJsFunctionFromCpp(const std::string& jsFunctionName) {
    se::ScriptEngine* se = se::ScriptEngine::getInstance();
    se::AutoHandleScope hs;

    se::Value global;
    se->getGlobalObject()->getProperty("window", &global);

    
    if (global.isObject()) {
        se::Value jsFunction;
        
        if (global.toObject()->getProperty(jsFunctionName.c_str(), &jsFunction) && jsFunction.isObject() && jsFunction.toObject()->isFunction()) {
            se::ValueArray args;

            jsFunction.toObject()->call(args, global.toObject());
        }
    }
}
