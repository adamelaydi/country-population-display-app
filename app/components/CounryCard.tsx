import Link from "next/link"
import Image from "next/image"
function CounryCard(props:any) {
    return (
        <Link href={`/${props?.data?.name}`}>
            <div className="bg-[#ffffff] dark:bg-[#474849] CounryCard w-[250] h-[350] m-[10] rounded-[5] overflow-hidden">
                <Image loading="lazy" src={props?.data?.flags?.svg||props?.data?.flags?.png} width={250} height={175} className="w-[250] h-[175] object-cover " alt="this is card Photo" />
                <div className="card-info w-full h-fit p-[10]">
                    <h3 className="font-bold text-[20px] capitalize mb-[10]">{props?.data?.name}</h3>
                    <ul>
                        <li className="capitalize tracking-[0.5px] font-semibold text-[17]"><span>population : </span><span>{props?.data?.population}</span></li>
                        <li className="capitalize tracking-[0.5px] font-semibold text-[17]" ><span>region : </span><span>{props?.data?.region}</span></li>
                        <li className="capitalize tracking-[0.5px] font-semibold text-[17]"><span>capital : </span><span>{props?.data?.capital}</span></li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default CounryCard