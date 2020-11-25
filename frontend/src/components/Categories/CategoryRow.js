import React from 'react'
import {Row, Col} from 'react-bootstrap'
import CategoryCard from './CategoryCard'
const CategoryRow= (props)=>{

    return(
        <div>      
            <Row lg="4" md="3" sm="2"xs="2" className='catrow justify-content-center' >
                <Col className='mt-4 pr-1'>
                    <CategoryCard category={props.col1cat} img={props.col1img} link={props.col1link}/>
                </Col>
                <Col className='mt-4 pr-1'>
                    <CategoryCard category={props.col2cat} img={props.col2img} link={props.col2link}/>
                </Col>
                <Col className='mt-4 pr-1'>
                    <CategoryCard category={props.col3cat} img={props.col3img} link={props.col3link}/>
                </Col>
                <Col className='mt-4 pr-1'>
                    <CategoryCard category={props.col4cat} img={props.col4img} link={props.col4link}/>
                </Col>
            </Row>
        </div>
    )
}

export default CategoryRow;
