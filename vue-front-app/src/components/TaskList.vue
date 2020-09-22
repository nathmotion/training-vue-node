<template>
  <div id="task-list">
    <p v-if="tasks.length < 1" class="empty-table task-item"> No task found!</p>
    <ul v-else class="list-task">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <div class="task-part-left"><input type="checkbox" @change="$emit('complete-task',task)"/>
          {{ task.label }}
        </div>
        <div class=" task-part-right">
          <button @click="$emit('delete-task', task.id)">X</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "task-list",
  data() {
    return {}
  },
  props: {
    tasks: Array,
  }
}
</script>

<style scoped>
#task-list {
  width: 50%;
}

.list-task {
  width: 100%;
  margin-top: 21px;

}

.empty-table {
  padding: 25px;
  margin-top: 21px;

}

ul.list-task {
  list-style-type: none;
  padding: 0;
}

li.task-item {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.task-part-left {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.task-item {
  background-color: #FFFFFF;
  border-radius: 10px;

}
</style>