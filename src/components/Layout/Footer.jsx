const Footer = () => {
  return (
    <footer className="bg-card-light dark:bg-card-dark border-t border-gray-200 dark:border-slate-700 py-6">
      <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
        <p>@{new Date().getFullYear()} DA Product. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer