import * as S from './profileHeader.style';
import { useNavigate } from 'react-router-dom'

export const ProfileHeader = () => {

    const navigate = useNavigate()

	return (
        <>
        <S.Header>
            <S.ButtonHeader>Разместить объявление</S.ButtonHeader>
            <S.ButtonHeader2>Личный кабинет</S.ButtonHeader2>
        </S.Header>
        <S.ProfileNav>
            <S.LogoProfile src="/img/LogoMain.svg"></S.LogoProfile>
            <S.ButtonBack onClick={() => navigate(`/`)}>Вернуться на главную</S.ButtonBack>
        </S.ProfileNav>
       </>
    )
	
}