# Rich Text Editor Guide (Tiptap Implementation)

This guide explains how the Tiptap Rich Text Editor was integrated into the **geek-station** project. Tiptap was chosen because it is "headless" (giving us full control over the UI), modern, and highly extensible.

---

## 1. Installation & Setup

We installed three core packages:
- `@tiptap/react`: The React integration for Tiptap.
- `@tiptap/pm`: ProseMirror (the underlying engine).
- `@tiptap/starter-kit`: A bundle of standard extensions (Bold, Italic, Headings, Lists, etc.).
- `@tiptap/extension-text-align`: Extension for aligning text (Left, Center, Right, Justify).

**Commands used:**
```bash
npm install @tiptap/react @tiptap/pm @tiptap/starter-kit @tiptap/extension-text-align
```

---

## 2. File Breakdown

### `src/components/TextEditor.jsx`
This is the core component. It is divided into two main parts:

#### **A. The `MenuBar` Component (Internal)**
This defines the toolbar at the top.
- **Logic:** Uses `editor.isActive('type')` to highlight buttons when the cursor is on that type of content.
- **Actions:** Uses `editor.chain().focus().toggleX().run()` to apply formatting.
- **Icons:** Uses `react-icons/fa` for a professional look.

#### **B. The `TextEditor` Component (Exported)**
- **`useEditor` hook:** Initializes the editor.
  - `extensions`: We use `StarterKit` which handles paragraphs, h1-h6, lists, etc.
  - `onUpdate`: This is crucial. It calls the `onChange` prop whenever the user types, sending the content back as **HTML**.
- **`editorProps`**: We inject Tailwind classes directly into the editor area (`prose`) to handle basic spacing.

### `src/components/editor.css`
Since Tiptap is headless, it doesn't come with default styles for the *content*. This file ensures:
- **Lists:** `<ul>` and `<ol>` have proper bullets, numbers, and indentation.
- **Headings:** `<h1>`, `<h2>`, etc., have the correct font sizes.
- **Focus:** Removes the default browser outline when typing.
- **Placeholders:** (Optional) Styles for when the editor is empty.

### `src/Pages/CreatePostPage.jsx`
This shows how to use the editor in a real form.
- **State Management:** Uses `const [content, setContent] = useState('')`.
- **Integration:** The `TextEditor` component receives `content` and a `setContent` function via the `onChange` prop.
- **Submission:** The `content` state is a string of HTML, ready to be sent to your backend or `db.json`.

---

## 3. How to Customize

### Adding New Features (e.g., Underline or Links)
1. Install the extension: `npm install @tiptap/extension-underline`
2. Import it in `TextEditor.jsx`: `import Underline from '@tiptap/extension-underline'`
3. Add it to the `extensions` array in `useEditor`.
4. Add a button to the `MenuBar` using `editor.chain().focus().toggleUnderline().run()`.

### Changing Styles
To change how the text looks inside the editor (e.g., making H1s bigger or changing font colors):
- Edit `src/components/editor.css`.
- Target the `.tiptap` class (e.g., `.tiptap h1 { color: blue; }`).

### Changing the Toolbar Look
The toolbar uses standard Tailwind CSS classes. You can change the background, borders, or button hover effects in the `MenuBar` section of `TextEditor.jsx`.

---

## 4. Key Implementation Details

### Text Alignment
We added `@tiptap/extension-text-align` to support left, center, right, and justify alignment.
- **Configuration:** It is configured in `useEditor` to apply to `heading` and `paragraph` nodes.
- **Display:** Alignment works by adding inline CSS styles (e.g., `text-align: center`) to the HTML elements.

### Rendering HTML Content
Since Tiptap generates HTML, you must render it carefully in your display components:
- **Dangerously Set Inner HTML:** Use `dangerouslySetInnerHTML={{ __html: content }}` to render the string as actual HTML.
- **Styling with Prose:** Wrap the rendered content in a `div` with the `prose` class (from `@tailwindcss/typography`) to ensure headings and lists look correct.
  ```jsx
  <div className="prose prose-invert lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.content }} />
  ```

---

## 5. Key Sections to Remember

- **Getting HTML:** `editor.getHTML()` — Used in `onUpdate` to save data.
- **Checking State:** `editor.isActive('bold')` — Used to toggle button colors.
- **Chaining Commands:** `editor.chain().focus()...run()` — Always use this pattern for buttons to keep the focus inside the editor after clicking.
