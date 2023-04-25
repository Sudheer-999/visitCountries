import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  background-color: #161624;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px 150px;
  font-family: Roboto;
`
export const Head = styled.h1`
  font-size: 20px;
`
export const Countries = styled.ul`
  width: 100%;
  margin-left: 0;
  padding-left: 0;
  border-bottom: 1px solid #334155;
  height: 40vh;
  overflow-y: scroll;
`
export const VisitedCountries = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: 0;
  padding-left: 0;
`
export const NoVisitedView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40vh;
`
export const NoView = styled.p`
  font-size: 20px;
`
