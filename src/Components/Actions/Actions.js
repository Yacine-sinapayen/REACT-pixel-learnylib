import { useEffect, useState } from "react";
import { CreateAction, EditAction, DeleteAction } from "../../Api/ActionApi";
import "./Action.scss";
import ActionForm from "../ActionForm/ActionForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import trash from "../../Assets/trash.png";
import pen from "../../Assets/pen.png";

const Actions = () => {
  const [actions, setActions] = useState([]);
  // Cette var correspond aux données que l'on envoies au formulaire
  // Si form = false on masque le formulaire
  // Si form = {} (objet vide) on va créer une nouvelle action
  // Si form = {objet plein} on va modifier une action
  const [form, setForm] = useState(false);

  // Gestion des erreurs de l'API
  const createError = () =>
    toast.error("Erreur lors de la création de l'action");
  const editError = () =>
    toast.error("Erreur lors de la modification de l'action");
  const deleteError = () =>
    toast.error("Erreur lors de la suppression de l'action");

  // GET
  useEffect(() => {
    // Récupération de toutes les actions
    fetch("https://squedio.com/marketing/api/v1/actions")
      .then((res) => res.json())
      .then((data) => setActions(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //PUT and POST
  const handleSubmit = (newAction) => {
    // On verifie si on est en mode ajout ou modification
    const add = Object.keys(form).length === 0;
    //  On récupère la verion du tableau la plus recente
    // après mon PUT/POST j'insère la newAction dans la version du tableau
    // la plus rescente.
    const oldActions = [...actions];
    // Je créais une copy car je ne moddifie jamais directement state
    let copy = [...actions];

    // Si on est dans le cas d'une modification
    // on retire l'ancienne version de l'action du tableau.
    if (!add) {
      copy = copy.filter((a) => a.id !== newAction.id);
      EditAction(newAction).catch((err) => {
        // Gestion de l'erreur en édition
        editError();
      });
    } else {
      CreateAction(newAction).catch((err) => {
        // Une fois l'action créee je renvoie un tableau
        // des anciennes action + la nouvelle action.
        setActions(oldActions);
        // Gestion de l'erreur en création
        createError();
      });
    }
    copy.push(newAction);
    setActions(copy);

    // Pour masquer le formulaire on passe les données du formulaire à false
    return setForm(false);
  };

  return (
    <div className="container">
      <ToastContainer />
      {form ? (
        /* Si l'objet que l'on passe dans action={form} est 
        vide alors ça sera un formulaire d'ajout sinon ça sera un formulaire de modfification */
        <ActionForm
          action={form}
          onClose={() => setForm(false)}
          onSubmit={(a) => handleSubmit(a)}
        />
      ) : (
        <div>
          <h1>Listes des actions marketing</h1>
          {/* L'objet de setForm correspond aux données que l'on envoies au formulaire */}
          <button onClick={() => setForm({})}>
            Ajouter une nouvelle action
          </button>

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
            <tbody>
              {actions.map((a) => (
                <tr key={a.id}>
                  <td>{a.title}</td>
                  <td> {a.media}</td>
                  <td> {a.tags}</td>
                  <td>
                    <a href="{target_url}">{a.target_url}</a>
                  </td>
                  <td>{a.shipments}</td>
                  <td>{a.clicks}</td>
                  <td>https://formations.learnylib.com/st/{a.id}</td>
                  <td>{a.new_accounts}</td>
                  <td>{a.enrollments}</td>
                  <td>{a.value}</td>
                  <td>
                    <button
                      className="btn-small"
                      onClick={() =>
                        DeleteAction(a.id).catch((err) => {
                          // let copy = [...actions];
                          // copy = copy.filter((a) => copy.id !== a.id);
                          // setActions(copy);
                          deleteError();
                        })
                      }
                    >
                      <img src={trash} alt="supression" />
                    </button>
                    {/* Les données qu'il y a dans setForm(a) correspondent à l'action. */}
                    <button className="btn-small" onClick={() => setForm(a)}>
                    <img src={pen} alt="ajout" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Actions;
