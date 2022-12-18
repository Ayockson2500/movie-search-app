import styled from "styled-components";

export const StyledMovieList = styled.div`
   /* display: flex; */

   .movie {
    background: #000000;
    border-radius: 12px;
    padding: 8px;
   }
   .movie:hover {
    scale: 1.05;
    transition: ease-in-out;
    cursor: pointer;
   }
   .imageContainer {
    position: relative;
    transition: transform .02s;
   }
   .overlay {
    position: absolute;
    background: rgba(0,0,0,0.8);
    width: 100%;
    transition: .5 ease;
    opacity: 0;
    bottom: 0;
    font-size: 20px;
    padding: 20px;
    text-align: center;
    color: white;
   }
   .imageContainer:hover .overlay {
    opacity: 1;
   }
` 