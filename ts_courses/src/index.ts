import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    // concatenation("2", "2");
    concatenation(input.value, "hello!");
  });
}
