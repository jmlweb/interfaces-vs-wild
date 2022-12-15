const castArray = <T>(value: T | T[]): T[] => Array.isArray(value) ? value : [value];

export default castArray;