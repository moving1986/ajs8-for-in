const orderByProps = (obj, order = ['']) => {
    const keys = [
    ...order,
    ...Object.keys(obj)
        .filter(key => !order.includes(key))
        .sort()
    ];    

    return keys.map( key => ({
        key,
        value: obj[key]
    }));
}

export default  orderByProps