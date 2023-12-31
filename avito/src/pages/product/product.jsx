import * as S from './product.style';
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import { ShowTelButton } from "../../components/showTelButton/showTelButton";

export const Product = () => {

	return (
        <>
        <ProfileHeader/>
        <S.Product>
            <S.ProductImage>
                <S.MainImage></S.MainImage>
                <S.DopImage>
                    <S.Image></S.Image>
                    <S.Image></S.Image>
                    <S.Image></S.Image>
                    <S.Image></S.Image>
                    <S.Image></S.Image>
                </S.DopImage>
            </S.ProductImage>
            <S.ProductInfo>
                <S.ProductName>Ракетка для большого тенниса Triumph Pro STС Б/У</S.ProductName>
                <S.ProductDate>Сегодня в 10:45</S.ProductDate>
                <S.ProductCity>Санкт-Петербург</S.ProductCity>
                <S.ProductReviews>23 отзыва</S.ProductReviews>
                <S.ProductPrice>2 200 ₽</S.ProductPrice> 
                <ShowTelButton/>
                <S.ProductSeller>
                        <S.PhotoSeller></S.PhotoSeller>
                        <S.SellerInfo>
                            <S.SellerName>Кирилл</S.SellerName>
                            <S.DateSale>Продает товары с августа 2021</S.DateSale>
                        </S.SellerInfo>
                </S.ProductSeller> 
            </S.ProductInfo>
        </S.Product>
        <S.Description>
            <h2>Описание товара</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </S.Description>
        
       </>
    )
	
}