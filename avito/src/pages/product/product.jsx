import * as S from './product.style';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import { ShowTelButton } from "../../components/showTelButton/showTelButton";
import { formatToDate, formatDate } from "../../utilits/dateFormate";
import {baseUrl} from '../../components/api/api'


export const Product = () => {

    const products = useSelector((state) => state.products.products);
        
    const { id } = useParams()
    const navigate = useNavigate()
 
    let filter = products.filter((product) => (
        product.id === Number(id)
    ))


	return filter.length > 0 ?(
        <>
        <ProfileHeader/>
        <S.Product>
            <S.ProductImage>
                <S.MainImage src={filter[0].images.length >= 1 ? baseUrl + filter[0].images[0].url :'/img/notImage.png'}></S.MainImage>
                <S.DopImage>
                    <S.Image src={filter[0].images.length >= 2 ? baseUrl + filter[0].images[1].url :'/img/notImage.png'}></S.Image>
                    <S.Image src={filter[0].images.length >= 3 ? baseUrl + filter[0].images[2].url :'/img/notImage.png'}></S.Image>
                    <S.Image src={filter[0].images.length >= 4 ? baseUrl + filter[0].images[3].url :'/img/notImage.png'}></S.Image>
                    <S.Image src={filter[0].images.length >= 5 ? baseUrl + filter[0].images[4].url :'/img/notImage.png'}></S.Image>
                    <S.Image src={filter[0].images.length >= 6 ? baseUrl + filter[0].images[5].url :'/img/notImage.png'}></S.Image>
                </S.DopImage>
            </S.ProductImage>
            <S.ProductInfo>
                <S.ProductName>{filter[0].title}</S.ProductName>
                <S.ProductDate>{formatToDate(filter[0].created_on)}</S.ProductDate>
                <S.ProductCity>{filter[0].user.city}</S.ProductCity>
                <S.ProductReviews>23 отзыва</S.ProductReviews>
                <S.ProductPrice>{filter[0].price.toLocaleString()} ₽</S.ProductPrice> 
                <ShowTelButton phone={filter[0].user.phone}/>
                <S.ProductSeller>
                        <S.PhotoSeller src={baseUrl + filter[0].user.avatar}></S.PhotoSeller>
                        <S.SellerInfo>
                            <S.SellerName onClick={() => navigate(`/profileSeller/${filter[0].user.id}`)}>{filter[0].user.name}</S.SellerName>
                            <S.DateSale>{formatDate(filter[0].user.sells_from)}</S.DateSale>
                        </S.SellerInfo>
                </S.ProductSeller> 
            </S.ProductInfo>
        </S.Product>
        <S.Description>
            <h2>Описание товара</h2>
            <p>{filter[0].description}</p>
        </S.Description>
        
       </>
    ) : null
	
}