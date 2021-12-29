let itemTemplate = document.createElement("template");
let projectcontainer = document.querySelector(".project__container");

// Array of project items
let itemObjects = [
  {
    title: "portfolio",
    desc: "My contributions",
    tags: ["html", "css", "scss", "javascript"],
    links: [
      { text: "view project", href: "index.html" },
      { text: "view code", href: "#" },
    ],
    src: "images/portfolio.png",
  },
  {
    title: "calendar",
    desc: "Dynamic content",
    tags: ["html", "css", "scss", "javascript"],
    links: [
      { text: "view project", href: "#" },
      { text: "view code", href: "#" },
    ],
    src: "images/calendar.png",
  },
  {
    title: "weather",
    desc: "Calling public API",
    tags: ["html", "css", "scss", "javascript", "API"],
    links: [
      { text: "view project", href: "#" },
      { text: "view code", href: "#" },
    ],
    src: "images/weather-01.png",
  },
  {
    title: "weather",
    desc: "Dynamic content",
    tags: ["html", "css", "scss", "javascript", "API"],
    links: [
      { text: "view project", href: "#" },
      { text: "view code", href: "#" },
    ],
    src: "images/calendar-2.png",
  },
  {
    title: "weather",
    desc: "Dynamic content",
    tags: ["html", "css", "scss", "javascript", "API"],
    links: [
      { text: "view project", href: "#" },
      { text: "view code", href: "#" },
    ],
    src: "images/calendar-2.png",
  },
  {
    title: "weather",
    desc: "Dynamic content",
    tags: ["html", "css", "scss", "javascript", "API"],
    links: [
      { text: "view project", href: "#" },
      { text: "view code", href: "#" },
    ],
    src: "images/calendar-2.png",
  },
];
// Template for project iotem
itemTemplate.innerHTML = `<figure class="item">
                <img id="image" class="item__image" src="images/room4.jpg" alt="">
                <figcaption class="item__header">
                    <h3 id="title" class="item__title">Calendar</h3>
                    <p id="desc" class="item__desc">Dynamic content manipulating with javascript. Get elements of
                        document, create
                        template and clone
                        copy from template to create new elements.
                    </p>
                    <ul class="item__list" id="tags">
                        
                    </ul>
                    <ul class="item__list--links" id="links">
                        <li><i class="fa fa-cube"></i><a class="link--case" href="">view project</a></li>
                        <li><i class="fa fa-github"></i><a class="link--case" href="">view code</a></li>
                        </li>
                    </ul>
                </figcaption>
            </figure>`;

// Iterate projects array and create each element
for (let i = 0; i < itemObjects.length; i++) {
  createItem(itemObjects[i]);
}

// Create project items
function createItem(item) {
  let newItem = itemTemplate.content.cloneNode(true);

  let image = newItem.querySelector("#image");
  let title = newItem.querySelector("#title");
  let desc = newItem.querySelector("#desc");
  let tags = newItem.querySelector("#tags");
  let links = newItem.querySelector("#links");

  image.src = item.src;
  title.textContent = item.title;
  desc.textContent = item.desc;
  for (let i = 0; i < item.tags.length; i++) {
    let li = document.createElement("li");
    li.innerText = item.tags[i];
    tags.append(li);
  }

  let li = `<li><i class="fa fa-cube"></i><a class="link--case " href="${item.links[0].href}">${item.links[0].text}</a></li >
                    <li><i class="fa fa-github"></i><a class="link--case" href="${item.links[1].href}">${item.links[1].text}</a></li>`;
  links.innerHTML = li;

  projectcontainer.append(newItem);
}
