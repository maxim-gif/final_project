import * as S from './main.style';
import { CardProduct } from "../../components/cardProduct/cardProduct";

export const Main = () => {

	return (
        <>
        <S.Header>
            <S.ButtonHeader>Вход в личный кабинет</S.ButtonHeader>
        </S.Header>
        <S.SearchMain>
            <S.LogMain src="/img/LogoMain.svg"></S.LogMain>
            <S.Search placeholder='Поиск по объявлениям'></S.Search>
            <S.SearchHeader>Найти</S.SearchHeader>
        </S.SearchMain>
        <S.TitleMain>Объявления</S.TitleMain>
        <S.CardsBox>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/>
        </S.CardsBox>
       </>
    )
	
}