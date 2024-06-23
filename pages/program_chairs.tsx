import { CommitteeCard } from "../components/CommitteeCard"
import { program_chairs_data } from "../data/program_chairs"

export default function conferenceChairs() {
    return <div className="flex justify-center items-center">
        <div>
            <CommitteeCard members={ program_chairs_data }/>
        </div>
    </div>
}

