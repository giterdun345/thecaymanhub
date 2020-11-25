import React from 'react'
import {Link} from 'react-router-dom'
import { Container} from 'react-bootstrap'
import CategoryRow from './CategoryRow'
// IMages
import restImage from '../images/restImage.jpg'
import barImage from '../images/barImage.jpg'
import coffeeImage from '../images/coffeeImage.jpg'
import foodtruckImage from '../images/truckImage.jpg'
// entertainment
import diveImage from '../images/diveImage.jpg'
import nightlifeImage from '../images/nightlifeImage.jpg'
import waterImage from '../images/waterImage.jpg'
import kidImage from '../images/kidImage.jpg'
import musicImage from '../images/musicImage.png'
import excursionImage from '../images/excursionImage.jpg'
import caymanImage from '../images/caymanImage.jpg'
import artImage from '../images/artImage.jpg'
// shopping
import clothesImage from '../images/clothesImage.jpg'
import jewelryImage from '../images/jewelryImage.jpg'
import homegoodsImage from '../images/homegoodsImage.jpg'
import otherImage from '../images/otherImage.jpg'
// Education 
import daycareImage from '../images/daycareImage.jpg'
import schoolImage from '../images/schoolsImage.jpg'
import collegeImage from '../images/collegeImage.jpg'
import othereduImage from '../images/othereduImage.jpg'
// Professional Business
import homeserviceImage from '../images/homeserviceImage.jpg'
import constructionImage from '../images/constructionImage.jpg'
import mechanicsImage from '../images/mechanicsImage.jpg'
import moreserviceImage from '../images/moreserviceImage.jpg'
// More Businesses
import healthImage from '../images/healthImage.jpg'
import realestateImage from '../images/realestateImage.jpg'
import beautyImage from '../images/beautyImage.jpg'
import transportationImage from '../images/transportationImage.jpg'
import religionImage from '../images/religionImage.jpg'
import technologyImage from '../images/technologyImage.jpeg'
import animalsImage from '../images/animalsImage.jpg'
import otherbizImage from '../images/otherbizImage.jpg'

const AllCategories = ()=>{

    return(
        <div>
            <h1 className='text-center mb-3 mt-5'>Food &amp; Drink</h1>
            <Container>
                    <CategoryRow 
                        col1cat={"Restaurants"}
                        col1img={restImage}
                        col1link="restaurants"
                        col2cat={"Bars"}
                        col2img={barImage}
                        col2link='bars'
                        col3cat={"Coffee & Tea"}
                        col3img={coffeeImage}
                        col3link='coffee'
                        col4cat={"Food Trucks"}
                        col4img={foodtruckImage}
                        col4link="food20%trucks20%FOODmore"
                        />
            </Container>
                <h1 className='mt-5 mb-3 text-center'>Entertainment</h1>
                <Container>
                    <CategoryRow 
                        col1cat={"Dive/Snorkel"}
                        col1img={diveImage}
                        col1link="dive20%and20%snorkel"
                        col2cat={"Night Life"}
                        col2img={nightlifeImage}
                        col2link='night20%life'
                        col3cat={"Water Sports"}
                        col3img={waterImage}
                        col3link='water20%sports'
                        col4cat={"Kid Camps"}
                        col4img={kidImage}
                        col4link="kid20%camps"
                        />
                </Container>
                <Container>
                    <CategoryRow 
                        col1cat={"Music"}
                        col1img={musicImage}
                        col1link="music"
                        col2cat={"Excursions"}
                        col2img={excursionImage}
                        col2link='excursions'
                        col3cat={"Places to See"}
                        col3img={caymanImage}
                        col3link='places20%to20%see'
                        col4cat={"Art/Photos"}
                        col4img={artImage}
                        col4link="art20%and20%photography"
                        />
                </Container>
                <Container>
                <h1 className='mt-5 mb-3 text-center'>Shopping</h1>
                    <CategoryRow 
                        col1cat={"Clothing"}
                        col1img={clothesImage}
                        col1link="clothing"
                        col2cat={"Jewelery"}
                        col2img={jewelryImage}
                        col2link='jewelry'
                        col3cat={"Home Goods"}
                        col3img={homegoodsImage}
                        col3link='home20%goods'
                        col4cat={"more..."}
                        col4img={otherImage}
                        col4link="other20%shopping"
                        />
            </Container>
            <h1 className='mt-5 mb-3 text-center'>Education</h1>
            <Container>
                    <CategoryRow 
                        col1cat={"Day Cares"}
                        col1img={daycareImage}
                        col1link="day20%care"
                        col2cat={"Schools"}
                        col2img={schoolImage}
                        col2link='schools'
                        col3cat={"College/ Uni"}
                        col3img={collegeImage}
                        col3link='college'
                        col4cat={"more..."}
                        col4img={othereduImage}
                        col4link="other20%education"
                        />
            </Container>
            <h1 className='mt-5 mb-3 text-center'>Professional Services</h1>
            <Container>
                    <CategoryRow 
                        col1cat={"Home Services"}
                        col1img={homeserviceImage}
                        col1link="home20%serviceS"
                        col2cat={"Construction"}
                        col2img={constructionImage}
                        col2link='construction'
                        col3cat={"Mechanics"}
                        col3img={mechanicsImage}
                        col3link='mechanics'
                        col4cat={"more..."}
                        col4img={moreserviceImage}
                        col4link="other20%services"
                        />
            </Container>
             <h1 className='mt-5 mb-3 text-center'>More Categories</h1>
            <Container>
                    <CategoryRow 
                        col1cat={"Health/ Medicine"}
                        col1img={healthImage}
                        col1link="health20%and20%medicine"
                        col2cat={"Real Estate"}
                        col2img={realestateImage}
                        col2link='real20%estate'
                        col3cat={"Beauty"}
                        col3img={beautyImage}
                        col3link='beauty'
                        col4cat={"Transport"}
                        col4img={transportationImage}
                        col4link="transportation"
                        />
            </Container>
            <Container>
                    <CategoryRow 
                        col1cat={"Religion"}
                        col1img={religionImage}
                        col1link="religion"
                        col2cat={"Technology"}
                        col2img={technologyImage}
                        col2link='Animals'
                        col3cat={"Animals"}
                        col3img={animalsImage}
                        col3link='animals'
                        col4cat={"more..."}
                        col4img={otherbizImage}
                        col4link="other20%businesses"
                        />
            </Container>
            <div className='mt-5 mb-5'>
                <h6 className='text-center'>If you would like to see additional categories added here please <Link>contact us</Link></h6>
            </div>
        </div>
    )   
}

export default AllCategories;




