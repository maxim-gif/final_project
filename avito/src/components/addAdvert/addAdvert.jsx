import * as S from './addAdvert.style';
export const AddAdvert = () => {

	return (
        <S.Modal>
            <S.Top>
                <S.Tittle>Новое объявление</S.Tittle>
                <S.ButtonClose src="/img/close.svg"></S.ButtonClose>
            </S.Top>
            <S.NameSection>Название</S.NameSection>
            <S.InputName placeholder='Введите название'></S.InputName>
            <S.NameSection>Описание</S.NameSection>
            <S.InputDescription placeholder='Введите описание'></S.InputDescription>
            <S.NameSection>Фотографии товара <span>не более 5 фотографий</span></S.NameSection>
            <S.DopImage>
                <S.Image src="/img/addImage.svg"></S.Image>
                <S.Image src="/img/addImage.svg"></S.Image>
                <S.Image src="/img/addImage.svg"></S.Image>
                <S.Image src="/img/addImage.svg"></S.Image>
                <S.Image src="/img/addImage.svg"></S.Image>
            </S.DopImage>
            <S.NameSection>Цена</S.NameSection>
            <S.BoxInput>
                <S.InputPrice></S.InputPrice>
            </S.BoxInput>
            <S.ButtonModal>Опубликовать</S.ButtonModal>
        </S.Modal>
    )
	
}