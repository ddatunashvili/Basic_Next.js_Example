# Basic Next.js Project

Welcome to the Next.js Project! This document provides a basic guide to understanding and using this Next.js application.

## 1. Project Overview

This Next.js project demonstrates various Next.js features including static generation, server-side rendering, and dynamic routing. The application is a sample blog or article-based site with components and pages designed to showcase these features.

## 2. Features

- **Static Generation**: Pre-renders pages at build time for improved performance.
- **Dynamic Routing**: Creates dynamic routes for individual articles.
- **Server-Side Rendering**: Fetches data server-side for individual pages.
- **API Routes**: Handles server-side logic and data fetching through API endpoints.
- **CSS Modules**: Provides scoped CSS for styling individual components.
- **Global Styles**: Applies global CSS for consistent styling across the application.

## 3. Installation

To set up the project on your local machine, follow these steps:

1. **Clone the Repository**

```bash
   # Clone repo
   git clone https://github.com/yourusername/basic_next.git
   # Go to folder
   cd basic_next
   # Install dependencies
   npm install
   # Run the development server
   npm run dev
   # Server is available at http://localhost:3000
```

## 4. Folder Structure

|-- pages
|   |-- _app.js
|   |--_document.js
|   |-- about.js
|   |-- api
|   |   |-- articles
|   |   |   |-- [id].js
|   |   |   `-- index.js
|   |-- article
|   |`-- [id]
|   |       `-- index.js
|`-- index.js

|-- components
|   |-- Article.js

|-- styles
|   |-- Article.module.css

|-- config
|   `-- index.js

|-- data.json
