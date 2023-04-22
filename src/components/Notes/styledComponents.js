import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h1`
  font-family: 'Bree Serif';
  font-size: 25px;
  font-weight: 700;
  color: #4c63b6;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 2px 2px #475569;
  border-radius: 8px;
  width: 650px;
  height: 350px;
  margin-bottom: 35px;
`

export const FormTitle = styled.input`
  padding: 7px;
  margin: 25px;
  width: 450px;
`
export const FormText = styled.textarea`
  padding: 5px;
  margin: 25px;
  width: 450px;
`

export const FormButton = styled.button`
  margin-left: auto;
  background-color: #1e293b;
  border-color: transparent;
  border-radius: 6px;
  color: #ffffff;
  padding: 5px;
  margin-right: 35px;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
export const NoNotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const NoNotesImage = styled.img`
  height: 30px;
  width: 30px;
`

export const NoNotesTitle = styled.h1`
  color: #334155;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto';
`
export const NoNotesPara = styled.p`
  font-size: 10px;
  color: #d8d8d8;
`
