/*The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them. */

function deepEqual(x, y) {
  if (x === y) {
    return true;
  }
  if (x == null || y == null || typeof x != "object" || typeof y != "object") {
    return false;
  }
  if (Object.keys(x).length != Object.keys(y).length) {
    return false;
  }
  for (let key of Object.keys(x)) {
    if (!Object.keys(y).includes(key) || !deepEqual(x[key], y[key])) {
      return false;
    }
  }
  {
    return true;
  }
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
