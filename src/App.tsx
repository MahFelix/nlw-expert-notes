
import logo from './assets/Logo-nlw-expert.png'
import { NewNote } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'> 
      <img src={logo} alt='nlw-expert' /> 

      <form className='w-full '>
       <input 
       type="text" 
       placeholder='Busque em suas notas...'
       className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500' 
       
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 auto-rows-[250px] gap-6'>

    <NewNote  />
    <NoteCard date={new Date(2023, 4 , 1)} content="Hello World" />
    <NoteCard date={new Date()} content="Teste" />
    <NoteCard date={new Date()} content="HAHAHA" />
    <NoteCard date={new Date()} content="Fala MAFALDA" />
   
      </div>
    </div>
  ) 
}


