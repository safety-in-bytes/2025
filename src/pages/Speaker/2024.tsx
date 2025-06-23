export const Speaker = () => {
    return (
        <div className="flex justify-center">
            <div className="my-8 xl:w-1/2 flex flex-col gap-11 justify-center items-center">
                <p className="text-center font-bold text-5xl p-2 text-white rounded-xl bg-gradient-to-r from-purple-500 to-pink-500">
                    Speaker letztes Jahr (2024)
                </p>

                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/peter-wilfahrt.jpg" />
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">9:00 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">Peter Wilfahrt</p>
                            <p className="text-md">Chief Digital Officer der IHK Oberfranken Bayreuth</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem] mb-2">
                            Phishing und Awareness für KMU: einer klickt immer!
                        </p>
                        <span className="bg-yellow-200 px-2 py-1 rounded-full">remote</span>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/bijan-kaffenberger.jpg" />
                        <span>Fotograf: Maximilian König</span>
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">10:00 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.9rem] mb-2">
                            <p className="text-2xl font-bold">Bijan Kaffenberger</p>
                            <p className="text-md">Sprecher der SPD-Landtagsfraktion für Digitales und Innovation sowie für
                                Wissenschaft und Kultur</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem] mb-2">
                            IT-Sicherheit im Wandel: Politische, akademische und praktische Perspektiven
                        </p>
                        <span className="bg-yellow-200 px-2 py-1 rounded-full">Podiumsdiskussion</span>
                    </div>
                </div>

                <div className="w-3/4">
                    <p className="text-2xl">11:00 Uhr</p>
                    <div className="border-gray-500 border-[1px] mb-2"></div>
                    <p className="text-2xl font-bold">Pause</p>
                </div>

                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/jakub-andrzejewski.jpg" />
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">11:30 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">Jakub Andrzejewski</p>
                            <p className="text-md">Nuxt Insider</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem] mb-2">
                            Permissions Policy API
                        </p>
                        <span className="bg-yellow-200 px-2 py-1 rounded-full">remote</span>
                    </div>
                </div>

                {/* <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/deborah-fleischhut.jpg" />
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">11:30 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">Deborah Fleischhut</p>
                            <p className="text-md">Junge GI</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem]">
                            Gamification für höhere Informationssicherheit in KMU
                        </p>
                    </div>
                </div> */}

                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/pascal-peinecke.webp" />
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">12:00 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">Pascal Peinecke</p>
                            <p className="text-md">CTF-Spezialist</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem]">
                            Live Hacking feat. HackTheBox
                        </p>
                    </div>
                </div>

                <div className="w-3/4">
                    <p className="text-2xl">12:30 Uhr</p>
                    <div className="border-gray-500 border-[1px] mb-2"></div>
                    <p className="text-2xl font-bold">Pause</p>
                </div>

                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/silas-kaempchen.jpg" />
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">14:00 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">Silas Kämpchen</p>
                            <p className="text-md">AWADO GmbH WPG StBG</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem]">
                            Beitrag der NIS2-Richtlinie zur digitalen Souveränität in Deutschland
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/marc-ohm.png" />
                        <span>© Max Waidhas</span>
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">15:00 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">Marc Ohm</p>
                            <p className="text-md">Fraunhofer FKIE & Universität Bonn / Junge Wissenschaft GI</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem]">
                            Software Supply Chain Sicherheit
                        </p>
                    </div>
                </div>

                <div className="w-3/4">
                    <p className="text-2xl">15:30 Uhr</p>
                    <div className="border-gray-500 border-[1px] mb-2"></div>
                    <p className="text-2xl font-bold">Pause</p>
                </div>


                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/moritz-moser.jpg" />
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">16:30 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">Moritz Moser</p>
                            <p className="text-md">Hasso-Plattner-Institut</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem]">
                            Ransomware-Erkennung
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row bg-gray-200 gap-2 w-full items-center">
                    <div className="h-64 aspect-square">
                        <img src="/speaker/blank-profile-picture.svg" />
                    </div>
                    <div className="p-2 rounded-md w-full">
                        <p className="text-2xl">17:00 Uhr</p>
                        <div className="border-gray-500 border-[1px] mb-2"></div>
                        <div className="leading-[0.8rem] mb-4">
                            <p className="text-2xl font-bold">J. Neuschäfer</p>
                            <p className="text-md">CCC Aachen</p>
                        </div>
                        <p className="text-xl font-medium leading-[1.7rem]">
                            Flash Tracing
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
