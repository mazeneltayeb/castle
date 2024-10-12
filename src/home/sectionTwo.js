import "./home.css"
function SectionTwo(){
    return(
        <div className="sectiontwo px-4 p-5 py-5 ">
            <div className="row d-flex justify-content-center align-items-center gap-4" >
                <div className="experience col-lg-4 col-md-6 col-sm-12  py-4  ">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="experienceyears me-3 orangcolor ">25</div>
                        <div className="d-grid justify-content-center align-items-center text-center  fw-bold">
                            <span>Years</span>
                            <span className="orangcolor">Of</span>
                            <span>Experience</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center align-items-center">
                     <div className="text-md-center text-center text-lg-start">
                        <span className="orangcolor">About us</span>
                        <div className="fs-3 fw-bold">A History of </div>
                        <div className="fs-3 fw-bold">Excellent imported</div>
                        <div className="fs-3 fw-bold">furniture</div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center text-center text-lg-start">
                    <p className="text-black-50 mb-0">
                    Let your home décor make a grand statement with our luxurious furniture pieces 
                    at Castle Furniture Egypt. For over 25 years, we have been recognized for our 
                    distinctive and luxurious furniture sets that are made from the highest quality 
                    materials and fabrics
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SectionTwo;