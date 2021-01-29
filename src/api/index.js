const url = 'https://covid19-brazil-api.now.sh/api/reports/v1'

// const fetchAPI = async () => {
//   const response = await fetch(url, ['GET'])

//   if (!response.ok) {
//     const message = `Ocorreu um erro ao consulta a API: ${response.status}`
//     throw new Error(message)
//   }

//   const data = await response.json()
//   return data
//   // console.log(data)
// }

// fetchAPI().catch(error => error.message)

async function fetchMoviesBadStatus() {
  const response = await fetch(url)

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`
    throw new Error(message)
  }

  const movies = await response.json()
  return movies
}

fetchMoviesBadStatus().catch(error => {
  error.message // 'An error has occurred: 404'
})
