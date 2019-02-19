const qs = Qs

class PostManager {
  constructor(options) {
    this.$http = axios.create({
      baseURL: options.baseURL
    })

    this.dataMethodDefaults = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      transformRequest: [function (data) {
        return qs.stringify(data)
      }]
    }
  }

  getPostsPageableList(page = 0, size = 20) {
    return this.$http.get(`/posts?page=${page}&size=${size}`)
  }

  getPostsFullList() {
    return this.$http.get(`/posts`)
  }

  getPost(id) {
    if (!id) {
      return Promise.reject(new Error(`getPost：id(${id})無效`))
    }
    return this.$http.get(`/posts/${id}`)
  }

  createPost(data = {}) {
    if (!data || !Object.keys(data).length) {
      return Promise.reject(new Error('createPost：提交數據無效'))
    }
    return this.$http.post(`/posts`, data, { ...this.dataMethodDefaults })
  }

  updatePost(id, data = {}) {
    if (!data || !Object.keys(data).length) {
      return Promise.reject(new Error('updatePost：提交數據無效'))
    }
    return this.$http.put(`/posts/${id}`, data, { ...this.dataMethodDefaults })
  }

  deletePost(id) {
    if (!id) {
      return Promise.reject(new Error(`deletePost：id(${id})無效`))
    }
    return this.$http.delete(`/posts/${id}`)
  }
}

let postManager = new PostManager({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

postManager.getPostsFullList()
  .then(res => {
    console.log(res)
  })