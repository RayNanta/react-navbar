import styled from 'styled-components';


export const TentangP = styled.div`
    background: #0c0c0c;
    align-items: center;
    text-align: center;
    padding: 0 30px;
    height: 600px;
    color: #fff;
    padding: 0.5rem calc((100vw - 1000px) / 2);
`
export const h1Tentang = styled.div`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 48px;
    }
    
    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`
export const pTentang = styled.p`
     margin-top: 24px;
    color: #15cdfc;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }
    
    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`
export const section1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

