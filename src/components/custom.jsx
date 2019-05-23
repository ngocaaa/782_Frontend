import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Side = styled.div`
    flex: 1;
    height: 100vh;
`;

export const LeftContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
`;

export const RightTopContainer = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
`;

export const RightBottomContainer = styled.div`
    width: 100%;
    height: 50%;
    background-image: url(${({ src }) => src});
    background-size: cover;
    background-position: center;
`;