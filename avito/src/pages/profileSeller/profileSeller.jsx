import * as S from './profileSeller.style';
import { CardProduct } from "../../components/cardProduct/cardProduct";
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import { ShowTelButton } from "../../components/showTelButton/showTelButton";
import { ModalReviews } from "../../components/modalReviews/modalReviews";

export const ProfileSeller = () => {


	return (
        <>
        <ModalReviews/>
        <ProfileHeader/>
        <S.Tittle>Профиль продавца</S.Tittle>
        <S.Seller>
            <S.ProfilePhoto></S.ProfilePhoto>
            <S.ProfileData>
                <S.SellerName>Кирилл Матвеев</S.SellerName>
                <S.SellerCity>Санкт-Петербург</S.SellerCity>
                <S.SellerInfo>Продает товары с августа 2021</S.SellerInfo>
                <ShowTelButton/>
                </S.ProfileData>
        </S.Seller>
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