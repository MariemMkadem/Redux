import list from '../components/PictureDetail'
export const addList = () => {
  return {
    type: 'ADD_LIST',
    id:4,
    payload:    {
        "id": list.id,
        "title": list.title,
        "thumbnailUrl": list.thumbnailUrl
      }
  }
}
