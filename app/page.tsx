import { Checkmark } from './checkmark';

export default function Home() {
  return (
    <div className="pt-0 px-8 flex flex-col items-center">
      <main className="pt-16 px-0 flex flex-col justify-center">
        <h1 className=" font-bold tracking-tight text-6xl text-center leading-relaxed m-0">
          Welcome to <a className="text-[#0070f3]" href="https://nextjs.org">Next.js 13</a> Starter
        </h1>

        <section>
          <p className="text-2xl text-center py-8">Includes the following:</p>
          <ul className="space-y-1 max-w-md list-inside text-lg">
            <li className='flex items-center'>
              <Checkmark /> Next.js 13 (with use of the new app directory)
            </li>
            <li className='flex items-center'>
              <Checkmark /> Tailwind CSS 3.2</li>
            <li className='flex items-center'>
              <Checkmark /> Typescript</li>
            <li className='flex items-center'>
              <Checkmark /> ESLint</li>
          </ul>
        </section>

        <section className="flex justify-center">
          <a className="ml-6å flex items-center mt-24 w-fit cursor-pointer text-blue-600 font-light hover:scale-105" href="https://github.com/RBeerDevelopment/ts-nextjs-13-tailwind-starter" >
            <span className="text-lg text-center">Github Repository</span>
            <svg className="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" /></svg>
          </a>
        </section>
      </main>

      <footer className="flex flex-col mt-12 pt-8 px-0 border-t border-t-[#eaeaea] items-center w-full absolute bottom-8">
        <p>
          Created {new Date().getFullYear()} by {' '}
          <a
            href="https://robin.beer/"
            target="_blank"
            className='text-blue-600 font-bold' rel="noreferrer"
          >
            Robin Beer
          </a>
        </p>

      </footer>
    </div>
  );
}
