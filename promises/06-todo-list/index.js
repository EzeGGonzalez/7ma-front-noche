const loadData = () => {
  axios
    .get('https://tp3-server-mlssecjyqf.now.sh/api/todos')
    .then(res => {
      const tasks = res.data;

      tasks.forEach(t => {
        addToDoHTML(t);
      })
    })
}

const newTodo = (e) => {
  e.preventDefault();

  const todo = {
    completada: false,
    texto: document.getElementById('todo-text').value
  }

  axios
    .post('https://tp3-server-mlssecjyqf.now.sh/api/todos', todo)
    .then(res => {
      const todo = res.data;
      addToDoHTML(todo);
    })
}

const deleteTodo = id => {
  axios
    .delete(`https://tp3-server-mlssecjyqf.now.sh/api/todos/${id}`)
    .then(res => {
      document.getElementById(`todo-${id}`).remove();
    })
}

const addToDoHTML = (todo) => {
  const tareaHTML = `<li id="todo-${todo.id}">${todo.texto} - ${todo.completada ? 'completada' : 'pendiente'} - <button onclick="deleteTodo(${todo.id})">X</button></li>`;
  document.getElementById('tasks').innerHTML += tareaHTML;
}

document.getElementById('new-todo').onsubmit = newTodo;

loadData();