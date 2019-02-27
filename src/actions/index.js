export function counter(number) {
  console.log("on action : ", number);
  return {
    type: "INCREMENT",
    payload: number + 1
  };
}
