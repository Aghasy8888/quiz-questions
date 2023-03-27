export default function compareArrays(array1, array2) {
  let resultOfComparing = array1.map((_, n) => array1[n] === array2[n]);
  return resultOfComparing.filter(Boolean).length;
}
