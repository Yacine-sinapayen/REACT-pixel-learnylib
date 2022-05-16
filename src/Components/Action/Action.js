import React from 'react'
import './Action.css'

export default function Action(props) {
    return (
        <>
            <div className='action'>
                {props.children}
            </div>

            <table className="tableau-style">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Média</th>
                        <th>Mots clés</th>
                        <th>Url Cible</th>
                        <th>Nbs d'envois</th>
                        <th>Url de tracking</th>
                        <th>Clic</th>
                        <th>Compte créés</th>
                        <th>Inscriptions</th>
                        <th>Valeur générée</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{props.title} Sandra</td>
                        <td>{props.media} facebook</td>
                        <td>{props.tags} dentaire</td>
                        <td>{props.target_url}https//www.fake.com</td>
                        <td>{props.shipments} 300</td>
                        <td>{props.name}</td>
                        <td>{props.name}</td>
                        <td>{props.name}</td>
                        <td>{props.name}</td>
                        <td>{props.name}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
