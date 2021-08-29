import { handleFormSubmit } from "./form.js";

export const dragndrop = () => {
  const dragndropForm = document.querySelector(".dragndrop-form");
  const dragImages = document.querySelectorAll(".dragndrop-img");
  const placeholders = document.querySelectorAll(".placeholder");

  let draggedImage = null;
  let hoveredImage = null;
  let draggedImagePlaceholder = null;

  const dragover = (e) => {
    e.preventDefault();
  };

  const dragdrop = (e) => {
    // e.target.classList.remove("hovered");
    if (e.target.nodeName !== "IMG") {
      e.target.append(draggedImage);
    }
    if (draggedImage && hoveredImage) {
      hoveredImage.parentElement.replaceChild(draggedImage, hoveredImage);
      draggedImagePlaceholder.appendChild(hoveredImage);
    }
    getImagesOrder();
  };

  const dragstart = (e) => {
    draggedImage = e.target;
    draggedImagePlaceholder = e.target.parentElement;
    // e.target.classList.add("hold");
    setTimeout(() => {
      e.target.classList.add("hide");
    });
  };

  const dragend = (e) => {
    draggedImage = null;
    draggedImagePlaceholder = null;
    hoveredImage = null;
    e.target.classList.remove("hide");
  };

  const dragenter = (e) => {
    hoveredImage = e.target;
  };

  const dragleave = () => {
    hoveredImage = null;
  };

  placeholders.forEach((placeholder) => {
    placeholder.addEventListener("dragover", dragover);
    placeholder.addEventListener("drop", dragdrop);
  });

  dragImages.forEach((item) => {
    item.addEventListener("dragstart", dragstart);
  });
  dragImages.forEach((item) => {
    item.addEventListener("dragend", dragend);
  });

  dragImages.forEach((item) => {
    item.addEventListener("dragenter", dragenter);
  });
  dragImages.forEach((item) => {
    item.addEventListener("dragleave", dragleave);
  });

  const getImagesOrder = () => {
    const dragndropAnswerInput = document.getElementById("dragndropAnswer");
    const rowAnswer = document.querySelector("#row-answer");
    const arrChildren = Array.from(rowAnswer.children);
    const imagesOrder = arrChildren.map((item) => {
      if (item.firstChild) {
        return item.firstChild.getAttribute("id");
      }
    });
    dragndropAnswerInput.value = imagesOrder.join(",");
  };

  handleFormSubmit("dragndropAnswer", dragndropForm);
};
