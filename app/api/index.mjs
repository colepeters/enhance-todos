export async function get() {
  return {
    json: {
      todos: [
        { id: 0, label: 'My first todo', checked: false },
        { id: 1, label: 'My second todo', checked: false },
        { id: 2, label: 'My third todo', checked: false },
      ],
    },
  }
}
