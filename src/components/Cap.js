function Cap() {
    return (
        <div className="flex justify-center my-20">
            <section className="ml-80 sombra w-88 h-80 flex-col sm:ml-10 md:w-96 bg-[#2f2f2f] rounded-2xl">
                <div className="flex justify-around items-center mt-5 mx-auto">
                    <img src="https://cdn.cdnlogo.com/logos/d/92/decentraland.svg" className="h-16"/>
                    <div class="flex-col items-center justify-center">
                        <h2 className="text-white text-2xl decentraland">Decentraland</h2>
                        <p className="text-white text-sm ">Use our best selling cap in the Metaverse.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 border-0 rounded-2xl ">
                <model-viewer
                    height="100%"
                    src="/models/cap2.gltf"
                    camera-controls
                    ar
                    auto-rotate
                    rotation-per-second="20deg"
                    style={{backgroundColor: '#2f2f2f'}}
                    orientation="0 0 -95deg"
                    min-field-of-view="10deg"
                />
                </div>
            </section>
        </div>
    )
}

export default Cap