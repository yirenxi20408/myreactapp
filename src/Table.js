import React from 'react'
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>班级</th>
            </tr>
        </thead>
    )
}
const TableBody = (props) => {
    const rows = props.studentData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.gender}</td>
                <td>{row.className}</td>
            </tr>)
    })
    return <tbody>{rows}</tbody>
}
const Table = (props) => {
    const { studentData } = props

    return (
        <table>
            <TableHeader />
            <TableBody studentData={studentData} />
        </table>
    )
}
export default Table