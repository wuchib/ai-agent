type ClassValue = string | number | false | null | undefined | ClassValue[];

function flattenClasses(values: ClassValue[], output: string[]) {
  for (const value of values) {
    if (!value && value !== 0) {
      continue;
    }

    if (Array.isArray(value)) {
      flattenClasses(value, output);
      continue;
    }

    output.push(String(value));
  }
}

export function cn(...inputs: ClassValue[]) {
  const classes: string[] = [];
  flattenClasses(inputs, classes);
  return classes.join(" ");
}
