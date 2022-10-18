import { Link } from "react-router-dom"

const Home = ({ pokemons, setText }: any) => {
  return (
    <>
      <div className='w-full flex justify-center'>
        <input
          type='text'
          onChange={(event) => setText(event.target.value)}
          placeholder='Enter Pokemeon here'
          className='mt-10 p-2 border-blue-500 border-2' />
      </div>
      <div className='mt-10 p-4 flex flex-wrap'>
        {
          pokemons && pokemons.map((val: any, idx: number) => {
            return (
              <div className='ml-4 text-2xl text-blue-400'>
                <Link to={`/about/${val?.idx}`} key={idx}>
                  {val?.name}
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Home