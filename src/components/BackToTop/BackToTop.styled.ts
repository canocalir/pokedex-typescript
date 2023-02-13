import styled from "styled-components";

export const ScrollToTopButton = styled.div`
   position: fixed; 
   width: 100%;
   bottom: 5rem;
   left: 95vw;
   height: 1rem;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: #c99403;
   @media (max-width: 768px) {
	left: 85vw;
   }
`