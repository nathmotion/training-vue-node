import taskService from '@/services'
import { createTaskFeature } from '@/components/Tasks/task-feature'

const taskFeatureFn = createTaskFeature(taskService)
