import React, { Fragment, useState } from 'react';
import './DataTable.css';
import Swal from 'sweetalert2';
import moment from 'moment';

// bootstrap
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

// Redux
import { useDispatch, useSelector } from 'react-redux';



const DataTable = ({ columns, data, datosF, setDataF, title }) => {

  const { idRol } = useSelector(state => state.login)


  const dispatch = useDispatch();


  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];


  const emptyDataMessage = () => { return 'No se han encontrado resultados'; }

  return (
    <Fragment>
      <BootstrapTable
        bootstrap4
        data={data}
        // rowStyle={{ backgroundColor: 'red' }}
        headerClasses="header-class-table"
        hover={true}
        defaultSorted={defaultSorted}
        keyField="_id"
        columns={columns}
        noDataIndication={emptyDataMessage}
        filter={filterFactory()}
        pagination={paginationFactory({

          sizePerPageList: [{
            text: '20', value: 20
          }, {
            text: '50', value: 50
          }, {
            text: '100', value: 100
          }, {
            text: 'Todos', value: data.length
          }],
          prePageText: 'Anterior',
          nextPageText: 'Siguiente',

        })}
      />
    </Fragment>
  );
}

export default DataTable;
