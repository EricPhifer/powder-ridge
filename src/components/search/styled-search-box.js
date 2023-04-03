import styled, { css } from 'styled-components';
import SearchBox from './search-box';

const open = css`
    width: 16rem;
    background: ${({ theme }) => theme.background};
    cursor: text;
    margin-left: -3.2em;
    padding-left: 3.2em;
    padding-top: 1rem;
    padding-bottom: 1rem;
    box-shadow: 0.2px 0.2px 1.9px -5px rgba(0, 0, 0, 0.129),
        0.5px 0.5px 4.3px -5px rgba(0, 0, 0, 0.187), 1px 1px 7.7px -5px rgba(0, 0, 0, 0.23),
        1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.27), 2.6px 2.6px 21.2px -5px rgba(0, 0, 0, 0.313),
        4.6px 4.6px 37px -5px rgba(0, 0, 0, 0.371), 10px 10px 80px -5px rgba(0, 0, 0, 0.5);
`;

const closed = css`
    width: 0;
    background: var(--white);
    cursor: pointer;
    margin-left: -2.7em;
    padding-left: 3em;
    padding-top: 1.7em;
    box-shadow: 0.2px 0.2px 1.9px -5px rgba(0, 0, 0, 0.129),
        0.5px 0.5px 4.3px -5px rgba(0, 0, 0, 0.187), 1px 1px 7.7px -5px rgba(0, 0, 0, 0.23),
        1.6px 1.6px 12.8px -5px rgba(0, 0, 0, 0.27), 2.6px 2.6px 21.2px -5px rgba(0, 0, 0, 0.313),
        4.6px 4.6px 37px -5px rgba(0, 0, 0, 0.371), 10px 10px 80px -5px rgba(0, 0, 0, 0.5);
`;

export default styled(SearchBox)`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 0;

    .SearchInput {
        outline: none;
        border: ${({ hasFocus }) => (hasFocus ? 'auto' : 'none')};
        font-size: 1rem;
        transition: 100ms;
        border-radius: 5rem;
        color: ${({ theme }) => theme.foreground};
        ::placeholder {
            color: ${({ theme }) => theme.faded};
        }
        ${({ hasFocus }) => (hasFocus ? open : closed)}
    }

    .SearchIcon {
        width: 1em;
        margin: 0.3em;
        color: ${({ theme }) => theme.foreground};
        pointer-events: none;
    }
`;
