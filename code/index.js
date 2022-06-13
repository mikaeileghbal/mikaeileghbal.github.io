const App = (function () {
  const topLinks = document.querySelectorAll(".link--top");
  topLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      activeTopLink(e.target);
    });
  });

  function activeTopLink(elem) {
    console.log(topLinks);
    console.log(elem);
    topLinks.forEach((a) => {
      a.classList.remove("active");
    });
    elem.classList.add("active");
  }

  const menu = document.querySelector(".menu-container");

  function closeSideMenu() {
    document.querySelector(".topnav").style.right = "0";
  }

  function openSideMenu() {
    document.querySelector(".topnav").style.right = "-100%";
  }

  menu.addEventListener("click", slideMenu);
  menu.addEventListener("click", animateMenu);
  function slideMenu(event) {
    event.stopPropagation();
    menu.classList.toggle("change");
    if (menu.classList.contains("change")) {
      closeSideMenu();
    } else {
      openSideMenu();
    }
  }

  function animateMenu() {}

  document.body.addEventListener("click", bodyClick, false);
  function bodyClick(event) {
    if (menu.classList.contains("change")) {
      slideMenu(event);
    }
  }

  window.addEventListener("resize", resize);
  function resize(event) {
    if (menu.classList.contains("change") && window.innerWidth >= 768) {
      slideMenu(event);
    }
  }

  window.addEventListener("scroll", slideHeader);
  function slideHeader(event) {
    const header = document.getElementById("header");

    const scroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    // Set header style
    if (scroll > 20) {
      header.classList.add("slide");
    } else {
      header.classList.remove("slide");
    }

    // Set active top link
    if (scroll === 0) {
      activeTopLink(document.querySelectorAll(".link--top")[0]);
    }
  }

  // Projects section
  let itemTemplate = document.createElement("template");
  let projectcontainer = document.querySelector(".project__container");

  // Array of project items
  let itemObjects = [
    {
      title: "color rating ",
      desc: "react context react router",
      tags: ["react", "javascript", "context", "router"],
      links: [
        { text: "view project", href: "./color-rating/index.html" },
        {
          text: "view code",
          href: "https://github.com/mikaeileghbal/color-rating.git",
        },
      ],
      src: "./images/colorrating.png",
    },
    {
      title: "form validation",
      desc: "form custom validation",
      tags: ["html", "css", "scss", "javascript"],
      links: [
        { text: "view project", href: "./formvalidation/index.html" },
        {
          text: "view code",
          href: "https://github.com/mikaeileghbal/form-validation.git",
        },
      ],
      src: "./images/formvalidate.png",
    },
    {
      title: "calendar",
      desc: "Dynamic Content",
      tags: ["html", "css", "scss", "javascript"],
      links: [
        { text: "view project", href: "./calendar-planner/index.html" },
        {
          text: "view code",
          href: "https://github.com/mikaeileghbal/calendar-planner.git",
        },
      ],
      src: "./images/calendar.png",
    },
    {
      title: "weather",
      desc: "Public API",
      tags: ["html", "css", "scss", "javascript", "API"],
      links: [
        { text: "view project", href: "./weather-items/index.html" },
        {
          text: "view code",
          href: "https://github.com/mikaeileghbal/weather-items.git",
        },
      ],
      src: "./images/weather.png",
    },
    {
      title: "wordcounter",
      desc: "Regular Expressions",
      tags: ["html", "css", "scss", "javascript", "API"],
      links: [
        { text: "view project", href: "./wordcounter/index.html" },
        {
          text: "view code",
          href: "https://github.com/mikaeileghbal/wordcounter.git",
        },
      ],
      src: "./images/wordcounter.png",
    },
    {
      title: "worldclock",
      desc: "Web Components",
      tags: ["html", "css", "scss", "javascript", "API"],
      links: [
        { text: "view project", href: "./worldclock/index.html" },
        {
          text: "view code",
          href: "https://github.com/mikaeileghbal/worldclock.git",
        },
      ],
      src: "./images/worldclock.png",
    },
    {
      title: "news",
      desc: "Web Components & Public API ",
      tags: ["html", "css", "scss", "javascript", "API"],
      links: [
        { text: "view project", href: "./news/index.html" },
        {
          text: "view code",
          href: "https://github.com/mikaeileghbal/news.git",
        },
      ],
      src: "./images/news.png",
    },
  ];
  // Template for project iotem
  itemTemplate.innerHTML = `
							<figure class="item">
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
                    <ul class="item__list--links" id="viewlinks">
                    </ul>
                </figcaption>
            	</figure>`;

  // Iterate projects array and create each element
  for (let i = 0; i < itemObjects.length; i++) {
    projectcontainer.appendChild(createItem(itemObjects[i]));
  }

  // Create project items
  function createItem(item) {
    let newItem = itemTemplate.content.cloneNode(true);

    let image = newItem.querySelector("#image");
    let title = newItem.querySelector("#title");
    let desc = newItem.querySelector("#desc");
    let tags = newItem.querySelector("#tags");
    let viewlinks = newItem.querySelector("#viewlinks");

    image.src = item.src;
    title.textContent = item.title;
    desc.textContent = item.desc;
    for (let i = 0; i < item.tags.length; i++) {
      let li = document.createElement("li");
      li.innerText = item.tags[i];
      tags.append(li);
    }

    let li = `<li>
              	<a class="link--case" href="${item.links[0].href}"><i class="fa fa-cube"></i> live project</a>
            	</li>
            	<li>
              	<a class="link--case" href="${item.links[1].href}"><i class="fa fa-github"></i> view code</a>
            	</li>`;

    viewlinks.innerHTML = li;
    return newItem;
  }
})();
