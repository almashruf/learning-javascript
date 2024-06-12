Adding JavaScript to an HTML document can be done in several ways. Here are the most common methods:

### 1. Inline JavaScript

This method involves placing JavaScript code directly within an HTML element's attribute.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inline JavaScript Example</title>
</head>
<body>
    <button onclick="alert('Hello, World!')">Click Me</button>
</body>
</html>
```

### 2. Internal JavaScript

This method involves placing JavaScript code within a `<script>` tag inside the HTML document, usually within the `<head>` or at the end of the `<body>`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Internal JavaScript Example</title>
    <script>
        function showMessage() {
            alert('Hello, World!');
        }
    </script>
</head>
<body>
    <button onclick="showMessage()">Click Me</button>
</body>
</html>
```

### 3. External JavaScript

This method involves placing JavaScript code in a separate file and linking to it from the HTML document.

**HTML File:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>External JavaScript Example</title>
    <script src="script.js"></script>
</head>
<body>
    <button onclick="showMessage()">Click Me</button>
</body>
</html>
```

**JavaScript File (script.js):**

```javascript
function showMessage() {
    alert('Hello, World!');
}
```

### Example Explanation

- **Inline JavaScript:** The `onclick` attribute of the `<button>` element contains JavaScript code that runs when the button is clicked.
- **Internal JavaScript:** The `<script>` tag within the HTML contains JavaScript code that defines a function. The `onclick` attribute of the `<button>` element calls this function when the button is clicked.
- **External JavaScript:** The JavaScript code is placed in an external file (`script.js`). The `<script>` tag with the `src` attribute in the HTML document links to this external file. The function defined in the external file is called when the button is clicked.

### Best Practices

- Use **external JavaScript** for better maintainability and separation of concerns.
- Use **internal JavaScript** for quick scripts or when working on small projects.
- Avoid **inline JavaScript** to keep HTML and JavaScript separate, improving readability and maintainability.

By following these methods, you can efficiently add JavaScript to your HTML documents and enhance the functionality of your web pages.
