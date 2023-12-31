import * as S from './profile.style';
import { CardProduct } from "../../components/cardProduct/cardProduct";

export const Profile = () => {

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
        <S.ProfileWelcome>Здравствуйте, Антон!</S.ProfileWelcome>
        <S.SectionName>Настройки профиля</S.SectionName>
        <S.Profile>
            <S.ProfilePhoto>
                <S.Photo src=""></S.Photo>
                <S.ChangePhoto>Заменить</S.ChangePhoto>
            </S.ProfilePhoto>
            <S.ProfileData>
                <S.InputBoxName>
                    <S.InputName>Имя</S.InputName>
                    <S.Input type="text"></S.Input>
                </S.InputBoxName>
                <S.InputBoxSurname>
                    <S.InputName>Фамилия</S.InputName>
                    <S.Input type="text"></S.Input>
                </S.InputBoxSurname>
                <S.InputBoxCity>
                    <S.InputName>Город</S.InputName>
                    <S.Input type="text"></S.Input>
                </S.InputBoxCity>
                <S.InputBoxTel>
                    <S.InputName>Телефон</S.InputName>
                    <S.Input type='tel'></S.Input>
                </S.InputBoxTel>
            </S.ProfileData>
        </S.Profile>
        <S.SectionName>Мои товары</S.SectionName>
        <S.CardsBox>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
        </S.CardsBox>
       </>
    )
	
}