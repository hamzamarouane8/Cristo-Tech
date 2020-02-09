import React, {useState} from 'react';
import {TableStyle} from '../../../assets/styles/table'
import TableView from '../../../components/TableView'

//-------------------------------------------------------

const dateFormat =(date)=>{
  let dateFinal = date.slice(0,10);
  return dateFinal
}

export default ({data, handleAllOperations}) => {

  const [_allOperations, _setAllOperations] = useState(false);

  const columns = [
    {"header": "Date d'operation", "name": "operationDate", render: (value, record) => dateFormat(value)},
    {"header": "Date de valeur", "name": "valueDate",render: (value, record) => dateFormat(value)},
    {"header": "Motif", "name": "label"},
    {
      "header": "Montant",
      "name": "amount",
      condition: (value, record) => record.amount < 0 ? 'negative' : 'positive'
      ,
      render: (value, record) => `${record.record.amount < 0 ? '' : '+'} ${record.record.amount} ${record.record.currency}`
    },
    {
      "header": "Etat", "name": "status", render: (value) => value === 'in progress' ? `en cours` : `effectueé`,
      condition: (value) => value === 'in progress' ? "status-progress" : "status-done"
    }
  ];

  return (
    <TableStyle>
      <div className="sg-table">
        <div className="widget-title">
          Derniéres opérations
        </div>
        <div className="table-container">
          <TableView
            todosPerPage={10}
            columns={columns}
            dataList={(data || [])}
          />
        </div>
      </div>
    </TableStyle>
  )
}
