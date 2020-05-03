import axios from 'axios'

const baseUrl = 'https://itunes.apple.com/'

export const getMusicVideo = ({ query, searchTerms }) => {
  const newQuery = query.replace(/ /g, '+')
  if (!searchTerms) {
    return axios.get(`${baseUrl}search?term=${newQuery}&entity=musicVideo`)
  } else {
    const mappedSearchTerms = searchTerms.map(searchTerm => {
      return `attribute=${searchTerm}Term&`
    })
    const joinedMappedSearch = mappedSearchTerms.join('')
    return axios.get(
      `${baseUrl}search?term=${newQuery}&${joinedMappedSearch}entity=musicVideo`
    )
  }
}

export const getSingleVideo = videoId => {
  return axios.get(`${baseUrl}lookup?id=${videoId}`)
}

export const getLikedVideos = likedVideosDisplay => {
  console.log(likedVideosDisplay)
}

