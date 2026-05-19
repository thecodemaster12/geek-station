# How to Add More Features to the Tiptap Editor

Adding new formatting options (like Underline, Links, Images, etc.) to Tiptap follows a consistent 4-step pattern. Use this guide whenever you want to expand the editor's capabilities.

---

## The General Workflow

### Step 1: Install the Extension
Find the extension you need in the [Tiptap Documentation](https://tiptap.dev/extensions). Install it via npm.
Example (for Underline):
```bash
npm install @tiptap/extension-underline
```

### Step 2: Import and Register
Open `src/components/TextEditor.jsx`. Import the extension and add it to the `extensions` array inside the `useEditor` hook.

```javascript
import Underline from '@tiptap/extension-underline'

// ... inside TextEditor component
const editor = useEditor({
  extensions: [
    StarterKit,
    Underline, // Add it here
    TextAlign.configure({ ... }),
  ],
})
```

### Step 3: Add a Button to the MenuBar
Find a suitable icon from `react-icons/fa` and add a `<button>` to the `MenuBar` component. **IMPORTANT:** Always add `type="button"` to prevent the button from submitting the form if the editor is used inside a `<form>`.

```javascript
<button
  type="button"
  onClick={() => editor.chain().focus().toggleUnderline().run()}
  className={editor.isActive('underline') ? 'is-active' : ''}
>
  <FaUnderline />
</button>
```

---

## Common Extensions Examples

### 1. Underline
- **Package:** `@tiptap/extension-underline`
- **Command:** `editor.chain().focus().toggleUnderline().run()`
- **Active State:** `editor.isActive('underline')`

### 2. Link
- **Package:** `@tiptap/extension-link`
- **Configuration:** Usually requires `openOnClick: false`.
- **Logic:** Requires a prompt to ask the user for the URL.
```javascript
const setLink = () => {
  const url = window.prompt('Enter URL')
  if (url) {
    editor.chain().focus().setLink({ href: url }).run()
  }
}
```

### 3. Image
- **Package:** `@tiptap/extension-image`
- **Logic:**
```javascript
const addImage = () => {
  const url = window.prompt('Enter Image URL')
  if (url) {
    editor.chain().focus().setImage({ src: url }).run()
  }
}
```

### 4. Code Block (Syntax Highlighting)
- **Package:** `@tiptap/extension-code-block-lowlight`
- **Note:** Requires a library like `lowlight` for the actual highlighting logic.

---

## Tips for Success

1. **Check the Active State:** Always use `editor.isActive('extensionName')` to provide visual feedback (like changing the button color) so users know what formatting is applied.
2. **Chain Your Commands:** Always start with `editor.chain().focus()`. This ensures that after the user clicks a button, the cursor stays inside the editor area so they can keep typing immediately.
3. **Configure if Needed:** Some extensions (like `TextAlign` or `Link`) have a `.configure({})` method. Check the docs to see if you need to limit which tags they apply to or change their default behavior.
4. **Update the Display:** If you add a new "node" (like a Code Block or Image), make sure your display pages (`PostDetailsPage.jsx`) have the appropriate CSS to render them correctly.
