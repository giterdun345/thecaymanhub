import React, { useState, useEffect } from 'react'
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const Search = () =>{
    return(
        <div>
            <h1 className='phrase text-center'>Find the best Cayman has to offer.</h1>
            {/* phrase needs to be shortened a bit, if not media on css needs to be adjusted */}
            <InputGroup className="mx-auto searchBar" size='lg'>
                <FormControl
                placeholder="Search for bars, resaurants, musicians and more"
                aria-label="Search for bars, resaurants, musicians and more"
                aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                    <Button variant="outline-warning">Search</Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
                
    )
}

export default Search;