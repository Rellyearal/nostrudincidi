// Example scenario
let scope = {
    _lookup: [1, 2, 3, 4, 5]
};

function MyClass(scope) {
    this._lookup = scope._lookup.slice();
}

let obj = new MyClass(scope);
console.log(obj._lookup); // Output: [1, 2, 3, 4, 5]

// Modifying the original array in scope doesn't affect this._lookup
scope._lookup.push(6);
console.log(obj._lookup); // Output still remains: [1, 2, 3, 4, 5]
