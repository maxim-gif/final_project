import * as S from './modalReviews.style'
import PropTypes from 'prop-types'
import { baseUrl, addReviews, getReviews } from '../api/api'
import React from 'react'
const { useState, useEffect } = React

export const ModalReviews = ({
    reviewsModal,
    setReviewsModal,
    reviews,
    setReviews,
    id,
}) => {
    const [text, setText] = useState('')
    const [activeButton, setActiveButton] = useState(true)

    useEffect(() => {
        text !== '' ? setActiveButton(false) : setActiveButton(true)
    }, [text])

    const handleAddReviews = () => {
        addReviews(Number(id), text).then(() => {
            getReviews(id).then((data) => {
                setReviews(data)
            })
            setText('')
        })
    }
    return (
        <S.Page $activeModal={reviewsModal}>
            <S.Modal>
                <S.Reviews>
                    <S.Top>
                        <S.Tittle>Отзывы о товаре</S.Tittle>
                        <S.ButtonClose
                            src="/img/close.svg"
                            onClick={() => {
                                setReviewsModal(false)
                                setText('')
                            }}
                        ></S.ButtonClose>
                    </S.Top>
                    <S.NameSection>Добавить отзыв</S.NameSection>
                    <S.InputName
                        placeholder="Введите отзыв"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    ></S.InputName>
                    <S.ButtonModal
                        onClick={() => {
                            handleAddReviews()
                        }}
                        disabled={activeButton}
                    >
                        Опубликовать
                    </S.ButtonModal>
                    {reviews.length > 0
                        ? reviews.map((review) => (
                              <S.Review key={review.id}>
                                  <S.ReviewsImage
                                      src={baseUrl + review.author.avatar}
                                  ></S.ReviewsImage>
                                  <S.ReviewMain>
                                      <S.ReviewsName>
                                          {review.author.name}{' '}
                                          <span>{review.created_on}</span>
                                      </S.ReviewsName>
                                      <S.ReviewText>
                                          Комментарий <p>{review.text}</p>
                                      </S.ReviewText>
                                  </S.ReviewMain>
                              </S.Review>
                          ))
                        : null}
                </S.Reviews>
            </S.Modal>
        </S.Page>
    )
}
ModalReviews.propTypes = {
    setReviewsModal: PropTypes.func.isRequired,
    setReviews: PropTypes.func.isRequired,
    reviewsModal: PropTypes.bool.isRequired,
    reviews: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
}
