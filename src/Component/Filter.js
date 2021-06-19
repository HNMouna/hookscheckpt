import React,{ useState,useEffect } from 'react'
import { TextField } from '@material-ui/core';
import StarRatingComponent from 'react-star-rating-component';

const Filter = ({getSearchData,rate}) => {
    const [searchInput, setSearchInput] = useState({searchInput:''})
    const [searchRate, setSearchRate] = useState(0);
    const handleSearch = (e) => {
           //setSearchInput({...searchInput,[e.target.name]:e.target.value});
           getSearchData({...searchInput,[e.target.name]:e.target.value,searchRate});
    };

    return (
        <div>
            <form>
            <TextField type='input' name= 'searchInput' onChange={handleSearch} />
        <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={rate}
          onStarClick={(value)=> getSearchData({...searchInput,searchRate:value})}
        /> 
            </form>
        </div>
    )
    }

export default Filter

