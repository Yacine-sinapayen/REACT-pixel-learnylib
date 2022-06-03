import moment from 'moment';
import React from 'react';
import { v4 as uuid } from 'uuid';

// action={form} qui contient le contenue de mon formulaire...
// onSubmit (ligne 34) fait appel à la fonction handleSubmit qui gère à la fois l'ajout et la modification des actions
const ActionForm = ({ action, onClose, onSubmit }) => {

    // Ici j'instencie mon objet add qui me permet de dire :
    // add = true donc vide => je créais une nouvelle action
    // add = false donc plein ... => je modifie une action 
    
    const add = Object.keys(action).length === 0;

    // Que ce soit un ajout ou une modification la fonction handleSubmit me renvoie une newAction
    const handleSubmit = (e) => {
        e.preventDefault();
       
        // newAction = l'objet add : si true je suis dans l'ajout d'une action : modification
        let newAction = add ? {} : { ...action };
    // Ajout
        if (add) {
            newAction.id = uuid()
            newAction.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        }
        // Modification
        ["title", "media", "tags", "target_url", "shipments"]
            .map(k => {
                newAction[k] = e.target[k].value
                return true
            })
        return onSubmit(newAction);
    };

    // Le formulaire ci-dessous gère à la fois l'ajout et la modification. 
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Créer une nouvelle action marketing</h2>
                <button onClick={() => onClose()}>fermer</button>
                <br />
                <input type='text' maxLength='200' required={true} placeholder="Nom de l'action" name="title" defaultValue={action.title} />
                <input type='text' maxLength='200' required={true} placeholder="Média" name="media" defaultValue={action.media} />
                <input type='text' maxLength='200' placeholder="Mot clés" name="tags" defaultValue={action.tags} />
                <input type='text' maxLength='200' required={true} placeholder="Url cible" name="target_url" defaultValue={action.target_url} />
                <input type='number' min='0' step='1' required={true} placeholder="Nb d'envois" name="shipments" defaultValue={action.shipments} />
                {/* step permet d'incrémenter de 1 en 1, pas de nb à vrigule */}
                <button onSubmit={handleSubmit}>{add ? "Ajouter" : "Modifier"}</button>
            </form>
        </div>
    )
}

export default ActionForm
