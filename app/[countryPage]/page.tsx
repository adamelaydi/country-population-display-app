import Image from "next/image"
import img from "../../public/next.svg"
import Link from "next/link"
import data from "../../public/data.json"
type PageProps = {
    params: Promise<{
        countryPage: string;
    }>;
};  
async function CountryPage({ params }: PageProps) {
    const n = (await params).countryPage;
    const theCountry= data.filter((d)=>{
        if(d.name===n){
            return d;
        }
    })
    console.log(theCountry[0])
    return (
        <div className="container max-w-[1100] mx-auto p-[30]"> 
            <Link href="/">
                <button className="dark:bg-blue-400 shadow-[0_0px_6px_rgba(0,0,0,0.22)] capitalize text-[15] mb-[30] pt-[5] pb-[5] pr-[20] pl-[20] rounded-[3]  w-fit bg-[#ffffff]">back</button>
            </Link>
            <section className="country-informations flex items-center h-fit  max-[900]:flex-col max-[900]:items-start">
                <Image className=" h-[250] w-[300] mr-[30] rounded-[5] " src={theCountry[0]?.flags?.svg||theCountry[0]?.flags?.png} loading="lazy" width={300} height={100} alt="this is country photo"/>
                <div className="statistics">
                    <h3 className="capitalize text-[30px] mt-0 pt-0 font-bold">{theCountry[0]?.name}</h3>
                    <div className="all-info">
                        <div className="specific-info flex justify-between items-start  h-fit  pt-[30] max-[900]:flex-col">
                            <ul>
                                <li className="capitalize text-[17px]"><span className="font-semibold">native name:</span> <span>{theCountry[0]?.nativeName}</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">population:</span> <span>{theCountry[0]?.population}</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">region:</span> <span>{theCountry[0]?.region}</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">sub region:</span> <span>{theCountry[0]?.subregion}</span></li>
                                <li className="capitalize text-[17px]"><span className="font-semibold">capital:</span> <span>{theCountry[0]?.capital}</span></li>
                            </ul>
                            <ul>
                                <li className="capitalize text-[17px]"><span className="font-semibold">top level domain:</span> <span>{theCountry[0]?.topLevelDomain}</span></li>
                                {/* <li className="capitalize text-[17px]"><span className="font-semibold">currencies:</span> <span>{theCountry[0]?.currencies?.name}</span></li> */}
                                <li className="capitalize text-[17px]"><span className="font-semibold">languages:</span> <span>{theCountry[0]?.languages[0]?.nativeName}</span></li>
                            </ul>
                        </div>
                        <div className="border-countries flex items-center  max-[900]:flex-col max-[900]:gap-[30] max-[900]:mt-[30]">
                            <h4 className="font-bold capitalize mr-[50]">border countries:   </h4>
                            <ul className="flex gap-[10] flex-wrap  max-w-[200]">
                                {
                                    theCountry[0]?.borders?.map((c ,index)=>{
                                        return <li key={index} className="h-[35] shadow-[0_0px_6px_rgba(0,0,0,0.22)] capitalize text-[15] pt-[5] pb-[5] pr-[15] pl-[15]  w-fit">{c}</li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CountryPage