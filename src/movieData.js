import {v4 as uuidv4 } from 'uuid'
const movies = [
{
id: uuidv4(),
title: 'Mewtwo contre-attaque',
img : 'https://images-na.ssl-images-amazon.com/images/I/615VN0Q649L._SY445_.jpg',
rate: 5,
description:'movie 1',
},
{
    id: uuidv4(),
    title: 'Pokemon: Black and White',
    img : 'https://images-na.ssl-images-amazon.com/images/I/81Aq5gsv7rL._SX342_.jpg',
    rate: 4,  
    description:'Movie 2',
},
{
    id: uuidv4(),
    title: 'Darkrai',
    img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcaZyVi3gOYGy71jlfuFA2srYUiw5bZEqDEQ&usqp=CAU',
    rate: 3, 
    description:'Movie 3',
},
{
    id: uuidv4(),
    title: 'Diamond Pearl',
    img : 'https://images-na.ssl-images-amazon.com/images/I/91i0dT5d1UL._AC_SX342_.jpg',
    rate: 5,   
    description:'Movie 4',
},
];
export default movies;