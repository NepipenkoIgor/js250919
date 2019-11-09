function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
    return value;
}

class Something {
    constructor() {
        _property.set(this, {
            writable: true,
            value: void 0
        });

        _classPrivateFieldSet(this, _property, "test");
    }

}

var _property = new WeakMap();


class P {
    #privateProp = 10;

    getPrivateProp(){
        return this.#privateProp;
    }
}
