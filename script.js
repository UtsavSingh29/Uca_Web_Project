document.addEventListener('DOMContentLoaded', () => {
  const homepageEventsContainer = document.getElementById('homepage-events-container');

  // Load published events on homepage
  function loadHomepageEvents() {
    const events = JSON.parse(localStorage.getItem('events')) || [];
    console.log("Loaded events from localStorage:", events);
    const publishedEvents = events.filter(event => event.published);

    // Clear the container before adding new events
    homepageEventsContainer.innerHTML = '';

    publishedEvents.forEach((event, index) => {
      const eventCard = document.createElement('div');
      eventCard.className = 'homepage-event-card zoom-in-animation'; // Add animation class
      eventCard.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Club:</strong> ${event.club}</p>
        <p><strong>Description:</strong> ${event.description}</p>
        ${event.image ? `<img src="${event.image}" alt="${event.name}" style="max-width: 100%;"/>` : ''}
      `;

      // Append event card to container
      homepageEventsContainer.appendChild(eventCard);

      // Delay to allow animation effect
      setTimeout(() => {
        eventCard.classList.add('zoom-in-animation');
      }, 100 * index); // Staggered delay
    });
  }

  loadHomepageEvents();
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();  // Prevents the form from submitting normally
            alert("Your message has been sent!");
        });