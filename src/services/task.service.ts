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

  async getAll(): Promise<Task[]> {
    const res = await this.api.get<Task[]>('/')
    return res.data
  }

  async add(task: Task): Promise<Task[]> {
    const res = await this.api.post<Task[]>('/', task)
    return res.data
  }

  async delete(id: number): Promise<Task[]> {
    const res = await this.api.delete<Task[]>(`/${id}`)
    return res.data
  }
}
