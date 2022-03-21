function Footer() {
  return (
          <footer className="my-10 flex-col">
              <section className=" grid grid-cols-2 h-40 justify-around items-center">
                  <img src="./images/logoFooter.png" className="col-span-2 my-10 ml-6"/>
                  <ul>
                      <li className="text-white">Sections</li>
                      <li className="text-white"><a href="#Roadmap">Roadmap</a></li>
                      <li className="text-white">How to buy</li>
                  </ul>
                  <ul>
                      <li className="text-white">Company</li>
                      <li className="text-white"><a href="#Roadmap">{`Terms & Conditions`}</a></li>
                      <li className="text-white">How to buy</li>
                  </ul>
                  <div className="flex-col">
                      <h3 className="ml-1">Follow us</h3>
                      <div className="flex">
                          <img src="./images/logo-insta.png" className="h-9 mr-2"/>
                          <img src="./images/logo-twitter.png" className="h-8"/>
                      </div>

                  </div>
                  <div className="">
                  </div>
                  <div className="flex-col">
                      <h6 className="block text-left">Legal</h6>
                      <a href="https://www.decentraland.org/terms-and-conditions" className="block text-left my-1 text-xs underline">Terms and<span className="block">Conditions</span></a>
                      <a href="https://www.decentraland.org/privacy-policy" className="block text-xs text-left underline">Privacy policy</a>
                  </div>
              </section>
              <section className="bg-black flex my-20 justify-center h-20 items-center">
                  <h1 className="text-white">Powered by Centra</h1>
                  <img src="./images/centra.svg" alt="Centra Logo" className="h-10"/>
              </section>
          </footer>
  )
}

export default Footer