    import React from 'react'
    import Table from 'react-bootstrap/Table'
    import moment from 'moment'
	import Styles from '../appStyles.module.css'


    const Datatable = ({ projectsData }) => 
    {

        const columns = projectsData[0] && Object.keys(projectsData[0])
        const checkforDate = (val) =>
        {

            return moment(val, moment.ISO_8601, true).isValid() ? (
                <div >{moment(val).format('DD.MM.YYYY')}</div>
            ) : (
                <div className={`${Styles.textWrap}`}>{val}</div>
            )            
        }

    return (
            <tbody>
                { projectsData.map((row,i) => 
                    <tr key={i}>
                    {
                    columns.map((column,j) => 
                        <td key = {j}> {
                        row[column] != 'NULL' 
                        ? checkforDate(row[column]) 
                        : ''}
                        </td>
                        )
                    }
                    </tr>
                )
                }
            </tbody>
        )

    }

    export default Datatable