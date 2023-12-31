import * as S from './profileHeader.style';

export const ProfileHeader = () => {

	return (
        <>
        <S.Header>
            <S.ButtonHeader>Разместить объявление</S.ButtonHeader>
            <S.ButtonHeader2>Личный кабинет</S.ButtonHeader2>
        </S.Header>
        <S.ProfileNav>
            <S.LogoProfile src="/img/LogoMain.svg"></S.LogoProfile>
            <S.ButtonBack>Вернуться на главную</S.ButtonBack>
        </S.ProfileNav>
       </>
    )
	
}