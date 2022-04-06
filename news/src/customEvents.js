export default function triggerEvent(target, eventType, eventDetails) {
  const event = new CustomEvent(eventType, { detail: eventDetails });

  target.dispatchEvent(event);
}

document.addEventListener("actionstart", (e) => {
  document.getElementById("load").style.display = "block";
});

document.addEventListener("actionend", (e) => {
  document.getElementById("load").style.display = "none";
});
