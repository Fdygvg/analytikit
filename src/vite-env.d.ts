/// <reference types="vite/client" />

// For CSS modules
declare module '*.css';

// For image imports
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.svg' {
  const value: string;
  export default value;
}