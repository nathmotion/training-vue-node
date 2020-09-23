<template>
  <div id="task-list">
    <p v-if="tasks.length < 1" class="empty-table task-item">No task found!</p>
    <ul v-else class="list-task">
      <li v-for="task in tasks" :key="task.id" class="task-item">
        <div class="task-part-left">
          <label>{{ task.label }}</label>
        </div>
        <div class=" task-part-right">
          <i class="material-icons button-delete" @click="$emit('delete-task', task.id)">delete</i>
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
  width: 33%;
}

.list-task {
  width: 100%;
  margin-top: 21px;
}

.empty-table {
  padding: 25px;
  margin-top: 21px;
}

.button-delete {
  color: #ff2929;
  cursor: pointer;
  margin-top: 2px;
  border-radius: 4px;
}

ul.list-task {
  list-style-type: none;
  padding: 0;
}

li.task-item {
  padding: 10px 20px 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-family: 'Montserrat', sans-serif;
}

.task-part-left {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  text-align: left;
}

.task-part-left label {
  cursor: pointer;
  margin-left: 8px;
}

.task-item {
  background-color: #FFFFFF;
  border-radius: 10px;
}
</style>