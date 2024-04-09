import { ArrowRight } from 'lucide-react'
import Logo from '../assets/logo.png'
import { Selector } from './selector'

export function Header() {
  return (
    <header className="flex items-center justify-between px-3 py-2 bg-header">
      <img src={Logo} alt="Logo"  />
      <div className='flex items-center gap-10'>
        <Selector/>
        <ArrowRight className='size-7 text-white'/>
        <Selector/>
      </div>
    </header>
  )
}