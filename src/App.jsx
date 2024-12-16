import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='min-h-screen grid grid-rows-[1fr_auto]'>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App