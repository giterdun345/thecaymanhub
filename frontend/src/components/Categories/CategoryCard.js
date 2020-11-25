import React from 'react'
import {Link} from 'react-router-dom'
import Card  from 'react-bootstrap/Card'

const CategoryCard = (props)=>{
    return(
        <Link exact to={props.link} className='cardCategory'>
            <Card className='catcardSize' >
                <Card.Img variant="top" src={props.img} className='card-img-top' alt='Category Image'/>
                <Card.Body>
                    <Card.Text className='text-center'>
                        <h4 className='catTitle'>{props.category}</h4>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default CategoryCard;