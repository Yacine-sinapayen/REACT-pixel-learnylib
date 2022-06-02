import moment from 'moment';
import React from 'react';
import { v4 as uuid } from 'uuid';


const ActionForm = ({ action, onClose, onSubmit }) => {

    const add = Object.keys(action).length === 0;

    //actualise les données
    const handleSubmit = (e) => {
        e.preventDefault();
        // Si c'est un ajout, alors l'action est vierge, sinon on repart de l'action passée dans le formulaire
        let newAction = add ? {} : {...action};
        // Si c'est un ajout, il faut créer un id et une date de création pour l'objet action
        if(add){
            newAction.id = uuid()
            newAction.created_at = moment().format('YYYY-MM-DD HH:mm:ss')
        }
        // Lors de la validation on maj les props de l'action, à partir du formulaire
        ["title", "media", "tags", "target_url", "shipments"]
            .map(k => {
                newAction[k] = e.target[k].value
                return true
            })
        return onSubmit(newAction);
    };


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
