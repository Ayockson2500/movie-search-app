import styled from "styled-components";

export const StyledMovieList = styled.div`
   display: flex;

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
` 