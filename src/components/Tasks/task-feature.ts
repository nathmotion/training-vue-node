import { onMounted, reactive, ref, Ref } from 'vue'

import { Task } from '@/models'
import TaskService from '@/services/task.service'

export interface TaskFeature {
  task: Task
  tasks: Ref<Task[]>
  getTaskList: () => void
  addTask: (task: Task) => void
  deleteTask: (id: number) => void
  resetTask: () => void
  invalidLabel: () => boolean
}

const taskFeature = (service: TaskService): TaskFeature => {
  const task = reactive({ label: '' })
  const tasks = ref<Task[]>([])

  const invalidLabel = (): boolean => {
    return task.label === ''
  }

  const resetTask = () => {
    task.label = ''
  }

  const getTaskList = async () => {
    tasks.value = await service.getAll()
  }
  const addTask = async (newTask: Task) => {
    tasks.value = await service.add(newTask)
  }

  const deleteTask = async (id: number) => {
    tasks.value = await service.delete(id)
  }

  onMounted(getTaskList)

  return {
    task,
    tasks,
    invalidLabel,
    getTaskList,
    addTask,
    deleteTask,
    resetTask
  }
}

export const createTaskFeature = (taskService: TaskService): TaskFeature => taskFeature(taskService)
export default taskFeature
