const cone = document.querySelector("#cone");
const layers = document.querySelectorAll('.parallax-layer');
const accordionItemHeaders = document.querySelectorAll(
    ".accordion-item-header"
  );
  
// Accordion List

  accordionItemHeaders.forEach((accordionItemHeader) => {
    accordionItemHeader.addEventListener("click", (event) => {
  
      const currentlyActiveAccordionItemHeader = document.querySelector(
        ".accordion-item-header.active"
      );
      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }
      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    });
  });
  

// Parallax Effect

  const updateParallax = () => {
    layers.forEach((layer, index) => {
      const speed = 0.1;
      const yOffset = -window.scrollY * speed;
      layer.style.transform = `translateY(${yOffset}px)`;
    });
  };
  
  window.addEventListener('scroll', updateParallax);
  window.addEventListener('resize', updateParallax);
  
  // Initial update to handle scroll position on load
  updateParallax();