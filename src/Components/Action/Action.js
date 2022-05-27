import React, { useState } from 'react';
import './Action.css';

export default function Action(props, { EditAction, id }) {

    const [isEdit, setIsEdit] = useState(false);

    const handleEdit = () => {
        setIsEdit(!isEdit);
    };

    const handleOnEditSubmit = (e) => {
        e.preventDefault();
        props.EditAction(id, e.target.title.value,
            e.target.media.value,
            e.target.tags.value,
            e.target.target_url.value);
        setIsEdit(!isEdit);
    };

    return (
        <>
            {isEdit ? (
                <form onSubmit={handleOnEditSubmit}>
                    <input type='text' maxLength='200' required={true} placeholder="Nom de l'action" name="title" defaultValue={props.title} />
                    <input type='text' maxLength='200' required={true} placeholder="Média" name="media" defaultValue={props.media} />
                    <input type='text' maxLength='200' placeholder="Mot clés" name="tags" defaultValue={props.tags} />
                    <input type='text' maxLength='200' required={true} placeholder="Url cible" name="target_url" defaultValue={props.target_url} />
                    <input type='number' min='0' step='1' required={true} placeholder="Nb d'envois" name="shipments" defaultValue={props.shipments} />
                    <button onSubmit={handleOnEditSubmit}>Save</button>
                </form>
            ) : (
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
                            props.actions.map(({ id, title, media, tags, target_url, shipments, clicks, new_accounts, enrollments, value }
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
                                        <button onClick={handleEdit}>Edit</button>
                                        {/* <button onClick={() => props.EditAction(id)} >edit</button> */}
                                        <button
                                            onClick={() => props.DeleteAction(id)}
                                        >delete
                                        </button>
                                    </td>
                                </tr>
                            )}
                    </tbody>
                </table>
            )}
        </>
    )
}
