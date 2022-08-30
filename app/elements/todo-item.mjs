export default function TodoItem({ html, state }) {
  const { attrs } = state
  const { id, label } = attrs

  const checked = Object.keys(attrs).includes('checked') ? 'checked' : ''

  return html`
    <style>
      input {
        padding-right: 1rem;
      }
    </style>
    <label>
      <input type="checkbox" name="enhanced-todos" id=${id} ${checked} />
      ${label}
    </label>
  `
}
