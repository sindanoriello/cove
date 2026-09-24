import './App.css'
import heroImage from './assets/cove-hero.jpg';

function Hero() {
  return (
    <section
      className="relative min-h-[500px] bg-cover bg-center flex flex-col justify-center px-8"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-4xl font-serif text-ink">Cove</h1>
      <button className="text-ink">Log in</button>
    </section>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Hero />
  )
}

export default App
