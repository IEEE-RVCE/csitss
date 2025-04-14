import { useEffect, useState } from "react";
import { CommitteeCard } from "../../components/CommitteeCard";
import { useRouter } from "next/router";

const CommitteeDetail = () => {
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
  
    useEffect(() => {
      const fetchCommitteeData = async () => {
        // Only run this on the client-side
        if (!router.isReady) return;
        
        const { name } = router.query;
  
        if (name && typeof name === 'string') {
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
    }, [router.isReady, router.query]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="flex justify-center items-center w-screen py-10">
        <div className="container mx-auto px-4">
          <CommitteeCard members={members} />
        </div>
      </div>
    );
  };
  
  export default CommitteeDetail;
