# DA- Dashboard Analytics

A modern-looking, static web app built with React.js, Vite, and Tailwind CSS that mimics the UI quality of contemporary AI product interfaces.

## Features

- Clean, modern design inspired by products like OpenAI, Notion, and Linear
- Dark/Light mode toggle with persistent preference
- Responsive layout that works on all device sizes
- Three main pages:
  - Landing page with hero section
  - Dashboard with metrics cards and charts
  - ChatGPT-like chat interface
- Smooth animations and transitions
- Proper component structure and code organization

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- Recharts for data visualization
- Framer Motion for animations
- React Icons
- React Router for navigation

## Setup Instructions

1. Clone the repository - (git clone https://github.com/Sangram46/Dashboard_Analytics.git)
2. Install dependencies:
    npm install
3. Run the development server:
    npm run dev

## Project Structure

<pre lang="bash"> ```bash src/ ├── assets/ │ └── (various images/icons) ├── components/ │ ├── Chat/ │ │ ├── ChatBubble.jsx │ │ ├── ChatHistory.jsx │ │ └── ChatInput.jsx │ ├── Dashboard/ │ │ ├── MetricCard.jsx │ │ ├── Navbar.jsx │ │ ├── Sidebar.jsx │ │ └── StatsChart.jsx │ ├── Layout/ │ │ ├── Footer.jsx │ │ └── Header.jsx │ └── ThemeToggle.jsx ├── contexts/ │ └── ThemeContext.jsx ├── pages/ │ ├── ChatPage.jsx │ ├── DashboardPage.jsx │ ├── LandingPage.jsx │ └── NotFoundPage.jsx ├── App.jsx ├── index.css └── main.jsx ``` </pre>

