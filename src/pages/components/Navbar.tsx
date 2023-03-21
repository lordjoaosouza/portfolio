import { ReactNode } from 'react'
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react'
import { IoMdClose, IoMdMenu, IoMdMoon, IoMdSunny } from 'react-icons/io'

const Links = ['About Me', 'Projects', 'Contact']

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    fontSize={'sm'}
    fontWeight={'bold'}
    color={useColorModeValue('white', 'black')}
    _hover={{
      textDecoration: 'none',
      color: useColorModeValue('black', 'white'),
      bg: useColorModeValue('white', 'black'),
    }}
    href={'#'}
  >
    {children}
  </Link>
)

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('black', 'white')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            width={10}
            icon={isOpen ? <IoMdClose /> : <IoMdMenu />}
            aria-label={'Open Menu'}
            display={{ base: 'inline-flex', md: 'none' }}
            bg={useColorModeValue('black', 'white')}
            color={useColorModeValue('white', 'black')}
            _hover={{
              color: useColorModeValue('black', 'white'),
              bg: useColorModeValue('white', 'black'),
            }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box fontSize={'md'} fontWeight={'bold'} color={useColorModeValue('white', 'black')}>
              João Souza
            </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>

          <IconButton
            size={'md'}
            width={10}
            icon={colorMode === 'light' ? <IoMdMoon /> : <IoMdSunny />}
            onClick={toggleColorMode}
            aria-label={'Toggle Color Mode'}
            borderRadius={0}
            bg={useColorModeValue('black', 'white')}
            color={useColorModeValue('white', 'black')}
            _hover={{
              color: useColorModeValue('black', 'white'),
              bg: useColorModeValue('white', 'black'),
            }}
          />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}
