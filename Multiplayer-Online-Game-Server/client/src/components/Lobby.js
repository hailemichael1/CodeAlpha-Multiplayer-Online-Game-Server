import React from 'react';

const Lobby = ({ availablePlayers, onInvite }) => (
    <div className="lobby">
        {availablePlayers.length === 0 ? <p>No available players</p> : 
            availablePlayers.map(id => (
                <button key={id} onClick={() => onInvite(id)}>Invite {id}</button>
            ))
        }
    </div>
);

export default Lobby;