// eslint-disable-next-line import/prefer-default-export
export default function completed(arrs) {
  const { li, arr } = arrs;
  const arrItem = arr.find((element) => element.description === li.textContent);
  arrItem.completed = !arrItem.completed;
}