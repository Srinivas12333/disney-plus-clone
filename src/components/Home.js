import React,{useEffect} from 'react'

import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import db from "../firebase" 
import {auth,provider} from "../firebase"
import { doc } from 'firebase/firestore'


function Home() {
   useEffect(() =>{
     db.Collection("movies").onSnapShot((snapshot) =>{
     let tempMovies = snapshot.docs.map(() =>{
          return {id :doc.id, ...doc.data()}
        })
        console.log(tempMovies);
        console.error();
        
     })
   },[])
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position:relative;
  overflow-x:hidden;

  &:before {
    background:url("/images/home-background.png") center center /cover 
    no-repeat fixed;
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;

   }
  
  
 
   


`