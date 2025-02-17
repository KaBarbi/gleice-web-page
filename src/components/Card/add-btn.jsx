import React from 'react';
import styled from 'styled-components';

const ButtonAdd = () => {
  return (
    <StyledWrapper>
      <a 
        href="https://discord.com/oauth2/authorize?client_id=1306407860493877258&permissions=8&integration_type=0&scope=bot"
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Add
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    --color: #5865f2;
    padding: 0.3em 3.2em;
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
    text-decoration: none; 
    display: inline-block; 
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

export default ButtonAdd;
