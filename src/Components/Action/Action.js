import React from 'react';
import './Action.css';

const Action = ({ id, name, email, onDelete }) => {

    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <>
            <div className="list-content">

                <div className='list-actions'>
                    <span>{name}</span>
                    <span>{email}</span>

                    <span>
                        <button>edit</button>
                        <button onClick={handleDelete}>delete</button>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Action;
