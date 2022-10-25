import styled from 'styled-components';

export default styled.button`
    appearance: auto;
    padding: 0.5rem 0.75rem;
    border: none;
    font: inherit;
    font-weight: 600;
    color: inherit;
    cursor: pointer;
    color: var(--primary);
    background-color: var(--background);
    border: 2px solid var(--dark-turquoise);
    transition: background-color 0.2s;

    &:active, &:focus, &:hover, &.active {
        outline: none;
        color: var(--background);
        background-color: var(--primary);
        border: 2px solid var(--primary);
    }
`