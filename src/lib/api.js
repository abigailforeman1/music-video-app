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

export const getMapBoxCoords = place => {
  return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYWJpZ2FpbGZvcmVtYW4xIiwiYSI6ImNrNWk4emt0ejBiNzczcG83dGpvODZhaHYifQ.RfDd-C9SWG2rtBFJ9Wgo5g`)
}
