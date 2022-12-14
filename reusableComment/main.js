class MyComment extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    // holds the comment component
    const container = document.createElement("div");
    container.setAttribute("class", "container");

    // place for user input
    const inputForm = document.createElement("form");
    inputForm.setAttribute("class", "inputForm");

    // add submit event listener
    inputForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(e.target).entries());

      postedLabel.innerText = `Comment from ${inputForm.elements[0].value} (${inputForm.elements[1].value})`;
      postedComment.innerText = `${inputForm.elements[2].value}`;
      inputForm.reset();
    });

    // create name input and label
    const userName = document.createElement("input");
    userName.setAttribute("class", "username");
    userName.setAttribute("id", "username");
    userName.setAttribute("type", "text");
    userName.required = true;

    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "username");
    nameLabel.innerText = "Enter Username (Required):  ";

    const nameDiv = document.createElement("div");
    nameDiv.setAttribute("id", "nameDiv");
    nameLabel.appendChild(userName);
    nameDiv.appendChild(nameLabel);

    // create email input
    const email = document.createElement("input");
    email.setAttribute("class", "email");
    email.setAttribute("id", "email");
    email.setAttribute("type", "email");
    email.required = true;

    const emailLabel = document.createElement("label");
    emailLabel.setAttribute("for", "email");
    emailLabel.innerText = "Enter Email (Required):  ";

    const emailDiv = document.createElement("div");
    emailDiv.setAttribute("id", "emailDiv");
    emailLabel.appendChild(email);
    emailDiv.appendChild(emailLabel);

    // create comment input
    const commentText = document.createElement("textarea");
    commentText.setAttribute("id", "commenttext");
    commentText.setAttribute("class", "commenttext");
    commentText.setAttribute("rows", "20");
    commentText.setAttribute("cols", "50");
    commentText.required = true;

    const commentLabel = document.createElement("label");
    commentLabel.setAttribute("for", "commenttext");
    commentLabel.innerText = "Type Your Comment: \n";

    const commentDiv = document.createElement("div");
    commentDiv.setAttribute("id", "commentDiv");
    commentLabel.appendChild(commentText);
    commentDiv.appendChild(commentLabel);

    // create post button
    const postButton = document.createElement("button");
    postButton.setAttribute("type", "submit");
    postButton.innerText = "Post Comment";

    // add label and input elements to the form
    inputForm.appendChild(nameDiv);
    inputForm.appendChild(emailDiv);
    inputForm.appendChild(commentDiv);
    inputForm.appendChild(postButton);

    // create comment paragraph and label for comment
    const postedComment = document.createElement("p");
    postedComment.setAttribute("id", "postedComment");

    const postedLabel = document.createElement("h2");
    postedLabel.setAttribute("id", "postedLabel");

    const postedDiv = document.createElement("div");
    postedDiv.setAttribute("id", "postedDiv");

    postedDiv.appendChild(postedLabel);
    postedDiv.appendChild(postedComment);

    // add form to container
    container.appendChild(inputForm);
    container.appendChild(postedDiv);

    // add container to body
    shadow.appendChild(container);
  }
}

// Define the new element
customElements.define("my-comment", MyComment);
