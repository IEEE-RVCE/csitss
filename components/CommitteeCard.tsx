interface members{
    name: string;
    post: string;
    imgLink: string;
}

export const CommitteeCard = ({ members }: { members: members[] }) => {
    return (
        <>
            { members.map((member) => (
                <div key={ member.name } className="m-10">
                    <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl ">
                    <img className="w-full rounded-t-lg h-96 md:h-56 md:w-60 rounded-[10px] md:rounded-s-lg object-fill " src={`${member.imgLink}`} alt="image" />

                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{ member.name }</h5>
                            <p className="mb-3 font-normal text-gray-700">{ member.post }</p>
                        </div>
                    </a>
                </div>
            ))}
        </>
    );
}