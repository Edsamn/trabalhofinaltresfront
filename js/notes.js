const tableBody = document.getElementById("tableBody");
const addItem = document.getElementById("addItem")
const error = document.getElementById("errorMsg");

async function getComments() {
  const response = await fetch('http://localhost:8080/comments');
  const comments = await response.json()
  showComments(comments.comments)
}
getComments()

async function addComments() {
  const newItem = {
    description, detail
  }
  await fetch('http://localhost:8080/comments', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem)
  })

  if (detail.value === "" || description.value === "") {
    return error.innerHTML = 'Os campos não podem ficar em branco.'
  }

  error.innerHTML = '';

  detail.value= '';
  description.value= '';

  getComments();
}

async function deleteComments(id) {
  await fetch(`http://localhost:8080/errands/${id}`, { 
    method: "DELETE"
  })

  getComments();
}

async function updateComments(id) {
  const newItem = {
    description, detail
  }
  await fetch(`http://localhost:8080/errands/${id}`, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem)
    },
    getComments()
  )

  if (detail.value === "" || description.value === "") {
    return error.innerHTML = 'Os campos não podem ficar em branco.'
  }

  error.innerHTML = '';

  const comment = comments[position];

  comment.detail = detail.value;
  comment.description = description.value;

  showComments();

  detail.value= '';
  description.value= '';
}

function showComments(comments) {
  tableBody.innerHTML = "";
  comments.map((item) => {
    const position = comments.indexOf(item);
    tableBody.innerHTML += `
        <tr>
            <th>${position + 1}</th>
            <td>${item.description}</td>
            <td>${item.detail}</td>
            <td>
                <div class="container-buttons-table">
                    <div class="table-button-edit" onclick="updateComments(${item.id})">Editar</div>
                    <div class="table-button-delete" onclick="deleteComments(${item.id})">Apagar</div>
                </div>
            </td>
        </tr>
      `;
  });
}
showComments();

