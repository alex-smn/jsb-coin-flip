function callNative(cb) {
    if(cc.sys.isNative && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_OSX)) {
        jsb.reflection.callStaticMethod("AppLogic", "nativeMethod");
        cb();
    }
}


cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        }
    },

    onLoad: function () {

        window.myStaticMethod = (str) => {
            // console.log(str)
            this.label.string = str;
        }
    },

    buttonHandler: function() {
        this.label.string = "button clicked";
        callNative(() => {this.label.string = "Native method has started"});
        // window.myStaticMethod("hello");
        this.label.string = "Native method is being executed..."
    }
});
