import styled from "@emotion/styled";

const Title = styled.h1`
    text-align: center;
    outline: 1px solid orange;
    color: ${({ theme }) => {
        console.log(theme.colors);
        return theme.colors.red;
    }};
`;

export { Title };
