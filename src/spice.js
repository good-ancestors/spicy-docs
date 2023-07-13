let h1Headings = document.getElementsByTagName("h1");
let h2Headings = document.getElementsByTagName("h2");
let h3Headings = document.getElementsByTagName("h3");
let h4Headings = document.getElementsByTagName("h4");
let h5Headings = document.getElementsByTagName("h5");
let h6Headings = document.getElementsByTagName("h6");
let tables = document.getElementsByTagName("table");

Object.entries(tables).forEach((table) => {
  console.log(table[1].parentNode);
  let div = document.createElement("div");
  div.classList.add("full-width");
  table[1].parentNode.insertBefore(div, table[1]);
  div.appendChild(table[1]);
});

// Hide all content below H1 headings
Object.entries(h1Headings).forEach((heading) => {
  let nextSibling = document.getElementById(heading[1].id).nextElementSibling;
  console.log(nextSibling);
  while (nextSibling && nextSibling.nodeName !== "H1") {
    nextSibling.style.display = "none";
    nextSibling = nextSibling.nextElementSibling;
  }
});

// Make H1 headings clickable
Object.entries(h1Headings).forEach((heading) => {
  heading[1].addEventListener("click", () => {
    let nextSibling = document.getElementById(heading[1].id).nextElementSibling;
    let expanded = nextSibling.style.display === "block";
    let contentIsUnderH2 = false;
    while (nextSibling && nextSibling.nodeName !== "H1") {
      if (expanded) {
        nextSibling.style.display = "none";
      } else {
        if (nextSibling.nodeName === "H2") {
          contentIsUnderH2 = true;
          nextSibling.style.display = "block";
        }
        if (!contentIsUnderH2 && nextSibling.nodeName !== "SCRIPT") {
          nextSibling.style.display = "block";
        }
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  });
});

// Make H2 headings clickable
Object.entries(h2Headings).forEach((heading) => {
  heading[1].addEventListener("click", () => {
    let nextSibling = document.getElementById(heading[1].id).nextElementSibling;
    let contentIsUnderH3 = false;
    let expanded = nextSibling.style.display === "block";
    while (
      nextSibling &&
      nextSibling.nodeName !== "H1" &&
      nextSibling.nodeName !== "H2"
    ) {
      if (expanded) {
        nextSibling.style.display = "none";
      } else {
        if (nextSibling.nodeName === "H3") {
          contentIsUnderH3 = true;
          nextSibling.style.display = "block";
        }
        if (!contentIsUnderH3 && nextSibling.nodeName !== "SCRIPT") {
          nextSibling.style.display = "block";
        }
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  });
});

// Make H3 headings clickable
Object.entries(h3Headings).forEach((heading) => {
  heading[1].addEventListener("click", () => {
    let nextSibling = document.getElementById(heading[1].id).nextElementSibling;
    let contentIsUnderH4 = false;
    let expanded = nextSibling.style.display === "block";
    while (
      nextSibling &&
      nextSibling.nodeName !== "H1" &&
      nextSibling.nodeName !== "H2" &&
      nextSibling.nodeName !== "H3"
    ) {
      if (expanded) {
        nextSibling.style.display = "none";
      } else {
        if (nextSibling.nodeName === "H4") {
          contentIsUnderH4 = true;
          nextSibling.style.display = "block";
        }
        if (!contentIsUnderH4 && nextSibling.nodeName !== "SCRIPT") {
          nextSibling.style.display = "block";
        }
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  });
});

// Make H4 headings clickable
Object.entries(h4Headings).forEach((heading) => {
  heading[1].addEventListener("click", () => {
    let nextSibling = document.getElementById(heading[1].id).nextElementSibling;
    let contentIsUnderH5 = false;
    let expanded = nextSibling.style.display === "block";
    while (
      nextSibling &&
      nextSibling.nodeName !== "H1" &&
      nextSibling.nodeName !== "H2" &&
      nextSibling.nodeName !== "H3" &&
      nextSibling.nodeName !== "H4"
    ) {
      if (expanded) {
        nextSibling.style.display = "none";
      } else {
        if (nextSibling.nodeName === "H5") {
          // contentIsUnderH5 = true; // since we're not making H5 headings clickable
          nextSibling.style.display = "block";
        }
        if (!contentIsUnderH5 && nextSibling.nodeName !== "SCRIPT") {
          nextSibling.style.display = "block";
        }
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  });
});

let style = document.createElement("style");
style.innerHTML = `
body.doc-content {
  padding: 16px 8px;
  margin: 0 auto;
  max-width: 720px;
}

.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow-x: scroll;
  margin-bottom: 16px;
  margin-top: 16px;

}

table {
  width: 90%;
}

h1,
h2,
h3,
h4 {
  background-color: #eee;
  cursor: pointer;
  border-radius: 8px;
  padding: 8px !important;
}

h1:hover,
h2:hover,
h3:hover,
h4:hover {
  background-color: #ddd;
}
`;
document.head.appendChild(style);

let metaTag = document.createElement("meta");
metaTag.setAttribute("name", "viewport");
metaTag.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(metaTag);