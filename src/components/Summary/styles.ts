import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    gap: 2rem;
    margin-top: -10rem;

    @media (max-width: 720px) {
        grid-template-rows: repeat(3, 1fr);
    }

    @media (min-width: 720px) {
        grid-template-columns: repeat(3, 1fr);
    }

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 500;
        }

        &.highlight-background {
            background: var(--green);
            color: var(--shape);
        }
    }
`;