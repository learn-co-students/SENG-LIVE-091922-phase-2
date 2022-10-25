import styled from 'styled-components';

export default styled.input`
    margin-top: 0.25rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: none;
    font-size: 1.25rem;
    font-weight: bold;
    transition: all 0.3s;
    border: 2px solid var(--color);

    &:focus {
        outline: none;
        border: 2px solid var(--primary);
    }
`