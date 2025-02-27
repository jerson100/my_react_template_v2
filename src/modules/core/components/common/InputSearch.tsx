import { InputGroup } from '../chakraui/input-group'
import { LuSearch } from 'react-icons/lu'
import { InputProps, Kbd } from '@chakra-ui/react'
import { FC } from 'react'
import { Input } from '../chakraui/input'

interface InputSearchProps extends InputProps {}

const InputSearch: FC<InputSearchProps> = (props) => {
  return (
    <InputGroup w={'100%'} flex="1" startElement={<LuSearch />} endElement={<Kbd>⌘K</Kbd>}>
      <Input {...props} />
    </InputGroup>
  )
}

export { InputSearch }
