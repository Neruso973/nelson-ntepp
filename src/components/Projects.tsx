import Portfolio from "./Portfolio";
import { portfolio } from "../data/portfolio";


function Projects() {
  return (
    <div className="h-full mt-[9%] bg-[#707070]" id="projects">
      <h3 className="text-2xl ml-4">MES PROJETS</h3>
      <div className="bg-[#1B2271] w-16 h-1 mb-6 ml-28"></div>
     <div className="flex flex-wrap">
     {portfolio.map((item) => (
       <>
        <Portfolio
          key={item.name}
          name={item.name}
          screen={item.screen}
          link={item.link}
          technos={item.technos}
          github={item.github}
          description={item.decripttion}
          />
          {console.log(item.screen)}
          </>
          ))}
     </div>
    </div>
  );
}

export default Projects;
