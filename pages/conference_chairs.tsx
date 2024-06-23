import { CommitteeCard } from "../components/CommitteeCard"
import { conference_chairs_data } from "../data/conference_chairs"

export default function conferenceChairs() {
    return <div className="flex justify-center items-center">
        <div>
            <CommitteeCard members={ conference_chairs_data }/>
        </div>
    </div>
}

