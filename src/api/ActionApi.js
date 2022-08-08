// const baseUrl = "https://squedio.com/marketing/api/v1/actions";
const baseUrl = "http://localhost:3006/actions";

// POST
export const CreateAction = async (body) => {
  return await fetch(`${baseUrl}`, {
    method: "POST",
    // Le header n'est necessaire que pour la version en développement sur le server test "http://localhost:3006/actions". Sur le server en prod il faut commenter cette partie.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });
};

// Delete
export const DeleteAction = async (id) => {
  return await fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};


// PUT
export const EditAction = async (body) => {
  return await fetch(`${baseUrl}/${body.id}`, {
    method: "PUT",
    // Le header n'est necessaire que pour la version en développement sur le server test "http://localhost:3006/actions". Sur le server en prod il faut commenter cette partie.
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  });
};

