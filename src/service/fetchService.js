
const baseUrl = `https://picsum.photos/v2/list`

export const fetchData = async(page=1, limit=20) => {
  return window.fetch(baseUrl+`?page=${page}&limit=${limit}`)
    .then(res => res.text())
    .then(resTxt => JSON.parse(resTxt))
    .catch(err => {
      console.log('fetch error: ', err)
    }
  )
}
