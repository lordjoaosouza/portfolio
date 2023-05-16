import React from 'react'
import {
  SiLinux,
  SiDocker,
  SiPython,
  SiDjango,
  SiPandas,
  SiNumpy,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiMariadb,
  SiSqlite,
  SiCplusplus,
  SiArduino,
  SiGnubash,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

interface StackProps {
  icon: React.ReactElement
  text: string
}

const stacksLangs: StackProps[] = [
  {
    icon: <SiPython />,
    text: 'Python',
  },
  {
    icon: <SiJavascript />,
    text: 'JavaScript',
  },
  {
    icon: <SiTypescript />,
    text: 'TypeScript',
  },
  {
    icon: <FaJava />,
    text: 'Java',
  },
  {
    icon: <SiCplusplus />,
    text: 'C++',
  },
  {
    icon: <SiGnubash />,
    text: 'ShellScript',
  },
]

const stacksTechs: StackProps[] = [
  {
    icon: <SiLinux />,
    text: 'Linux',
  },
  {
    icon: <SiDocker />,
    text: 'Docker',
  },
  {
    icon: <SiDjango />,
    text: 'Django',
  },
  {
    icon: <SiPandas />,
    text: 'Pandas',
  },
  {
    icon: <SiNumpy />,
    text: 'NumPy',
  },
  {
    icon: <SiReact />,
    text: 'React',
  },
  {
    icon: <SiNextdotjs />,
    text: 'Next.js',
  },
  {
    icon: <SiPrisma />,
    text: 'Prisma',
  },
  {
    icon: <SiPostgresql />,
    text: 'PostgreSQL',
  },
  {
    icon: <SiMariadb />,
    text: 'MariaDB',
  },
  {
    icon: <SiSqlite />,
    text: 'SQLite',
  },
  {
    icon: <SiArduino />,
    text: 'Arduino',
  },
]

const Stacks = () => {
  return (
    <div
      className='flex flex-col items-center justify-center text-white text-center m-20 text-lg sm:text-xl'
      id='stacks'
    >
      <div className='flex flex-col items-center'>
        <h2 className='font-bold'>Languages I Know</h2>
        <div className='grid grid-rows-2 gap-3 sm:gap-4 grid-flow-col sm:grid-rows-1'>
          {stacksLangs.map((stack) => (
            <div key={stack.text} className='mt-6 flex flex-col items-center'>
              {React.cloneElement(stack.icon, {
                className: 'w-7 h-7 sm:w-9 sm:h-9 hover:text-nav_btn_hov',
              })}
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center mt-12'>
        <h2 className='font-bold'>Technologies I Use</h2>
        <div className='grid grid-rows-3 gap-3 sm:gap-4 grid-flow-col sm:grid-rows-1'>
          {stacksTechs.map((stack) => (
            <div key={stack.text} className='mt-6 flex flex-col items-center'>
              {React.cloneElement(stack.icon, {
                className: 'w-7 h-7 sm:w-9 sm:h-9 hover:text-nav_btn_hov',
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stacks
