import CounryCard from "./components/CounryCard";
import FilterInput from "./components/FilterInput";
import data from "../public/data.json"
import Search from "./components/Search";
import { filterCountries } from "./hooks/filterhook";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ search?: string ,region:string}>;
}){
    
  const { search = "" ,region="all" } = await searchParams;
  console.log(search)
  const filterd = filterCountries( region,search)
  console.log(filterd)
  return (
    <>
      <main className="landing-main">
        <section className="find-country w-full h-[150] sm:h-62.5">
          <div className=" container max-w-275 h-[150] m-auto flex  flex-col items-between justify-evenly p-2.5 sm:flex-row sm:h-62.5 sm:justify-between sm:items-center ">
            {/* <input name="hello" className="shadow-[0_0px_24px_rgba(0,0,0,0.22)] capitalize h-[45] w-[350] p-[5] rounded-[5px] outline-none max-[390]:w-full" placeholder="Search For a Country ..." type="search"/> */}
            <Search />
            <FilterInput />
          </div>
        </section>
        <section className="countries w-full">
          <div className="container max-w-[1100] h-fit m-auto flex flex-wrap justify-evenly items-center">
            {
              
              filterd.length > 0
                  ? filterd.map((d, index) => (
                      <CounryCard key={index} data={d} />
                  ))
                  : data.map((d, index) => (
                      <CounryCard key={index} data={d} />
                  ))
          
            }
          </div>
        </section>
      </main>
    </>
  );
}
