import { motion } from "framer-motion";

export default function loading() {
    return (
        <div className="h-screen w-full text-white relative">
            <div className="w-full h-full flex justify-center flex-col items-center">
                <h1 className="headertin text-3xl md:text-6xl fixed top-5 left-10">ADG.</h1>
                <div className="loader">
                    <p>loading</p>
                    <div className="words">
                    <span className="word">Interface</span>
                    <span className="word">Dataset</span>
                    <span className="word">Graphics</span>
                    <span className="word">Aesthet</span>
                    <span className="word">Operation</span>
                    </div>
                </div>
            </div>
        </div>
    );
      }
