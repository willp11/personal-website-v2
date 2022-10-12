import Observer from "./observer"

export default function Portfolio() {

    return (
        <Observer>
            <h2>
                <span className="text-2xl text-teal-300" style={{fontFamily: 'Ubuntu-Mono'}}>01. </span>
                <span 
                    className="text-3xl font-bold text-slate-300 after:h-[1px] 
                        after:w-[100px] xs:after:w-[200px] sm:after:w-[300px]
                        after:inline after:absolute after:mt-5 after:ml-5 after:bg-slate-600"
                >
                    Portfolio</span>
            </h2>
        </Observer>
    )
}