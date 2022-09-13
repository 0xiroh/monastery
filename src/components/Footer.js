import { Link } from "react-router-dom"
import { Icon } from "react-icons-kit";
import { twitter } from "react-icons-kit/ikons/twitter";
import { instagram } from "react-icons-kit/ikons/instagram";
import { facebook_1 } from "react-icons-kit/ikons/facebook_1";
import { telegram } from 'react-icons-kit/icomoon/telegram'

function Footer() {
  return (
          <footer className="my-10 flex-col justify-center bg-[rgba(255,255,255, 0.5)]">
              <section className="grid grid-cols-2 gap-x-10 sm:grid-cols-4 h-40 items-center">
                  <Link to='/' className="my-10 ml-10 sm:ml-6 col-span-2"><img src="./images/mstFooter.png" className="h-8 "/></Link>
                  <ul className="text-left mx-auto">
                      <li className="text-white text-lg mb-2 font-bold">Sections</li>
                      <li className="text-white hover:underline cursor-pointer"><a href="#Roadmap">Roadmap</a></li>
                      <li className="text-white hover:underline  cursor-pointer">How to buy</li>
                      <li className="text-white hover:underline  cursor-pointer invisible">How to buy</li>
                  </ul>
                  <ul className="text-left mx-auto">
                      <li className="text-white text-lg mb-2 font-bold">Company</li>
                      <li className="text-white hover:underline cursor-pointer"><Link to="/terms">{`Terms & Conditions`}</Link></li>
                      <li className="text-white hover:underline cursor-pointer"><a href="https://monasteryclothing.com/pages/declaracion-de-privacidad">Privacy Policy</a></li>
                      <br></br>
                  </ul>
              </section>
              
              <section className="flex flex-row items-center justify-center gap-8 mt-32 sm:my-16">
                <a href="https://twitter.com/Monastery_NFT">
                    <Icon size={26} icon={twitter} className=" text-[#FFFFFF]"/>
                </a>
                <a href="https://www.facebook.com/MonasteryCouture/">
                    <Icon size={26} icon={facebook_1} className=" text-[#FFFFFF]"/>
                </a>
                <a href="https://t.me/+mcYZXyu0WSAxZjY5">
                    <Icon size={32} icon={telegram} className=" text-[#FFFFFF]"/>
                </a>
                <a href="https://www.instagram.com/monasterycouture/">
                    <Icon size={26} icon={instagram} className=" text-[#FFFFFF]"/>
                </a>

              </section>
              <section className="bg-black flex my-28 justify-center h-20 items-center">
                  <h1 className="text-white">Powered by Centra</h1>
                  <img src="./images/centra.svg" alt="Centra Logo" className="h-10"/>
              </section>
              

          </footer>
  )
}

export default Footer