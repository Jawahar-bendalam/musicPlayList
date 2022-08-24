import {AiOutlineDelete} from 'react-icons/ai'

const MusicItem = props => {
  const {trackDetail, onDeleteClick} = props
  const {id, imageUrl, name, genre, duration} = trackDetail

  const trackDeleteClick = () => {
    onDeleteClick(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
        <div>
          <p>{duration}</p>
          <button type="button" testid="delete" onClick={trackDeleteClick}>
            <AiOutlineDelete size={25} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItem
