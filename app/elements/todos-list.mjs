export default function TodosList({ html, state = {} }) {
  const { store = {} } = state
  const { todos = [] } = store

  return todos.map(
    (todo) =>
      html`
        <todo-item
          id=${todo.id}
          label=${todo.label}
          checked=${todo.checked}
        ></todo-item>
      `
  )
}
