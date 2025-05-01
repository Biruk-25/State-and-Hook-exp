// import React, { useContext, useState, createContext } from 'react';

// // Create a Context
// const ThemeContext = createContext();

// const App = () => {
//   // State to manage theme
//   const [theme, setTheme] = useState('light');

//   // Toggle theme function
//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   return (
//     // Provide theme value to all components in the tree
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
//         <h1>Theme App</h1>
//         <ThemeToggle />
//         <Content />
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// // Component to toggle theme
// const ThemeToggle = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
//     </button>
//   );
// };

// // Component that consumes the theme
// const Content = () => {
//   const { theme } = useContext(ThemeContext);

//   return <p>This is displayed in {theme} mode.</p>;
// };

// export default App;