import { useGlobalState } from '../store'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsCheck2Circle } from 'react-icons/bs'

const Alert = () => {
  const [alert] = useGlobalState('alert')
  const closeNav = () => {
        document.getElementById("overlay").style.display = "none";
  }

  return (
    <div id="overlay"
      className={`fixed top-0 left-0 w-screen h-screen
      flex items-center justify-center bg-black 
      bg-opacity-50 transform transition-transform
      duration-300 ${alert.show ? 'scale-100' : 'scale-0'}`}
    >
      <div
        className="flex flex-col justify-center items-center
        bg-[#151c25] shadow-xl shadow-[#B2FF97] rounded-xl
        min-w-min py-3 px-10"
      >
        {alert.color == 'red' ? (
          <FaRegTimesCircle className="text-red-600 text-4xl" />
        ) : (
          <BsCheck2Circle className="text-green-600 text-4xl" />
        )}
        <p className="text-white my-3">{alert.msg}</p>
        <button className="cta-button my-4 connect-wallet-button border-solid text-[#B2FF97] w-40 h-12 border-2 border-[#B2FF97]" onClick={closeNav}>Close</button>
      </div>
    </div>
  )
}

export default Alert