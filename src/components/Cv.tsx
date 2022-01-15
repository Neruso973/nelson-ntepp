import cv from "../assets/CV\ nelson\ ntepp.pdf";

function Cv() {
    return (
        <div className="h-full" id="cv">
            <a href={cv} download="CV\ nelson\ ntepp.pdf">
                <button> Telecharger le cv</button>
            </a>
        </div>
    )
}

export default Cv
