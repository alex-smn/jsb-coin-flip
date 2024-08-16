class NativeBridge {
    static _callback = null;

    static onExecute() {
        if (this._callback) {
            this._callback();
        }
        this._callback = null;
    }

    static call(cb) {
        if(!this._callback && cc.sys.isNative && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_OSX)) {
            window.onNativeExecute = this.onExecute.bind(this);

            this._callback = cb;

            jsb.reflection.callStaticMethod("AppLogic", "nativeMethodWithCallbackName:", "onNativeExecute");

        }
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

    buttonHandler: function() {
        this.label.string = "button clicked";
        NativeBridge.call(() => {this.label.string = "Native method has finished"});
        this.label.string = "..."
    }
});
