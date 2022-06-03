
// Delete
export const DeleteAction = (id) => {

    // Gestion du delete
    // let copy = [...actions]
    // copy = copy.filter(action => action.id !== id)
    // setActions(copy);

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
   
    return fetch(`https://squedio.com/marketing/api/v1/actions/${body.id}`, {
        method: 'PUT',
        body: JSON.stringify({
           body
        }),
        headers: {
            "Content-type": "application/json; charset=UTF+8",
        }
    })
        .then((res) => {
            if (res.status >= 400) {
                throw new Error("La requête HTTP a échoué.")
            } else {
                return res.json();
            }
        })
        .catch((error) => console.log(error));
        // .then((data) => {
        //     const updateActions = actions.map((action) => {
        //         if (action.id === id) {
        //             action.title = title;
        //             action.media = media;
        //             action.tags = tags;
        //             action.target_url = target_url;
        //             action.shipments = shipments;
        //         }
        //         return action;
        //     });
        //     setActions((actions) => [...actions, data]);
        //     setActions((actions) => updateActions);
        // })
}

// POST
export const CreateAction = (body) => {
    return fetch(`https://squedio.com/marketing/api/v1/actions`, {
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then((res) => {
            if (res.status >= 400) {
                throw new Error("La requête de création a échoué.")
            } else {
                return res.json();
            }
        })
        .catch((err) => {
            console.log(err);
        })
        // .then((data) => {
        //     let copy = [...actions, data]
        //     copy.push(newAction)
        //     setActions(newAction);
        // })
};

