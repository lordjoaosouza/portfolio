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
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import React from 'react'

interface StackProps {
  icon: React.ReactElement
  text: string
}

const stacksLangs = [
  {
    icon: <SiPython />,
    text: 'Python',
  },
  {
    icon: <SiDjango />,
    text: 'Django',
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
]

const stacksTechs = [
  {
    icon: <SiLinux />,
    text: 'Linux',
  },
  {
    icon: <SiDocker />,
    text: 'Docker',
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

export default function Stacks() {
  return (
    <div className='flex flex-col items-center justify-center text-white m-20' id={'stacks'}>
      <div className='flex flex-col items-center'>
        <h2 className='font-bold text-xl'>Languages I Know</h2>
        <div className='flex'>
          {stacksLangs.map((stack, index) => (
            <div
              key={stack.text}
              className={`mt-6 flex flex-col items-center ${
                index !== stacksLangs.length - 1 ? 'mr-6' : ''
              }`}
            >
              {React.cloneElement(stack.icon, { className: 'w-6 h-6 mb-1' })}
              <span>{stack.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center mt-12'>
        <h2 className='font-bold text-xl'>Technologies I Use</h2>
        <div className='flex'>
          {stacksTechs.map((stack, index) => (
            <div
              key={stack.text}
              className={`mt-6 flex flex-col items-center ${
                index !== stacksTechs.length - 1 ? 'mr-6' : ''
              }`}
            >
              {React.cloneElement(stack.icon, { className: 'w-6 h-6 mb-1' })}
              <span>{stack.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
