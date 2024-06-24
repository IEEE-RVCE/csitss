import { useEffect, useState } from "react";
import { CommitteeCard } from "../../components/CommitteeCard";

const CommitteeDetail = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchCommitteeData = async () => {
        const pathname = window.location.pathname;
        const name = pathname.split("/").pop();
  
        if (name) {
          try {
            const data = require(`../../data/${name}`).default;
            setMembers(data);
          } catch (error) {
            console.error("Error fetching committee data:", error);
          } finally {
            setLoading(false);
          }
        }
      };
  
      fetchCommitteeData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="flex justify-center items-center w-screen">
        <div>
          <CommitteeCard members={members} />
        </div>
      </div>
    );
  };
  
  export default CommitteeDetail;
