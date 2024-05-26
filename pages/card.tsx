import Card from "../components/Card";

export default function card() {
    return <div className="flex justify-center items-center w-screen">
        <div className="grid grid-cols-2 w-2/3 place-items-center">
            <div className="w-2/3">
                <Card committeeName={"Conference Chairs"} to={"/conference_chairs"}/>
                <Card committeeName={"Program Chairs"}/>
                <Card committeeName={"Technical Program Chairs"}/>
                <Card committeeName={"Finance Chairs"}/>
                <Card committeeName={"Publication Chairs"}/>
                <Card committeeName={"Sponsorship Chairs"}/>
                <Card committeeName={"Publicity and Media Chairs"}/>
            </div>
            <div className="w-2/3">
                <Card committeeName={"Website Chairs"}/>
                <Card committeeName={"Conference Convenors"}/>
                <Card committeeName={"Session Management"}/>
                <Card committeeName={"Hospitality"}/>
                <Card committeeName={"Transportation"}/>
                <Card committeeName={"Stage Committee"}/>
                <Card committeeName={"Registration Committee"}/>
            </div>
        </div>
    </div>
}