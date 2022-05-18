import React, { useEffect, useState } from 'react';
import './Action.css';

export default function Action() {

    const [actions, setActions] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await fetch('https://squedio.com/marketing/api/v1/actions')
            .then((response) => response.json())
            .then((data) => setActions(data))
            .catch((err) => {
                console.log(err);
            })
    }

// Test de la requête
// console.log(actions)

    return (
        <>
            <h1>Actions</h1>
            <button>Ajouter une nouvelle action</button>
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
                        actions.map(({ id, title, media, tags, target_url, shipments, clicks, new_accounts, enrollments, value }) =>
                            <tr key={id}>
                                <td>{title}</td>
                                <td> {media}</td>
                                <td> {tags}</td>
                                <td><a href="{target_url}">{target_url}</a></td>
                                <td>{shipments}</td>
                                <td>{clicks}</td>
                                <td>https://formations.learnylib.com/st/{id}</td>
                                <td>{new_accounts}</td>
                                <td>{enrollments}</td>
                                <td>{value}</td>
                                <td>
                                    <button>edit</button>
                                    <button>delete</button>
                                </td>
                            </tr>

                        )}
                </tbody>
            </table>
        </>
    )
}
