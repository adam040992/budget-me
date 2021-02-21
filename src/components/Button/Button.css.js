import styled from 'styled-components';

    // color: ${({ theme: { colors }, primary }) => primary? colors.grey.light : colors.grey.normal};

const RootButton = styled.button`
    color: ${({ theme, primary }) => primary? theme.colors.grey.light : theme.colors.pink.normal};
    cursor: inherit;
    background-color: transparent;
    cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'}; 
    $:hover {
        opacity: .8;
    }
`;

export const InlineButton = styled.button`

`;

export const RegularButton = styled.button`

`;