import { Task } from '@/models'
import taskService from '@/services'
import { onMounted, ref } from 'vue'

const taskFeature = () => {
  const tasks = ref<Task[]>([])
  const task: Task = { label: '' }

  const invalidLabel = (): boolean => {
    return task.label === ''
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

  const resetTask = () => {
    task.label = ''
  }
  onMounted(getTaskList)

  return {
    task,
    tasks,
    invalidLabel,
    deleteTask,
    addTask,
    getTaskList,
    resetTask
  }
}
export default taskFeature
