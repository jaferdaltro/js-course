function createProduct(name) {
    return {
        get name() {
            return name;
        }, 
        set name(v) {
            v = v.replace('thing.', '');
            name = v;
        }
    };
}

const p2 = createProduct('short');
p2.name = 'something';
console.log(p2.name);