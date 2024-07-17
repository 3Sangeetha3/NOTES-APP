import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NoteCard from '../../components/Cards/NoteCard'
import { MdAdd } from 'react-icons/md'

function Home() {
  return (
    <>
      <Navbar />

      <div className='container mx-auto'>
        <div className="grid grid-cols-3 gap-4 mt-8">
        <NoteCard 
          title="Meething on 7th August" 
          date="3rd Aug 24"
          content="Meething on 7th august Meething Meething on 7th August"
          tags="#Meetings"
          isPinned={true}
          onEdit={()=>{}}
          onDelete={()=>{}}
          onPinNote={()=>{}}
        />
        </div>
      </div>

      <button className='w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10' onClick={() => {}}>
        <MdAdd className='text-[32px] text-white' />
      </button>
    </>
  )
}

export default Home