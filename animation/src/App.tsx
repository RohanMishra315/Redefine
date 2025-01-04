import Hero from "./components/Hero"

function App() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <section className="z-0 min-h-screen bg-blue-500" />
    </div>
  )
}

export default App