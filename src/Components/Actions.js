import { useEffect, useState } from "react";
import './Action.css';
import ActionForm from "./ActionForm";

const Actions = (props) => {

    const [actions, setActions] = useState([]);
    const [form, setForm] = useState(false);

    useEffect(() => {
        // Récupéartion de toues les actions
        fetch('https://squedio.com/marketing/api/v1/actions')
            .then((res) => res.json())
            .then((data) => setActions(data))
            .catch((err) => {
                console.log(err);
            })
    }, []);

    // Met à jour la table
    const handleSubmit = (newAction) => {
        const add = Object.keys(form).length === 0;
        console.log(add)
        let copy = [...actions];

        if(!add){
            copy = copy.filter(a => a.id !== newAction.id)
        }
        copy.push(newAction);
        setActions(copy);

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
                                        <button
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