import Header from "./header"
import Projects from "./projects"
import Services from "./services"
import Case from "./case"
import Community from "./community"
import Footer from "./footer"
import Modalc from "./modal"

function Body() {
  return (
    <div className="md:mx-4 mx-1 space-y-16 md:h-[95vh] md:overflow-y-scroll md:overflow-x-hidden text-white md:p-4 p-2" style={{'scrollbar-width' : 'none', '-ms-overflow-style' : 'none'}}>
        <Modalc />
        <div className="space-y-4">
            <Header text='About' />
            <div className="space-y-2.5">
                <h1 className="md:text-3xl md:font-semibold text-xl font-bold ">ELLFEX: Building Global Web3 and FinTech Communities</h1>
                <p className="text-notnotblack text-sm font-normal md:text-base md:font-medium">I'm <span className="text-white">ELLFEX</span>, a community builder hailing from Nigeria. My expertise lies in <span className="text-white">community building</span> and <span className="text-white">project developments</span>, and by doing so i focus on Helping web3 projects & FinTechs harmonize community togetherness & gain adoption in Africa and across the globe.</p>
                <p className="text-notnotblack text-sm font-normal md:text-base md:font-medium">With over <span className="text-white">2.5k followers</span> on twitter backed with an active community base of over <span className="text-white">500+ builders</span> on telegram and discord.</p>
                <p className="text-notnotblack text-sm font-normal md:text-base md:font-medium">I do this successfully by helping projects i work with gain adoption through processes like Live Events, Community Onboarding and Community Developments, more details of these procedures are shown below and of course, as a Web3 enthusiast i and my community are always open to work alongside new projects with long term goals and help them become a leading player in the decentralized trading space whilst making your community stronger and more vibrant.</p>
                <p className="text-notnotblack text-sm font-normal md:text-base md:font-medium"></p>
            </div>
        </div>

        <div className="space-y-4 w-full">
            <Header text='Project Experience' />
            <Projects />
        </div>

        <div className="space-y-8 w-full">
            <Header text='Services' />
            <Services />
        </div>

        <div className="space-y-8 w-full">
            <Header text='Case Study' />
            <Case />
        </div>

        <div className="space-y-8 w-full">
            <Header text='My Community' />
            <Community />
        </div>

        <div className="space-y-8 w-full">
            <button>
                <a href="https://x.com/EllFexx">
                     <Header text="Let's Build" />
                </a>
            </button>
            
            <Footer />
        </div>
        
        
    </div>
  )
}

export default Body
