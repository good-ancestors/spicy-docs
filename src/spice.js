let h1Headings = document.getElementsByTagName("h1");
let h2Headings = document.getElementsByTagName("h2");
let h3Headings = document.getElementsByTagName("h3");
let h4Headings = document.getElementsByTagName("h4");
let h5Headings = document.getElementsByTagName("h5");
let h6Headings = document.getElementsByTagName("h6");
let tables = document.getElementsByTagName("table");
let links = document.getElementsByTagName("a");

// Add GAP header
let firstElement = document.getElementsByTagName("body")[0].firstChild;
let secondElement = firstElement.nextSibling;

let headerDiv = document.createElement("div");
headerDiv.classList.add("full-width");
headerDiv.classList.add("header");
document.body.prepend(headerDiv);

let img = document.createElement("img");
img.src =
  "https://images.squarespace-cdn.com/content/v1/6364a71770e4605f465b714e/9312ec3f-188a-4c91-b3f7-bb35790cbd41/The+Glyph+-+coloured+for+light+backgrounds.png?format=300w";
img.style.width = "100px";
img.style.height = "100px";
img.style.position = "absolute";
img.style.top = "0";
img.style.left = "0";
headerDiv.appendChild(img);
headerDiv.appendChild(firstElement);
headerDiv.appendChild(secondElement);

// wrap main content in padded div
let mainContentDiv = document.createElement("div");
let mainContentElement = headerDiv.nextSibling;
let mainContentElements = [mainContentElement];
mainContentDiv.classList.add("main-content");
headerDiv.parentNode.insertBefore(mainContentDiv, headerDiv.nextSibling);
while (mainContentElement) {
  if (mainContentElement.nodeName !== "SCRIPT") {
    mainContentElements.push(mainContentElement);
  }
  console.log(mainContentElement)
  mainContentElement = mainContentElement.nextSibling;
}
mainContentElements.forEach((element) => {
  mainContentDiv.appendChild(element);
});

// Remove google prefixes from all the links
Object.entries(links).forEach((link) => {
  link[1].href = link[1].href.replace("https://www.google.com/url?q=", "");
  link[1].href = link[1].href.replace(/&sa=D.+/, "");
  link[1].target = "_blank";
});

// Insert a div around each table and make it full width
Object.entries(tables).forEach((table) => {
  let div = document.createElement("div");
  div.classList.add("full-width");
  table[1].parentNode.insertBefore(div, table[1]);
  div.appendChild(table[1]);
});

// Insert a div around each table and make it full width
Object.entries(tables).forEach((table) => {
  let div = document.createElement("div");
  div.classList.add("full-width");
  table[1].parentNode.insertBefore(div, table[1]);
  div.appendChild(table[1]);
});

// Hide all content below H1 headings
Object.entries(h1Headings).forEach((heading) => {
  let nextSibling = document.getElementById(heading[1].id).nextElementSibling;
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
  padding: 0 0 256px 0;
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
}

.main-content {
  padding: 0 16px;
}

.header {
  color: #fff;
  padding: 32px;
  height: 400px;
  background-color: #253551;
  display: flex;
  margin-bottom: 64px;
  flex-direction: column;
  justify-content: end;
}

.header * {
  color: #fff !important;
}

.full-width {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow-x: scroll;
  box-sizing: border-box;
}

table {
  width: 90%;
}

h1 {
  background-color: #a8a29e;
}
h2 {
  background-color: #d6d3d1;
}
h3 {
  background-color: #e7e5e4;
}
h4 {
  background-color: #f5f5f4;
}
h1, h2, h3, h4 {
  cursor: pointer;
  border-radius: 8px;
  padding: 8px !important;
}
`;
document.head.appendChild(style);

let metaTag = document.createElement("meta");
metaTag.setAttribute("name", "viewport");
metaTag.setAttribute("content", "width=device-width, initial-scale=1.0");
document.head.appendChild(metaTag);
