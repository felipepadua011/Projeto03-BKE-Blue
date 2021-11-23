const Api = {
  apiUrl: 'https://projeto3-imoveis-blue.herokuapp.com/casas',
  fetchGetAll: () => fetch(`${Api.apiUrl}/listall`),
  fetchGetById: id => fetch(`${Api.apiUrl}/listid/${id}`),
  fetchPost: (casa) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(casa)
    })
  },
  fetchPut: (casa, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(casa)
    })
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: 'DELETE'
    })
  }
}

export default Api;