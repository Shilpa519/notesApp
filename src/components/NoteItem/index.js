import {
  ListItemContainer,
  ListItemTitle,
  ListItemText,
} from './styledComponents'

const NoteItem = props => {
  const {item} = props
  const {id, title, text} = item

  return (
    <ListItemContainer key={id}>
      <ListItemTitle>{title}</ListItemTitle>
      <ListItemText>{text}</ListItemText>
    </ListItemContainer>
  )
}
export default NoteItem
