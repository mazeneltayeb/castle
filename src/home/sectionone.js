import "./home.css"
import ControlledCarousel from "./carousel"

function SectionOne(){
    return(
        <div className="sectionone px-4 mt-4 p-5">
            <div className="row row-gap-3">
                <div className="col-lg-3 col-md-3 text-center text-lg-start">
                    <div className="justify-content-center align-items-center flex-column">
                        <div className="fs-4 fw-medium mt-4 d-grid justify-content-center align-items-center ready">
                            <span>Ready for Castle</span> 
                            <span className="mt-3 mx-lg-auto">New Collection?</span>
                        </div>
                        <div className="text-black-50 mt-5 text-center d-grid price justify-content-center align-items-center">
                            <span> Start From </span> 
                            <span className="p-1 px-2 mt-3"> 20000 EGP only</span> 
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 text-center text-lg-start">
                        <h4>New design 2024</h4>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accu
                        santium natus error sit omnis iste natus error sit volupta tem accu santium
                        Sed ut perspiciatis unde omnis iste natus error sit vo luptatem accusantium
                        natus error sit omnis iste natus error sit vo luptatem accusantium natus.
                        </p>
                    </div>
                <div className=" col-lg-6 col-md-6 col-sm-12">
                  <ControlledCarousel />
                </div>
            </div>
        </div>
    )
}
export default SectionOne;