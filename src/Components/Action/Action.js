import React from 'react';
import './Action.css';

export default function Action(props) {

    return (
        <>
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
                        props.actions.map(({id, title, media, tags, target_url, shipments, clicks, new_accounts, enrollments, value}
                        ) =>
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
                                    <button onClick={onDelete}>delete</button>
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </>
    )
}
