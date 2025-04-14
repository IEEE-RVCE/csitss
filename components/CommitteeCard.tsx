interface members{
    name: string;
    post: string;
    imgLink: string;
}

export const CommitteeCard = ({ members }: { members: members[] }) => {
    return (
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {members.map((member) => (
                <div key={member.name} className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
                    <div className="w-full md:w-60">
                        <img 
                            className="w-full h-96 md:h-56 object-cover" 
                            src={member.imgLink} 
                            alt={`${member.name}'s photo`} 
                        />
                    </div>
                    <div className="flex flex-col justify-center p-4 flex-1">
                        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{member.name}</div>
                        <div className="text-gray-700">{member.post}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}