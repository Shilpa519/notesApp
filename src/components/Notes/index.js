import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  Title,
  FormContainer,
  FormTitle,
  FormText,
  FormButton,
  ListContainer,
  NoNotesContainer,
  NoNotesImage,
  NoNotesTitle,
  NoNotesPara,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [notesList, setNotes] = useState([])

  const onTitleChange = event => {
    setTitle(event.target.value)
  }

  const onTextChange = event => {
    setText(event.target.value)
  }

  const onFormSubmit = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      text,
    }
    setNotes(prevNotes => [...prevNotes, newNote])
    setTitle('')
    setText('')
  }

  return (
    <MainContainer>
      <Title>Notes</Title>
      <FormContainer onSubmit={onFormSubmit}>
        <FormTitle
          input="text"
          onChange={onTitleChange}
          placeholder="Title"
          value={title}
        />
        <FormText
          input="text"
          rows="6"
          onChange={onTextChange}
          value={text}
          placeholder="Take a Note..."
        />
        <FormButton type="submit">Add</FormButton>
      </FormContainer>
      {notesList.length > 0 ? (
        <ListContainer>
          {notesList.map(item => (
            <NoteItem key={item.id} item={item} />
          ))}
        </ListContainer>
      ) : (
        <NoNotesContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesTitle>No Notes Yet</NoNotesTitle>
          <NoNotesPara>Notes you add will appear here</NoNotesPara>
        </NoNotesContainer>
      )}
    </MainContainer>
  )
}
export default Notes
