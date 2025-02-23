import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram,faLinkedin,faSquareYoutube,faTiktok } from "@fortawesome/free-brands-svg-icons"

function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-4"> 
      <h1 className='text-4xl font-bold text-chocolate '>Thian</h1>
      <a href="https://www.instagram.com/thian_pouse" target="_blank" className="flex items-center space-x-4 p-2">
        <FontAwesomeIcon icon={faInstagram} size='2x' className='text-4xl text-gray-500 hover:text-[#c32aa3]'/>
      </a>
      <a href="https://www.linkedin.com/in/thian13/" target="_blank" className="flex items-center space-x-4 p-2">
        <FontAwesomeIcon icon={faLinkedin} size='2x' className='text-4xl text-gray-500 hover:text-[#0a66c2] '/>
      </a>
      <a href="https://www.youtube.com/@thian_pouse" target="_blank" className="flex  items-center space-x-4 p-2">
        <FontAwesomeIcon icon={faSquareYoutube} size='2x' className='text-4xl text-gray-500 hover:text-[#ff0000]'/>
      </a>
      <a href="https://www.tiktok.com/@t.pouse" target="_blank" className="flex items-center space-x-4 p-2">
        <FontAwesomeIcon icon={faTiktok} size='2x' className='text-4xl text-gray-500 hover:text-black'/>
      </a>
    </div>
  )
}
export default App
