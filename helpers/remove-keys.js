const removeKeys = (value, hiddenKeys=[], key) => { 
    if(key && hiddenKeys.includes(key)) {
        return undefined;
    }

    const isObject = typeof value === 'object';
    if(!isObject) {
        return value;
    }

    const isArray = value instanceof Array; 
    const newObject = isArray ? new Array(value.length) : {};
    for (let [prop, data] of Object.entries(value)) {
        const result = removeKeys(data, hiddenKeys, prop);
        if(result !== undefined) {
            newObject[prop] = result;
        }
    }

    return newObject;
}

module.exports = removeKeys;