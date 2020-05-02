import axios from 'axios'

const baseUrl = 'https://itunes.apple.com/search?'

export const getMusicVideo = ({ query, searchTerm }) => {
  const newQuery = query.replace(/ /g, '+')

  if (!searchTerm) {
    return axios.get(`${baseUrl}term=${newQuery}&entity=musicVideo`)
  } else {
    return axios.get(
      `${baseUrl}term=${newQuery}&attribute=${searchTerm}Term&entity=musicVideo`
    )
  }
}
