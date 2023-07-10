class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

function isValidParentheses(input: string): boolean {
  const stack = new Stack<string>();
  const openingBrackets = ["(", "{", "["];
  const closingBrackets = [")", "}", "]"];

  for (let i = 0; i < input.length; i++) {
    const char = input[i];

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const lastOpeningBracket = stack.pop();

      if (
        lastOpeningBracket === undefined ||
        openingBrackets.indexOf(lastOpeningBracket) !==
          closingBrackets.indexOf(char)
      ) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

console.log(isValidParentheses("asdkj{kasjdk[jashd{akjsdh}asd]asd}asd")); // true
console.log(isValidParentheses("{[()]")); // false
