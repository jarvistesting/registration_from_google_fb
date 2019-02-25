import React from 'react';
const TableData = (props) => {
    return (
        <tr><td>{props.data.name}</td><td>{props.data.email}</td></tr>
    );
}

export default TableData;