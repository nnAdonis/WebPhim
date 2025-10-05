import {BrowserRouter, Routes, Route} from 'react-router'
import {Toaster,} from 'sonner' // hiên thị thông báo
import HomeLayout from '../src/layouts/HomeLayout'

function App() {
  return (
    <>
        <Toaster/>
        <BrowserRouter>
            <Routes>
                <Route path="/"
                       element={<HomeLayout/>}
                />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
