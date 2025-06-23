import {Link} from "react-router-dom";

export const Index = () => {
    return (
        <>
            <div className="lg:bg-geometry flex justify-center text-center lg:text-start items-start mt-20 sm:mt-0 sm:items-center h-full sm:h-screen lg:flex-col lg:pl-72 lg:pb-16">
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-7xl">Safety in Bytes</p>
                    <p className="text-xl font-bold">Ort wird noch bekanntgegeben (hybrid geplant)</p>
                    <p className="text-xl font-bold">Herbst 2025 – Termin in Planung</p>
                    <p className="text-xl leading-relaxed lg:w-1/2 px-12 text-justify lg:text-start lg:p-0">
                    Dein Workshop auf dem Informatik Festival 2025: IT-Security am Puls der Zeit. Für junge Menschen – mit Top-Speakern aus Wirtschaft, Politik und Wissenschaft. Termin und Speaker folgen!
                    </p>
                    <div className="mt-4 flex gap-4 px-12 lg:p-0">
                        <Link to="/speaker/2024" className="text-white p-2 text-xl rounded-md bg-gradient-to-r from-purple-500 to-pink-500">
                            Speaker letztes Jahr (2024)
                        </Link>
                        <Link to="/call-for-participation" className="text-white p-2 text-xl rounded-md bg-gradient-to-r from-purple-500 to-pink-500">
                            Jetzt mitmachen!
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
