const baseUrl = "https://squedio.com/marketing/apir/v1/actions";

// POST
export const CreateAction = async (body) => {
  return await fetch(`${baseUrl}`, {
    method: "POST",
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
    body: JSON.stringify(body),
  });
};

