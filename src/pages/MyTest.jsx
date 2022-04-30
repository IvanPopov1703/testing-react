import React from 'react';
import '../styles/MyTest.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as PropTypes from "prop-types";

function Row(props) {
    return null;
}

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};
const MyTest = (props) => {

    let products = [{
        id: 2,
        name: "Item name 1",
        price: 100
    },{
        id: 1,
        name: "Item name 2",
        price: 100
    },{
        id: 3,
        name: "Item name 3",
        price: 200
    }];

    function priceFormatter(cell, row){
        return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
    }


    return (
        <div className="my-test-page">
            <button className="btn btn-primary new-test">Создать новый тест</button>
            <div className="content">
                <BootstrapTable
                    data={products}
                    striped={true}
                    hover={true}
                >
                    <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Название теста</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" dataSort={true}>Дата создания</TableHeaderColumn>
                    <TableHeaderColumn dataField="price" dataFormat={priceFormatter}>Product Price</TableHeaderColumn>
                </BootstrapTable>
            </div>
        </div>
    );
};

export default MyTest;
