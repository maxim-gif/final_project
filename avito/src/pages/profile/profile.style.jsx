    import styled from 'styled-components';


    export const Header = styled.div`
        width: 100%;
        height: 79px;
        background-color: #009EE4;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding-right: 141px;
        gap: 10px;
    `;

    export const ButtonHeader = styled.button`
        height: 40px;
        width: 232px;
        border-radius: 6px;
        border: 1px solid white;
        background-color: #009EE4;
        color: white;
        font-size: 16px;
        font-weight: 400;
        &:hover {
            background-color: #0080C1;
        }
    `;

    export const ButtonHeader2 = styled(ButtonHeader)`
        width: 173px;
    `;

    export const ProfileNav = styled.div`
        width: 100%;
        height: 136px;
        display: flex;
        align-items: center;
        gap: 60px;
        padding-left: calc(50vw - 579px);
    `;

    export const LogoProfile = styled.img`
        height: 28px;
        width: 54px;
    `;

    export const ButtonBack = styled.button`
        height: 50px;
        width: 241px;
        border-radius: 6px;
        border: none;
        background-color: #009EE4;
        color: white;
        font-size: 16px;
        font-weight: 400;
        &:hover {
            background-color: #0080C1;
        }
    `;

    export const ProfileWelcome = styled.h1`
        margin-left: calc(50vw - 579px);
        font-size: 40px;
        font-weight: 500;
        line-height: 88px;
        color: black;
        margin-bottom: 10px;
    `;

    export const SectionName = styled.h2`
        margin-left: calc(50vw - 579px);
        font-size: 32px;
        font-weight: 500;
        line-height: 70.4px;
        color: black;
        margin-bottom: 20px;
    `;

    export const Profile = styled.div`
        display: flex;
        gap: 50px;
        margin-left: calc(50vw - 579px);
        margin-bottom: 70px;
    `;

    export const ProfilePhoto = styled.div`
        width: 170px;
        display: flex;
        flex-direction: column;
        align-items: center;
    `;

    export const Photo = styled.img`
        height: 170px;
        width: 170px;
        background-color: #F0F0F0;
        border-radius: 50%;
    `;

    export const ChangePhoto = styled.button`
        width: 74px;
        border: none;
        background: transparent;
        margin-top: 10px;
        color: #009EE4;
        font-size: 16px;
        font-weight: 400;
    `;

    export const ProfileData = styled.div`
        display: flex;
        flex-wrap: wrap;
        column-gap: 14px;
        row-gap: 20px;
        width: 614px;
    `;

    export const InputName = styled.div`
        color: #C4C4C4;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        margin-bottom: 4px;
    `;

    export const InputBoxName = styled.div`
        display: flex;
        flex-direction: column;
        width: 300px;
        &:focus-within ${InputName} {
                color: #009EE4;
            }
    `;

    export const InputBoxSurname = styled(InputBoxName)`
    `;

    export const InputBoxCity = styled(InputBoxName)`
    `;

    export const InputBoxTel = styled(InputBoxName)`
    width: 614px;
    `;


    export const Input = styled.input`
        height: 50px;
        border-radius: 6px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        &:focus{
            outline: 1px solid rgba(0, 158, 228, 1);
        }
    `;

    export const CardsBox = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 270px);
        column-gap: 26px;
        row-gap: 40px;
        margin-left: calc(50vw - 579px);
`;