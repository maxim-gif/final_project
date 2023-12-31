import styled from 'styled-components';

export const Tittle = styled.h1`
margin-left: calc(50vw - 579px);
font-size: 40px;
font-weight: 500;
line-height: 88px;
color: black;
margin-bottom: 10px;
`;

export const Seller = styled.div`
display: flex;
gap: 50px;
margin-left: calc(50vw - 579px);
margin-bottom: 44px;
`;

export const ProfilePhoto = styled.img`
    height: 170px;
    width: 170px;
    background-color: #F0F0F0;
    border-radius: 50%;
`;

export const ProfileData = styled.div`
    display: flex;
    flex-direction: column;
    width: 243px;
`;

export const SellerName = styled.h3`
    font-size: 20px;
    font-weight: 600;
    line-height: 40px;
    color: black;
`;

export const SellerCity = styled.h4`
    font-size: 16px;
    font-weight: 400;
    line-height: 32px;
    color: #5F5F5F;
`;

export const SellerInfo = styled(SellerCity)`
`;

export const SellerButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 62px;
    width: 214px;
    margin-top: 30px;
    border-radius: 6px;
    border: none;
    background-color: #009EE4;

`;

export const TittleButton = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 22.4px;
    color: white;
`;
export const TelButton = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 29.6px;
    color: white;
`;

export const SectionName = styled.h2`
margin-left: calc(50vw - 579px);
font-size: 32px;
font-weight: 500;
line-height: 70.4px;
color: black;
margin-bottom: 20px;
`;

export const CardsBox = styled.div`
display: grid;
grid-template-columns: repeat(4, 270px);
column-gap: 26px;
row-gap: 40px;
margin-left: calc(50vw - 579px);
`;