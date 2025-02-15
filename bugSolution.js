```javascript
// app/layout.js
export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}

// app/page.js
export default function Home() {
  return (
    <div>Hello world!</div>
  );
}
```