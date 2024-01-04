import * as S from './profile.style';
import React from 'react';
const { useEffect, useState } = React
// import { CardProduct } from "../../components/cardProduct/cardProduct";
import { ProfileHeader } from "../../components/profileHeader/profileHeader";
import {getMyAdverts, getMyData, updateUser} from '../../components/api/api';

export const Profile = () => {
    const [active, setActive] = useState(false);
    const [user, setUser] = useState([]);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    const handleUserData = () => {
        getMyData().then((data) => {
            setUser(data)
            setName(data.name || '')
            setSurname(data.surname || '') 
            setCity(data.city || '')
            setPhone(data.phone || '')
        }) 
    }
    useEffect(() => {
        getMyAdverts().then(() => {
            
        })
        handleUserData()  
    }, [])



    useEffect(() => {
        if (name !== user.name || surname !== user.surname || city !== user.city || phone !== user.phone) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [name, surname, city, phone])

    const handleUpdate = () => {
        updateUser(name, surname, city, phone).then(() =>{handleUserData()})
        setActive(false)
    }

	return (
        <>
        <ProfileHeader/>
        <S.ProfileWelcome>Здравствуйте, {user.name}!</S.ProfileWelcome>
        <S.SectionName>Настройки профиля</S.SectionName>
        <S.Profile>
            <S.ProfilePhoto>
                <S.Photo src=""></S.Photo>
                <S.ChangePhoto>Заменить</S.ChangePhoto>
            </S.ProfilePhoto>
            <S.ProfileData>
                <S.InputBoxName>
                    <S.InputName>Имя</S.InputName>
                    <S.Input type="text" value={name} onChange={e => setName(e.target.value)}></S.Input>
                </S.InputBoxName>
                <S.InputBoxSurname>
                    <S.InputName>Фамилия</S.InputName>
                    <S.Input type="text" value={surname} onChange={e => setSurname(e.target.value)}></S.Input>
                </S.InputBoxSurname>
                <S.InputBoxCity>
                    <S.InputName>Город</S.InputName>
                    <S.Input type="text" value={city} onChange={e => setCity(e.target.value)}></S.Input>
                </S.InputBoxCity>
                <S.InputBoxTel>
                    <S.InputName>Телефон</S.InputName>
                    <S.Input type='tel' value={phone} onChange={e => setPhone(e.target.value)}></S.Input>
                </S.InputBoxTel>
                <S.SaveButton $active={active} onClick={handleUpdate}>Сохранить</S.SaveButton>
            </S.ProfileData>
        </S.Profile>
        <S.SectionName>Мои товары</S.SectionName>
        <S.CardsBox>
            {/* <CardProduct/>
            <CardProduct/>
            <CardProduct/>
            <CardProduct/> */}
        </S.CardsBox>
       </>
    )
	
}