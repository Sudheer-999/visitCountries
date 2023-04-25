import {
  VisitedText,
  VisitButton,
  CountryContainer,
  CountryName,
} from './styledComponents'

const CountryItem = props => {
  const {details, onVisitButton} = props
  const {id, name, isVisited} = details

  const onVisit = () => {
    onVisitButton(id)
  }

  const renderVisited = () => <VisitedText>Visited</VisitedText>

  const renderVisit = () => <VisitButton onClick={onVisit}>Visit</VisitButton>

  return (
    <CountryContainer>
      <CountryName>{name}</CountryName>
      {isVisited ? renderVisited() : renderVisit()}
    </CountryContainer>
  )
}

export default CountryItem
