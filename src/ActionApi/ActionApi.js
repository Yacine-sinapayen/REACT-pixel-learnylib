const baseUrl = 'https://squedio.com/marketing/api/v1/actions';

// Delete
export const DeleteAction = (id) => {
    return fetch(`https://squedio.com/marketing/api/v1/actions/${id}`, {
        method: 'DELETE'
    })
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err);
        })
  }
  
  // PUT 
  export const EditAction = (body) => {
    console.log(body)
    return fetch(`https://squedio.com/marketing/api/v1/actions/${body.id}`, {
        method: 'PUT',
        body: JSON.stringify(body)
    })
        .then((res) => {
            if (res.status >= 400) {
                console.log("La requête HTTP a échoué.")
            } else {
                // Dans le body de la reponse http il n'y a pas de réponse dans le cadre d'un PUT
                return true
            }
        })
        .catch((error) => console.log(error));
  }
  
  // POST
  export const CreateAction = async (body) => {
    return await fetch(`https://squedio.comdede/marketing/api/v1/actions`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
  };
  
  