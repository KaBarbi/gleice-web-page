import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonCmd = () => {
  return (
    <StyledWrapper>
      <Link 
        to="/commands" 
        className="button"
      >
        Commands
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --color: #5865f2;
    padding: 0.3em 2.5em;
    background-color: transparent;
    border-radius: .3em;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: .5s;
    font-weight: 400;
    font-size: 17px;
    border: 1px solid;
    font-family: inherit;
    text-transform: uppercase;
    color: var(--color);
    z-index: 1;
    text-decoration: none; /* Remove underline from <a> */
    display: inline-block; /* Ensures it behaves like a block element */
  }

  .button::before, .button::after {
    content: '';
    display: block;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
    position: absolute;
    border-radius: 50%;
    z-index: -1;
    background-color: var(--color);
    transition: 1s ease;
  }

  .button::before {
    top: -1em;
    left: -1em;
  }

  .button::after {
    left: calc(100% + 1em);
    top: calc(100% + 1em);
  }

  .button:hover::before, .button:hover::after {
    height: 410px;
    width: 410px;
  }

  .button:hover {
    color: rgb(10, 25, 30);
  }

  .button:active {
    filter: brightness(.8);
  }
`;

export default ButtonCmd;
