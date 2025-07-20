import ThemeToggle from '../ThemeToggle'

const Header = () => {
  return (
    <header className="bg-card-light dark:bg-card-dark border-b border-gray-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primary-light dark:text-primary-dark">
          
          DA Product
        </h1>
        <ThemeToggle />
      </div>
    </header>
  )
}

export default Header