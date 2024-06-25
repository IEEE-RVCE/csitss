import Card from "../components/Card";

export default function committee1() {
    return <div className="flex justify-center items-center w-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-2/3 place-items-center">
            <div className="md:w-2/3 w-4/5 ">
                <Card committeeName={"Conference Chairs"} to={"/committee-details/conference_chairs"}/>
                <Card committeeName={"Program Chairs"} to={"/committee-details/program_chairs"}/>
                <Card committeeName={"Technical Program Chairs"} to={""}/>
                <Card committeeName={"Finance Chairs"} to={""}/>
                <Card committeeName={"Publication Chairs"} to={""}/>
                <Card committeeName={"Sponsorship Chairs"} to={""}/>
                <Card committeeName={"Publicity and Media Chairs"} to={"/committee-details/pm_chairs"}/>
            </div>
            <div className="md:w-2/3 w-4/5">
                <Card committeeName={"Website Chairs"} to={"/committee-details/website_chairs"}/>
                <Card committeeName={"Conference Convenors"} to={"/committee-details/conference_convenors"}/>
                <Card committeeName={"Session Management"} to={"/committee-details/session_management"}/>
                <Card committeeName={"Hospitality"} to={"/committee-details/hospitality"}/>
                <Card committeeName={"Transportation"} to={"/committee-details/transportation"}/>
                <Card committeeName={"Stage Committee"} to={""}/>
                <Card committeeName={"Registration Committee"} to={"/committee-details/registration_committee"}/>
            </div>
        </div>
    </div>
}