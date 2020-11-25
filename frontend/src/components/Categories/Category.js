import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

const Category = (props) => {
    const [business, setbusiness] = useState([])
    const [currentCategory, setCurrentCategory] = useState()

    useEffect(()=>{
        let category = props.match.params.id
        
        setCurrentCategory(category)

        const config = 
            headers:{
                "Constant-Type": "application/json"
            }
        }

    })

    export default Category;