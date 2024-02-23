
export default function square(x) {
  if (x < 0) {
    throw new Error("argument should be a positive number");
  } else if (x == 0) {
    throw new Error("argument should be bigger than zero");
  }
  return x * x;
}

export function equal(actual, expected) {
  const result = square(actual);
  if (result === expected) {
    return true;
  } else {
    false;
  }
}
