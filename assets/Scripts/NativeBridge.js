export class NativeBridge {
    static _callback = null;

    static onExecute() {
        if (this._callback) {
            this._callback();
        }
        this._callback = null;
    }

    static call(cb) {
        if (!this._callback) {
            if(cc.sys.isNative && (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_OSX)) {
                window.onNativeExecute = this.onExecute.bind(this);

                this._callback = cb;

                jsb.reflection.callStaticMethod("AppLogic", "showAdWithCallbackName:", "onNativeExecute");
            } else {
                console.log("not native");
                this._callback = cb;
                this.onExecute();
            }
        }
    }
}