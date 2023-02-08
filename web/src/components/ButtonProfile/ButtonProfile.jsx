import * as Popover from '@radix-ui/react-popover';
import { User } from "phosphor-react";

function ButtonProfile() {

    const ProfileLinks = [
        {Name: 'Meus pedidos'},
        {Name: 'Minhas mensagens'},
        {Name: 'Meus cupons'},
        {Name: 'Serviços'},
    ]

    return (
      <div>
       <Popover.Root>
            <Popover.Trigger className="p-1">
                <User size={24}/>
            </Popover.Trigger>
            <Popover.Portal>
              <Popover.Content className="w-40 z-50 absolute -left-36 top-3 border border-slate-200 flex-col bg-white p-1 shadow-lg rounded-sm">
                <button className='w-full border-b border-zinc-300 h-8 mb-1 rounded-sm text-left pl-2 text-zinc-500 hover:text-black'>
                    Cadastrar/ Registrar
                </button>
                {ProfileLinks.map((ProfileLinks, index) => 
                <button key={index} className='w-full h-8 mb-1 rounded-sm text-left pl-2 text-zinc-500 hover:text-black'>
                    {ProfileLinks.Name}
                </button>
                )}
                <Popover.Arrow color='white' className='absolute -left-[70px] fill-slate-200'/>
              </Popover.Content>
            </Popover.Portal>
          </Popover.Root>
      </div>
    )
  }
  
  export default ButtonProfile