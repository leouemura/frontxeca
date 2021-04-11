import React from 'react';
import Actions from '../../components/ActionComponent'
import './styles.css';

function ActionsPage() {
  return (
    <div className="container-actions-page">
      <div className="block">
        <Actions />
      </div>
      <div className="block">
        <Actions />
      </div>
    </div>
  )
}

export default ActionsPage;