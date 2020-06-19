const baseUrl = 'http://localhost:3008';

export const HttpService = {
  getTodoList: (url) => {
    return fetch(`${baseUrl}${url}`).then((res) => res.json());
  },
  postListItem: (body) => {
    return fetch(`${baseUrl}/todos`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  },
  deleteItem: (id) => {
    return fetch(`${baseUrl}/todos/${id}`, {
      method: 'DELETE',
    });
  },
    putListItem: (id,body) => {
        return fetch(`${baseUrl}/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    },
};
