import Image from "next/image"
import img from "../../public/next.svg"
function CountryPage() {
    return (
        <div className="container max-w-[1100] mx-auto p-[30]"> 
            <button className="shadow-[0_0px_6px_rgba(0,0,0,0.22)] capitalize text-[15] mb-[30] pt-[5] pb-[5] pr-[20] pl-[20] rounded-[3]  w-fit bg-[#ffffff]">back</button>
            <section className="country-informations flex items-center">
                <Image className=" h-[250] w-[300] mr-[30] rounded-[5] " src={img} alt="this is country photo"/>
                <div className="statistics">
                    <h3 className="capitalize text-[30px] mt-0 pt-0 font-bold">egypt</h3>
                    <div className="all-info">
                        <div className="specific-info flex justify-between items-start h-[200] pt-[30]">
                            <ul>
                                <li className="capitalize text-[17px]"><span className="font-semibold">native name:</span> <span>مصر</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">population:</span> <span>مصر</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">region:</span> <span>مصر</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">sub region:</span> <span>مصر</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">capital:</span> <span>مصر</span></li>
                            </ul>
                            <ul>
                                <li className="capitalize text-[17px]"><span className="font-semibold">top level domain:</span> <span>مصر</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">currencies:</span> <span>مصر</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">languages:</span> <span>مصر</span></li>
                            </ul>
                        </div>
                        <div className="border-countries flex items-center">
                            <h4 className="font-bold capitalize mr-[50]">border countries:   </h4>
                            <ul className="w-[300] flex justify-between flex-wrap">
                                <li className="h-[35] shadow-[0_0px_6px_rgba(0,0,0,0.22)] capitalize text-[15] pt-[5] pb-[5] pr-[15] pl-[15]  w-fit">france</li>
                                <li  className="h-[35] shadow-[0_0px_6px_rgba(0,0,0,0.22)] capitalize text-[15] pt-[5] pb-[5] pr-[15] pl-[15]  w-fit">france</li>
                                <li  className="h-[35] shadow-[0_0px_6px_rgba(0,0,0,0.22)] capitalize text-[15] pt-[5] pb-[5] pr-[15] pl-[15]  w-fit">france</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CountryPage