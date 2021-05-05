const maskValue = (value, size) => {
    const maskedValue = value.substring(0, size);
    return `${maskedValue}*`;
}

const maskKeys = (value, hiddenKeys=[], key) => { 
    const isObject = typeof value === 'object';

    if(!isObject && value !== undefined) {
        const isString = typeof value === "string";
        if(key && isString && hiddenKeys.includes(key)) {
            return maskValue(value, 6);
        }
        return value;
    }

    const isArray = value instanceof Array; 
    const newObject = isArray ? new Array(value.length) : {};
    for (let [prop, data] of Object.entries(value)) {
        newObject[prop] = maskKeys(data, hiddenKeys, prop);
    }

    return newObject;
}

module.exports = maskKeys;