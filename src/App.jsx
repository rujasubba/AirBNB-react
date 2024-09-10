import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import HeroSection from './components/heroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeroSection />
    </div>
        
  )
}

export default App
