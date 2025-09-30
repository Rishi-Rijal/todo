import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userInfo } from "./api/user.api"
import { login, logout } from "./features/login/loginSlice";


async function App() {
  const dispatch = useDispatch();

  const checkLogin = async () => {
    const result = await userInfo()
    try {
      dispatch(login(result.data))
    } catch (error) {
      dispatch(logout())
    }
  }

  useEffect(() => {
    checkLogin
  }, [])


  return (
    <div>

    </div>
  )
}

export default App
