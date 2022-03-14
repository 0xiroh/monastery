import { useEffect, useRef, useState } from "react"

function Header() {
    const [isPaused, setIsPaused] = useState(true);

    var snd = new Audio("https://mstry.s3.amazonaws.com/mstrTrimmed.mp3");
    const togglePlay = sound => sound.pause ? (sound.play() && console.log(sound.paused)) : (sound.pause() && console.log(sound.paused));

    return (
        <header className="bg-black h-auto flex justify-between items-center p-4 md:mx-10">
            <div className="bg-white h-10 flex items-center justify-center rounded">
                <img 
                    className="object-contain"
                    src="/images/vector.png"
                    width={200}
                    height={150}
                    />
            </div>
            <div className="flex items-center justify-center relative">
                <ul className="flex items-center">
                    <li className="pl-4">
                        <img
                            src="https://mstry.s3.amazonaws.com/images/imageSound.png"
                            width={200}
                            height={100}
                            onClick={() => togglePlay(snd)}
                        />
                    </li>
                    <li className="text-white hidden sm:block md:mx-10">
                        Roadmap
                    </li>
                    <li className=" bg-white rounded-full hidden mr-4 sm:block md:mx-10">
                        <img
                            className=""
                            src="https://assets-global.website-files.com/61ba416ec1c4f90ccf09feae/61bbb80c73db7927d8bc3d38_twitter.svg"
                            width={60}
                            height={60}
                            onClick={() => snd.pause()}
                            />
                            
                    </li>
                    <li className=" sm:block md:mx-10">
                        <img 
                            className="object-contain"
                            src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.png"
                            width={60}
                            height={60}
                            />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header