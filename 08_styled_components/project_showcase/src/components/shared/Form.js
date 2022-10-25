import styled from "styled-components";

export default styled.form`
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: 0 auto;
    border: 2px solid var(--dark-turquoise);
    padding: 1.75rem;

    h3 {
        margin-bottom: 1rem;
    }

    button[type="submit"] {
        width: 50%;
        cursor: pointer;
    }
`