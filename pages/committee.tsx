import Card from "../components/Card";

export default function Committee1() {
    return (
        <div className="flex flex-col justify-center items-center w-full overflow-hidden">
            <div className="w-full flex justify-center my-4">
                <Card
                    committeeName={"Chief Patron"}
                    to={"/committee-details/chief_patron"}
                    className="enhanced-card"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-2/3 place-items-center gap-8 px-4">
                <div className="w-full md:w-2/3 max-w-full space-y-4">
                    <Card committeeName={"Patrons"} to={"/committee-details/patrons"} className="enhanced-card" />
                    <Card committeeName={"Conference Chairs"} to={"/committee-details/conference_chairs"} className="enhanced-card" />
                    <Card committeeName={"Program Chairs"} to={"/committee-details/program_chairs"} className="enhanced-card" />
                    <Card committeeName={"Technical Program Chairs"} to={"/committee-details/technical_program_chairs"} className="enhanced-card" />
                    <Card committeeName={"Finance Chairs"} to={"/committee-details/finance_chairs"} className="enhanced-card" />
                    <Card committeeName={"Publication Chairs"} to={"/committee-details/publication_chairs"} className="enhanced-card" />
                    <Card committeeName={"Sponsorship Chairs"} to={"/committee-details/sponsorship_chairs"} className="enhanced-card" />
                    <Card committeeName={"Publicity and Media Chairs"} to={"/committee-details/pm_chairs"} className="enhanced-card" />
                </div>
                <div className="w-full md:w-2/3 max-w-full space-y-4">
                    <Card committeeName={"Organizing Committee"} to={"/committee-details/organizing_committee"} className="enhanced-card" />
                    <Card committeeName={"Advisory Committee"} to={"/committee-details/advisory_committee"} className="enhanced-card" />
                    <Card committeeName={"Website Chairs"} to={"/committee-details/website_chairs"} className="enhanced-card" />
                    <Card committeeName={"Conference Convenors"} to={"/committee-details/conference_convenors"} className="enhanced-card" />
                    <Card committeeName={"Session Management"} to={"/committee-details/session_management"} className="enhanced-card" />
                    <Card committeeName={"Hospitality"} to={"/committee-details/hospitality"} className="enhanced-card" />
                    <Card committeeName={"Transportation"} to={"/committee-details/transportation"} className="enhanced-card" />
                    <Card committeeName={"Registration Committee"} to={"/committee-details/registration_committee"} className="enhanced-card" />
                </div>
            </div>
        </div>
    );
}
