import React, {
  FC,
  useCallback,
  useContext,
  useState,
} from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Place } from 'Axios/api'
import Card from 'Components/Card'
import Button from 'Components/Button'
import Modal from 'Components/Modal'
import Map from 'Components/Map'
import AuthContext from 'Api/context/auth'

const Item = styled.li`
  margin: 1rem 0;
`

const ItemCard = styled(Card)`
  padding: 0;
`

const ItemImage = styled.div`
  height: 12.5rem;
  margin-right: 1.5rem;
  width: 100%;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 20rem;
  }
`

const ItemInfo = styled.div`
  padding: 1rem;
  text-align: center;

  h2,
  h3,
  p {
    margin: 0 0 0.5rem 0;
  }
`

const ItemActions = styled.div`
  border-top: 1px solid #ccc;
  padding: 1rem;
  text-align: center;

  a,
  button {
    margin: 0.5rem;
  }
`

const MapContainer = styled.div`
  height: 15rem;
  width: 100%;
`

const contentCSS = css`
  padding: 0;
`

const footerCSS = css`
  text-align: right;
`

const PlaceItem: FC<Place> = ({
  address,
  description,
  id,
  image,
  location,
  title,
}) => {
  const auth = useContext(AuthContext)

  const [
    showMap,
    setShowMap,
  ] = useState(false)

  const [
    showDelete,
    setShowDelete,
  ] = useState(false)

  const handleShowMap = useCallback(() => setShowMap(true), [])

  const handleHideMap = useCallback(() => setShowMap(false), [])

  const handleShowDelete = useCallback(() => setShowDelete(true), [])

  const handleHideDelete = useCallback(() => setShowDelete(false), [])

  const handleDelete = () => {
    console.log('delete... this...')
    handleHideDelete()
  }

  const footer = (
    <Button onClick={ handleHideMap }>
      CLOSE
    </Button>
  )

  const deleteFooter = (
    <>
      <Button
        inverse
        onClick={ handleHideDelete }
      >
        CANCEL
      </Button>
      <Button
        danger
        onClick={ handleDelete }
      >
        DELETE
      </Button>
    </>
  )

  return (
    <>
      <Modal
        contentCSS={ contentCSS }
        footer={ footer }
        footerCSS={ footerCSS }
        handleCloseModal={ handleHideMap }
        header={ address }
        show={ showMap }
      >
        <MapContainer>
          <Map
            center={
              {
                lat : location.lat,
                lon : location.lng,
              }
            }
            zoom={ 16 }
          />
        </MapContainer>
      </Modal>
      {
        auth.isLogin && (
          <Modal
            footer={ deleteFooter }
            footerCSS={ footerCSS }
            handleCloseModal={ handleHideDelete }
            header="Are you sure?"
            show={ showDelete }
          >
            <p>
              Do you want to delete this?
            </p>
          </Modal>
        )
      }
      <Item>
        <ItemCard>
          <ItemImage>
            <img
              alt={ title }
              src={ image }
            />
          </ItemImage>
          <ItemInfo>
            <h2>{ title }</h2>
            <h3>{ address }</h3>
            <p>{ description }</p>
          </ItemInfo>
          <ItemActions>
            <Button
              inverse
              onClick={ handleShowMap }
            >
              VIEW ON MAP
            </Button>
            {
              auth.isLogin && (
                <>
                  <Button to={ `/places/${id}` }>
                    EDIT
                  </Button>
                  <Button
                    danger
                    onClick={ handleShowDelete }
                  >
                    DELETE
                  </Button>
                </>
              )
            }
          </ItemActions>
        </ItemCard>
      </Item>
    </>
  )
}

export default PlaceItem
