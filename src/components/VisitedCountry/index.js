import {
  VisitedContainer,
  CountryImage,
  Controls,
  Name,
  Remove,
} from './styledComponents'

const VisitedCountry = props => {
  const {countryDetails, onRemoveButton} = props
  const {id, name, imageUrl} = countryDetails

  const onRemove = () => {
    onRemoveButton(id)
  }

  return (
    <VisitedContainer>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <Controls>
        <Name>{name}</Name>
        <Remove onClick={onRemove}>Remove</Remove>
      </Controls>
    </VisitedContainer>
  )
}

export default VisitedCountry
