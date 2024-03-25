export const makeSquare = (e) => {
  const ClickedElemet = e.target;
  const divSize = ClickedElemet.offsetWidth / 2;

  //first div
  const firstElement = document.createElement("div");
  firstElement.style.height = `${divSize}px`;
  firstElement.style.width = `${divSize}px`;
  firstElement.setAttribute("class", "flexContainer");
  firstElement.style.border = "1px solid black";

  //second div
  const secondElement = document.createElement("div");
  secondElement.style.height = `${divSize}px`;
  secondElement.style.width = `${divSize}px`;
  secondElement.setAttribute("class", "flexContainer");
  secondElement.style.border = "1px solid black";

  //third div
  const thirdElement = document.createElement("div");
  thirdElement.style.height = `${divSize}px`;
  thirdElement.style.width = `${divSize}px`;
  thirdElement.setAttribute("class", "flexContainer");
  thirdElement.style.border = "1px solid black";

  //fourth div
  const fourthElement = document.createElement("div");
  fourthElement.style.height = `${divSize}px`;
  fourthElement.style.width = `${divSize}px`;
  fourthElement.setAttribute("class", "flexContainer");
  fourthElement.style.border = "1px solid black";
  ClickedElemet.append(
    firstElement,
    secondElement,
    thirdElement,
    fourthElement
  );
};
