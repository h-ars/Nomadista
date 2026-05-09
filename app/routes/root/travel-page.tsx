import { redirect } from 'react-router'

export async function clientLoader() {
  return redirect('/sign-in')
}

const TravelPage = () => {
  return (
    <div>travel-page</div>
  )
}

export default TravelPage