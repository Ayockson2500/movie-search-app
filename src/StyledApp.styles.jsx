import styled from "styled-components";
import headerImage from "./assets/images/movie-header-Img.svg"

const StyledApp = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans';
    }
    .f-s-72 {
        font-size: 32px;
    }
    .f-w-700 {
        font-weight: 700;
    }

    nav {
        background: #292929;
        color: white;
        padding: 10px;
    }
    .app-logo {
        border: 1px solid white;
        width: 100px;
        padding: 8px;
    }
    header {
        background: url(${headerImage});
        height: 50vh;
        width: 100%;
    }
    .header-title {
        width: 250px;
        position: absolute;
        top: 150px;
    }
    header p {
        color:#FFFFFF;
    }
    .searchField {
        padding: 10px;
    }
    .searchField input {
        width: 100%;
    }
    .movie-app > .row {
        overflow-x: auto;
        flex-wrap: nowrap;
    }
`
export default StyledApp