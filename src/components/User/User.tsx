import { useParams } from "react-router"

export default function User() {
    const { userId } = useParams();
  return (
    <div>User : {userId}</div>
  )
}
