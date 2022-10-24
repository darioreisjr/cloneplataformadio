import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: center;
 `

// export const ContextContainer = styled.div`
//     width: 100%;
// `

// export const ImgContainer = styled.div`
//     width: 100%;
// `

// export const ImgContext = styled.img`
//     width: 100%;
//     margin: 0 auto;
// `

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    margin-bottom: 24px;
`

export const TitleHighLight = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF70;
    margin-bottom: 24px;
`



export const Column = styled.div`
    flex: ${({ flex }) => flex};
    padding-right: 24px;
`