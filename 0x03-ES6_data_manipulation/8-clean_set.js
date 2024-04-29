export default function cleanSet(set, startString) {
  // Check if input parameters are valid
  if (!set || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  const cleanedValues = [];
  for (const value of set) {
    // Check if the value starts with the specified startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      const cleanedValue = value.substring(startString.length);
      cleanedValues.push(cleanedValue);
    }
  }
  return cleanedValues.join('-');
}
