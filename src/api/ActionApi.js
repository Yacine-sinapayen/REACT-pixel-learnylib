// url serveur test : 
const baseUrl = "http://localhost:3006";
// const baseUrl = "https://squedio.com/marketing/api/v1";

// Gestion de l'authentification
export const Authenticate = async (body) => {
  console.log(JSON.stringify(body))
  const response = await fetch(`${baseUrl}/authenticate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return response.status === 200 ? response.json() : false;
};

// GET
export const GetActions = async () => {
  const response = await fetch(`${baseUrl}/actions`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      // Bearer = type de token utilisé. 
       "Authorization" : "Bearer " + window.localStorage.getItem("marketing_token")
    },
  });
  // Si j'ai une erreur je renvoie dans tout les cas un tableau vide
  return response.status === 200 ? response.json() : [];
}

// POST
export const CreateAction = async (body) => {
  return await fetch(`${baseUrl}/actions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
       "Authorization" : "Bearer " + window.localStorage.getItem("marketing_token")
    },
    body: JSON.stringify(body),
  });
};

// Delete
export const DeleteAction = async (id) => {
  return await fetch(`${baseUrl}/actions/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
       "Authorization" : "Bearer " + window.localStorage.getItem("marketing_token")
    },
  });
};

// PUT
export const EditAction = async (body) => {
  return await fetch(`${baseUrl}/actions/${body.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
       "Authorization" : "Bearer " + window.localStorage.getItem("marketing_token")
    },
    body: JSON.stringify(body),
  });
};
