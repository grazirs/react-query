import { useSuperHeroesData } from "../hooks/useSuperHeroesData"
import { Link } from "react-router-dom"

export const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHeroesData()
  console.log({ isLoading, isFetching })
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>
      <button onClick={refetch}>Fetch heroes</button>
      {isLoading ? (<h2>Loading...</h2>) : data?.data.map(hero => {
        return (
          <div key={hero.id}>
            <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
          </div>
      )})}
    </>
  )
}