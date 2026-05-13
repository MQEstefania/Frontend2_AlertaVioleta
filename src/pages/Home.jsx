// Importar componentes
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Impacto from '../components/Impacto'
import Redes from '../components/Redes'
import Footer from '../components/Footer'

function Home() {

  return (

    <div>

      {/* Barra navegación */}
      <Navbar />

      {/* Banner principal */}
      <Hero />

      {/* Impacto */}
      <Impacto />

      {/* Redes */}
      <Redes />

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home