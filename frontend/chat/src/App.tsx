import { AuthProvider } from "./assets/Componentes/token/auth/authprovider";
import Routees from "./assets/Componentes/token/constRoutes/rouutes";


function App() {

  return (
    <AuthProvider>
      <Routees/>
    </AuthProvider>
  )
}

export default App;