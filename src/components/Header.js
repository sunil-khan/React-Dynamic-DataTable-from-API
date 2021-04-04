import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import Styles from '../appStyles.module.css'


const Header = ({projects, onSorting}) => 
{
    const [sortingField, setSortingField] = useState('')
    const [sortingOrder, setSortingOrder] = useState('asc')
    const [sortingIcon, setSortingIcon] = useState(false)
    const onSortingChange = (field) => {
        const order =
            field === sortingField && sortingOrder === "asc" ? "desc" : "asc";

        setSortingField(field);
        setSortingOrder(order);
        onSorting(field, order);
        setSortingIcon(true)
        
    }
    //Function to Sort one or more fields
//     const sortField = (fieldName) =>
//     {
//         return fieldName == 'start date' ?
//         (
//             <div  onClick= {() => onSortingChange(fieldName)}>
//                         {fieldName}
                        
//                         {sortingField && sortingField === fieldName && 
//                         (
//                             <span className={Styles.paddingLeft}>
                                
//                                 <FontAwesomeIcon  icon=
//                             {
//                                     sortingOrder === "asc"
//                                         ? faAngleUp
//                                         : faAngleDown
//                             }
//                             /> 
//                             </span>
//                         )} 
//             </div>) :
//         (
//             <div>{fieldName}</div>
//         )

//     }

    const columns =  projects[0] ? Object.keys(projects[0]) : null
    return (
    <thead className="thead-dark">
        <tr>{ projects[0] ? columns.map((heading,index) => 
            <th key = {index} style={{textTransform: 'capitalize'}}>
                {heading} </th>) : null}
            </tr>
    </thead> 
    )
}

export default Header
