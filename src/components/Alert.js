import { useGlobalState } from '../store'
import { Icon } from 'react-icons-kit';
import { ic_check_circle_outline } from 'react-icons-kit/md/ic_check_circle_outline';
import { ic_error_outline_outline } from 'react-icons-kit/md/ic_error_outline_outline';

const Alert = () => {
  const [alert] = useGlobalState('alert')
  const [tx] = useGlobalState('tx')
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
        {alert.color === 'red' ? (
          <Icon icon={ic_error_outline_outline} size={36} className="text-red-600 text-4xl" />
        ) : (
          <Icon icon={ic_check_circle_outline} size={36} className="text-green-600 text-4xl" />
        )}
        <a className='text-white hover:text-[#B2FF97] cursor-pointer my-3 underline' href={tx}>{alert.msg}</a>
        
        <button className="cta-button my-8 connect-wallet-button border-solid text-[#B2FF97] w-40 h-12 border-2 border-[#B2FF97]" onClick={closeNav}>Close</button>
      </div>
    </div>
  )
}

export default Alert