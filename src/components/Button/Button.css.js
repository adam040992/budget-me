import styled from 'styled-components';

    // color: ${({ theme: { colors }, primary }) => primary? colors.grey.light : colors.grey.normal};

const RootButton = styled.button`
    color: ${({ theme, primary }) => primary? theme.colors.grey.light : theme.colors.pink.normal};
    cursor: inherit;
    border: none;
    background-color: transparent;
    cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'}; 
    
    &:hover {
        opacity: .8;
    }
`;

export const InlineButton = styled(RootButton)`
    &:hover {
        text-decoration: underline;
    }
`;

export const RegularButton = styled(RootButton)`
    background-color: ${({ theme, primary }) => primary ? theme.colors.pink.normal : theme.colors.grey.light};
    margin: ${({ theme }) => `${theme.spacing.xs / 2}px`};
    padding: ${({ theme }) => `${theme.spacing.xs / 2}px ${theme.spacing.xs}px`};
    border: ${({ theme }) => `2px solid ${theme.colors.pink.normal}`};
    border-radius: 3px;
`;