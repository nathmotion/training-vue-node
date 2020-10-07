import axios from 'axios'

export default class TaskService {
  constructor({ taskApiHost }) {
    this.apiHost = taskApiHost
  }

  get api() {
    return axios.create({
      baseURL: this.apiHost
    })
  }

  async getAll() {
    const res = await this.api.get('/')
    return res.data
  }

  async add(task) {
    const res = await this.api.post('/', task)
    return res.data
  }

  async delete(id) {
    const res = await this.api.delete(`/${id}`)
    return res.data
  }
}
