import Card from "../components/Card";

export default function committee1() {
    return <div className="flex justify-center items-center w-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 w-2/3 place-items-center">
            <div className="md:w-2/3 w-4/5 ">
                <Card committeeName={"Conference Chairs"} to={"/conference_chairs"}/>
                <Card committeeName={"Program Chairs"} to={"/program_chairs"}/>
                <Card committeeName={"Technical Program Chairs"} to={""}/>
                <Card committeeName={"Finance Chairs"} to={""}/>
                <Card committeeName={"Publication Chairs"} to={""}/>
                <Card committeeName={"Sponsorship Chairs"} to={""}/>
                <Card committeeName={"Publicity and Media Chairs"} to={""}/>
            </div>
            <div className="md:w-2/3 w-4/5">
                <Card committeeName={"Website Chairs"} to={""}/>
                <Card committeeName={"Conference Convenors"} to={""}/>
                <Card committeeName={"Session Management"} to={""}/>
                <Card committeeName={"Hospitality"} to={""}/>
                <Card committeeName={"Transportation"} to={""}/>
                <Card committeeName={"Stage Committee"} to={""}/>
                <Card committeeName={"Registration Committee"} to={""}/>
            </div>
        </div>
    </div>
}