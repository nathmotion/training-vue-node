import { Task } from '@/models'
import axios from 'axios'

interface CtorOptions {
  taskApiHost: string
}

export default class TaskService {
  private apiHost: string

  constructor({ taskApiHost }: CtorOptions) {
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

  async add(task: Task) {
    const res = await this.api.post('/', task)
    return res.data
  }

  async delete(id: number) {
    const res = await this.api.delete(`/${id}`)
    return res.data
  }
}
