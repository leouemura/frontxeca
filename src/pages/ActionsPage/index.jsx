import React from 'react';
import Actions from '../../components/ActionComponent'
import './styles.css';

function ActionsPage() {
  return (
    <div className="container-actions-page">
      <div className="container-list-card">
        <h1>Frontxeca MQTT</h1>
        <div className="block">
          <Actions onClick={(e)=>console.log(e)}/>
        </div>
        <div className="block">
          <Actions />
        </div>
      </div>
    </div>
  )
}

export default ActionsPage;