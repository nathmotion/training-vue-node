import { Task } from '@/models'
import taskService from '@/services'
import { onMounted, Ref, ref, reactive } from 'vue'

interface TaskFeature {
  task: Task
  tasks: Ref<Task[]>
  getTaskList: () => void
  addTask: (task: Task) => void
  deleteTask: (id: number) => void
  resetTask: () => void
  invalidLabel: () => boolean
}

const taskFeature = (): TaskFeature => {
  const task = reactive({ label: '' })
  const tasks = ref<Task[]>([])

  const invalidLabel = (): boolean => {
    return task.label === ''
  }

  const resetTask = () => {
    task.label = ''
  }

  const getTaskList = async () => {
    tasks.value = await taskService.getAll()
  }
  const addTask = async (newTask: Task) => {
    tasks.value = await taskService.add(newTask)
  }

  const deleteTask = async (id: number) => {
    tasks.value = await taskService.delete(id)
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
export default taskFeature
