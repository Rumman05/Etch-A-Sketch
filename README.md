# Etch-A-Sketch

A fun, interactive web-based drawing application inspired by the classic Etch-A-Sketch toy. Create colorful pixel art with customizable grid sizes and intuitive mouse controls.

## Features

- **Dynamic Grid Creation**: Generate drawing grids from 1x1 up to 64x64
- **Colorful Drawing**: Each pixel is painted with a random color when drawn
- **Dual Mouse Controls**: 
  - Left-click or drag to draw with random colors
  - Right-click or drag to erase (paint white)
- **Grid Reset**: Clear the entire canvas with one button
- **Responsive Design**: Clean, centered layout with helpful instructions
- **Drag Prevention**: Smooth drawing experience without unwanted selections

## How to Use

1. **Create a Grid**: Click the "Create a Grid!" button and enter a size (1-64)
2. **Start Drawing**: 
   - **Left-click** or **left-click and drag** to draw with random colors
   - **Right-click** or **right-click and drag** to erase pixels
3. **Reset Canvas**: Use the "Reset" button to clear the entire grid
4. **Create New Grid**: Generate a new grid size anytime

## Installation

1. Clone or download the project files
2. Ensure all three files are in the same directory:
   - `index.html`
   - `script.js`
   - `styles.css`
3. Open `index.html` in your web browser

## File Structure

```
etch-a-sketch/
├── index.html      # Main HTML structure
├── script.js       # Interactive functionality
└── styles.css      # Styling and layout
```

## Technical Details

### Grid System
- Uses CSS Flexbox for responsive grid layout
- Grid squares are dynamically generated with JavaScript
- CSS custom properties (`--grid-size`) for flexible sizing

### Drawing Mechanics
- **Mouse Event Handling**: Tracks mousedown/mouseup states for smooth drawing
- **Color Generation**: Random hex colors using `Math.random()`
- **Event Prevention**: Disables context menu and drag behaviors for better UX

### Browser Compatibility
- Works in all modern browsers
- Uses standard JavaScript (ES5+)
- No external dependencies

## Customization

### Modify Grid Size Limit
```javascript
// In script.js, change the maximum grid size
while (num < 1 || num > 64) { // Change 64 to your preferred max
```

### Change Drawing Colors
```javascript
// Replace the random color function with custom colors
const getRandomColor = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff']; // Custom color palette
    return colors[Math.floor(Math.random() * colors.length)];
}
```

### Adjust Grid Container Size
```css
/* In styles.css */
#container {
    width: 750px;  /* Adjust width */
    height: 750px; /* Adjust height */
}
```

## Contributing

Feel free to fork this project and submit pull requests for improvements such as:
- Color palette selection
- Brush size options
- Save/load functionality
- Additional drawing tools

## License

This project is open source and available under the [MIT License](LICENSE).

## Demo

Open `index.html` in your browser to start drawing immediately!

---

*Enjoy creating pixel art with your digital Etch-A-Sketch!*
