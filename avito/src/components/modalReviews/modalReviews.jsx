import * as S from './modalReviews.style';
export const ModalReviews = () => {

	return (
        <S.Modal>
            <S.Tittle>Новое объявление</S.Tittle>
            <S.NameSection>Название</S.NameSection>
            <S.InputName placeholder='Введите название'></S.InputName>
            <S.ButtonModal>Опубликовать</S.ButtonModal>
            <S.Review>
                <S.ReviewsImage></S.ReviewsImage>
                <S.ReviewMain>
                    <S.ReviewsName>Олег <span>14 августа</span></S.ReviewsName>
                    <S.ReviewText>Комментарий <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></S.ReviewText>
                </S.ReviewMain>
            </S.Review>
        </S.Modal>
    )
	
}