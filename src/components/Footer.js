function Footer() {
  return (
          <footer className="mt-5 flex-col mx-[-30px]">
              <section className="bg-white flex h-40 justify-around items-center">
                  <div className="flex-col">
                      <h3 className="ml-1">Follow us</h3>
                      <div className="flex">
                          <img src="./images/logo-insta.png" className="h-9 mr-2"/>
                          <img src="./images/logo-twitter.png" className="h-8"/>
                      </div>

                  </div>
                  <div className="">
                      <img src="./images/monastery-footer.png" className="h-14"/>
                  </div>
                  <div className="flex-col">
                      <h6 className="block text-left">Legal</h6>
                      <a href="https://www.decentraland.org/terms-and-conditions" className="block text-left my-1 text-xs underline">Terms and<span className="block">Conditions</span></a>
                      <a href="https://www.decentraland.org/privacy-policy" className="block text-xs text-left underline">Privacy policy</a>
                  </div>
              </section>
              <section className="bg-black flex justify-center h-20 items-center">
                  <h1 className="text-white">Powered by Centra</h1>
                  <img src="./images/centra.svg" alt="Centra Logo" className="h-10"/>
              </section>
          </footer>
  )
}

export default Footer