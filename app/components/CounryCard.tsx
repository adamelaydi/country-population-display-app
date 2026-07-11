import image from "../../public/vercel.svg"
import Image from "next/image"
function CounryCard() {
    return (
        <div className="bg-[#ffffff] CounryCard min-w-[250] max-w-[350] h-[350] m-[10] rounded-[5] overflow-hidden">
            <Image src={image} className="w-[250] h-[175] bg-blue-300" alt="this is card Photo" />
            <div className="card-info w-full h-fit p-[10]">
                <h3 className="font-bold text-[25px] capitalize mb-[10]">egypt</h3>
                <ul>
                    <li className="capitalize tracking-[0.5px] font-semibold text-[17]"><span>population : </span><span>100,366,96</span></li>
                    <li className="capitalize tracking-[0.5px] font-semibold text-[17]" ><span>region : </span><span>africe</span></li>
                    <li className="capitalize tracking-[0.5px] font-semibold text-[17]"><span>capital : </span><span>cairo</span></li>
                </ul>
            </div>
        </div>
    )
}

export default CounryCard