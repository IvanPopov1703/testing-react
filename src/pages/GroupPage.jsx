import React from 'react';
import '../styles/GroupPageStyle.css';
import { MDBDataTable } from 'mdbreact';

const GroupPage = () => {

    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Position',
                field: 'position',
                sort: 'asc',
                width: 270
            },
            {
                label: 'Office',
                field: 'office',
                sort: 'asc',
                width: 200
            }
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                position: 'System Architect',
                office: 'Edinburgh',
                age: '61',
                date: '2011/04/25',
                salary: '$320'
            }
        ]
    };

    return (
        <MDBDataTable
            striped
            bordered
            small
            data={data}
        />
        /*<div>
            {/!*<div className="header-page">
                Студенты
                <button className="btn btn-primary">Добавить</button>
                <button className="btn btn-danger">Удалить</button>
            </div>*!/}
            <table className="table table-striped table-hover table-bordered">
                <thead>
                <tr>
                    <th style={{width: 70}} scope="col">№</th>
                    <th scope="col">Фамилия</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Отчество</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </table>
        </div>*/
    );
};

export default GroupPage;
