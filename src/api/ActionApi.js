const baseUrl = "https://squedio.com/marketing/api/v1/actions";

// POST
export const CreateAction = async (body) => {
  return await fetch(`https://squedio.com/marketing/api/v1/actions`, {
    method: "POST",
    body: JSON.stringify(body),
  });
};

// PUT
export const EditAction = async (body) => {
  return await fetch(`https://squedio.com/marketing/api/v1/actions/${body.id}`, {
    method: "PUT",
    body: JSON.stringify(body),
  });
};

// Delete
export const DeleteAction = async (id) => {
  return await fetch(`https://squedio.com/marketing/api/v1/actions/${id}`, {
    method: "DELETE",
  });
};
