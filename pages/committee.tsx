import Card from "../components/Card";

export default function Committee1() {
    return (
        <div className="flex flex-col justify-center items-center w-full overflow-hidden">
            <div className="w-full flex justify-center my-4">
                <Card committeeName={"Chief Patron"} to={"/committee-details/chief_patron"} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full md:w-2/3 place-items-center gap-4 px-4">
                <div className="w-full md:w-2/3 max-w-full">
                    <Card committeeName={"Patrons"} to={"/committee-details/patrons"} />
                    <Card committeeName={"Conference Chairs"} to={"/committee-details/conference_chairs"} />
                    <Card committeeName={"Program Chairs"} to={"/committee-details/program_chairs"} />
                    <Card committeeName={"Technical Program Chairs"} to={"/committee-details/technical_program_chairs"} />
                    <Card committeeName={"Finance Chairs"} to={"/committee-details/finance_chairs"} />
                    <Card committeeName={"Publication Chairs"} to={"/committee-details/publication_chairs"} />
                    <Card committeeName={"Sponsorship Chairs"} to={"/committee-details/sponsorship_chairs"} />
                    <Card committeeName={"Publicity and Media Chairs"} to={"/committee-details/pm_chairs"} />
                </div>
                <div className="w-full md:w-2/3 max-w-full">
                    <Card committeeName={"Organizing Committee"} to={"/committee-details/organizing_committee"} />
                    <Card committeeName={"Advisory Committee"} to={"/committee-details/advisory_committee"} />
                    <Card committeeName={"Website Chairs"} to={"/committee-details/website_chairs"} />
                    <Card committeeName={"Conference Convenors"} to={"/committee-details/conference_convenors"} />
                    <Card committeeName={"Session Management"} to={"/committee-details/session_management"} />
                    <Card committeeName={"Hospitality"} to={"/committee-details/hospitality"} />
                    <Card committeeName={"Transportation"} to={"/committee-details/transportation"} />
                    <Card committeeName={"Registration Committee"} to={"/committee-details/registration_committee"} />
                </div>
            </div>
        </div>
    );
}
