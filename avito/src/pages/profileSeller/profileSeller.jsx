import * as S from './profileSeller.style';
import React from 'react';
const { useState, useEffect } = React
import { useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CardProduct } from "../../components/cardProduct/cardProduct";
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import { ShowTelButton } from "../../components/showTelButton/showTelButton";
// import { ModalReviews } from "../../components/modalReviews/modalReviews";
import {baseUrl} from '../../components/api/api'

export const ProfileSeller = () => {

    const { id } = useParams()

    const productsState = useSelector((state) => state.products.products);

    const [productsHtml, setProductsHtml] = useState(null)
    const [phone, setPhone] = useState(null)
    const [avatar, setAvatar] = useState(null)

    useEffect(()=>{
        let filter = productsState.filter((product) => (
            product.user_id === Number(id)
        ))
        console.log(filter);

        if (filter.length !== 0) {
            setAvatar(filter[0].user.avatar)
            setPhone(filter[0].user.phone);
        }

        let result = filter.map((product) => (
            <CardProduct 
            key={product.id} 
            id={product.id} 
            name={product.title} 
            price={product.price} 
            city={product.user?.city} 
            date={product.user?.sells_from} 
            image={product.images?.length ? baseUrl + product.images[0].url : '/img/notImage.png'}
            /> 
        ))
        setProductsHtml(result)
    },[productsState])


    
	return (
        <>
        {/* <ModalReviews/> */}
        <ProfileHeader/>
        <S.Tittle>Профиль продавца</S.Tittle>
        <S.Seller>
            <S.ProfilePhoto src={baseUrl + avatar}></S.ProfilePhoto>
            <S.ProfileData>
                <S.SellerName>Кирилл Матвеев</S.SellerName>
                <S.SellerCity>Санкт-Петербург</S.SellerCity>
                <S.SellerInfo>Продает товары с августа 2021</S.SellerInfo>
                <ShowTelButton phone={phone}/>
                </S.ProfileData>
        </S.Seller>
        <S.SectionName>Мои товары</S.SectionName>
        <S.CardsBox>
            {productsHtml}
        </S.CardsBox>
       </>
    )
	
}