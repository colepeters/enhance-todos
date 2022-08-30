export default function TodosList({ html, state = {} }) {
  const { store = {} } = state
  const { todos = [] } = store

  const items = todos.map(
    (todo) => `
      <todo-item
        id=${todo.id}
        label=${todo.label}
        checked=${todo.checked}
      ></todo-item>
    `
  )

  return html`${items.join('')}`
}
