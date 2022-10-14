import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

export default function ProjectImages({show, setShow}: {show: boolean, setShow: Dispatch<SetStateAction<boolean>>}) {
    // modal
    if (show) {
        return (
            <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="relative w-full h-full md:w-3/4 md:h-3/4 bg-slate-900 rounded-lg flex justify-center items-center">
                    <XCircleIcon onClick={()=>setShow(false)} className="absolute top-4 right-6 md:top-2 md:right-2 w-8 h-8 stroke-slate-300 hover:stroke-teal-300 transition ease-in-out duration-300 cursor-pointer z-10" />
                    <div className="relative w-[90%] h-[90%] flex justify-centger items-center">
                        <Image src="/images/pod-app.jpg" alt="Pod App" layout="fill" objectFit="contain" />
                    </div>
                </div>
            </div>
        )
    } else return <></>
}