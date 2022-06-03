import { useEffect, useState } from "react";
import './Action.css';
import ActionForm from "./ActionForm";

const Actions = (props) => {

    const [actions, setActions] = useState([]);
    const [form, setForm] = useState(false);

    //GET :  Récupéartion de toutes les actions
    useEffect(() => {
        fetch('https://squedio.com/marketing/api/v1/actions')
            .then((res) => res.json())
            .then((data) => setActions(data))
            .catch((err) => {
                console.log(err);
            })
    }, []);

    // POST : Ajout action 
    // const CreateAction = async (newAction) => {
    //     await fetch(`https://squedio.com/marketing/api/v1/actions`, {
    //         method: 'POST'
    //     })
    //         .then((res) => {
    //             if (res.status !== 201) {
    //                 return
    //             } else {
    //                 return res.json();
    //             }
    //         })
    //         .then((data) => {
    //             let copy = [...actions]
    //             copy.push(newAction)
    //             setActions(newAction);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // };

    // PUT : Mofifier action
    //   const EditAction = async (id,title, media, tags, target_url, shipments) => {
    //     await fetch(`https://squedio.com/marketing/api/v1/actions/${id}`, {
    //       method: 'PUT',
    //       body: JSON.stringify({
    //         id:uuidv4(),
    //         title: title,
    //         media: media,
    //         tags: tags,
    //         target_url: target_url,
    //         shipments: shipments
    //       }),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF+8",
    //       }
    //     })
    //       .then((res) => {
    //         if (res.status !== 200) {
    //           return;
    //         } else {
    //           return res.json();
    //         }
    //       })
    //       .then((data) => {

    //         const updateActions = actions.map((action) => {
    //           if (action.id === id) {
    //             action.title = title;
    //             action.media = media;
    //             action.tags = tags;
    //             action.target_url = target_url;
    //             action.shipments = shipments;
    //           }
    //           return action;
    //         });
    //         setActions((actions) => [...actions, data]);
    //         setActions((actions) => updateActions);
    //       })
    //       .catch((error) => console(error));
    //   }

    // Supression 
    const DeleteAction = async (id) => {

        let copy = [...actions]
        copy = copy.filter(action => action.id !== id)
        setActions(copy);

        await fetch(`https://squedio.com/marketing/api/v1/actions/${id}`, {
            method: 'DELETE'
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            })
    }


    // Met à jour la table
    const handleSubmit = (newAction) => {
        const add = Object.keys(form).length === 0;
        console.log(add)
        console.log(form)
        let copy = [...actions];

        // Update Action car ici l'objet que je reçois est plein 
        if (!add) {
            // copy génère un nouveau tableau d'action
            copy = copy.filter(a => a.id !== newAction.id)
            copy.push(newAction);
            setActions(copy);

        } else {
            // je créais une action
            let copy = [...actions]
            copy.push(newAction)
            setActions(newAction);
        }

        return setForm(false);
    }




    return (
        <>
            <button onClick={() => setForm({})}>Ajouter</button>

            {form ?
                <ActionForm action={form} onClose={() => setForm(false)} onSubmit={a => handleSubmit(a)} />
                :
                <table className="tableau-style">
                    <thead>
                        <tr>
                            <th>Nom de l'action ok</th>
                            <th>Média ok</th>
                            <th>Mots clés ok</th>
                            <th>Url Cible</th>
                            <th>Nbs d'envois ok</th>
                            <th>Clic</th>
                            <th>Url de tracking</th>
                            <th>Compte créés</th>
                            <th>Inscriptions</th>
                            <th>Valeur générée</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            actions.map(a =>
                                <tr key={a.id}>
                                    <td>{a.title}</td>
                                    <td> {a.media}</td>
                                    <td> {a.tags}</td>
                                    <td><a href="{target_url}">{a.target_url}</a></td>
                                    <td>{a.shipments}</td>
                                    <td>{a.clicks}</td>
                                    <td>https://formations.learnylib.com/st/{a.id}</td>
                                    <td>{a.new_accounts}</td>
                                    <td>{a.enrollments}</td>
                                    <td>{a.value}</td>
                                    <td>
                                        <button onClick={() => DeleteAction(a.id)}
                                        >delete
                                        </button>
                                        <button
                                            onClick={() => setForm(a)}
                                        >edit
                                        </button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            }
        </>
    )
}

export default Actions; 