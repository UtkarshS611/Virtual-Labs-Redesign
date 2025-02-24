import { Input } from '@/components/ui/input'
import React from 'react'

const Search: React.FC = () => {
  return (
    <div className='rounded-md border relative h-fit'>
        <Input className='border-none shadow-none text-gray-600 h-8 bg-gray-100 dark:bg-[#232323]' placeholder='Search...'/>
        <div className='text-muted-foreground text-[8px] bg-gray-200 p-1 rounded w-fit border-[0.5px] absolute right-1 top-[50%] translate-y-[-50%] border-black/30 dark:bg-white/10 dark:border-white/10'>
            CTRL  K
        </div>
    </div>
  )
}

export default Search