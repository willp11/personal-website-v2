import Image from "next/image";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { useImagesModal } from "../hooks/useImagesModal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const projectImageLocations = [ 
    [
        "/images/pod-app-3.jpg",
        "/images/pod-app-1.jpg",
        "/images/pod-app-2.jpg",
    ],
    [
        "/images/parent-teacher-app-1.png",
        "/images/parent-teacher-app-2.png",
        "/images/parent-teacher-app-3.png",
    ],
    [
        "/images/ecommerce-app-2.png",
        "/images/ecommerce-app-1.png",
        "/images/ecommerce-app-3.png",
    ],
    [
        "/images/crypto-portfolio-app-wide-1.PNG",
        "/images/crypto-portfolio-app-wide-2.PNG",
        "/images/crypto-portfolio-app-wide-3.PNG",
        "/images/crypto-portfolio-app-wide-4.PNG"
    ],
]

export default function ProjectImages() {

    const { showProjectImages, setShowProjectImages, projectIndex } = useImagesModal();

    const carousel = (
        projectIndex !== undefined && 
        <div className="relative w-[90%] max-w-[900px]">
            <Carousel autoPlay={true} interval={5000} showStatus={false} infiniteLoop={true} showThumbs={false} transitionTime={800}>
                {projectImageLocations[projectIndex].map((img, idx)=>{
                    return (
                        <div key={idx}>
                            <Image
                                src={projectImageLocations[projectIndex][idx]}
                                layout="responsive"
                                width={1920}
                                height={1080}
                                alt="slideshow"
                            />
                        </div>
                    )
                })
                }
            </Carousel>
        </div>
    )

    // modal
    if (showProjectImages) {
        return (
            <div className="w-screen h-screen fixed top-0 left-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
                <div className="relative w-full h-full md:w-4/5 md:h-4/5 bg-slate-900 rounded-lg flex justify-center items-center overflow-hidden">
                    {setShowProjectImages && <XCircleIcon onClick={()=>setShowProjectImages(false)} className="absolute top-4 right-6 md:top-2 md:right-2 w-8 h-8 stroke-slate-300 hover:stroke-teal-300 transition ease-in-out duration-300 cursor-pointer z-10" />}
                    <div className="relative w-full h-full max-w-[1000px] flex justify-center items-center">
                        {carousel}
                    </div>
                </div>
            </div>
        )
    } else return <></>
}