import React from 'react'

type Mem = {
  label: string;
  members: {
    name: string;
    post: string;
  }[];
}

const committeeMembers: Mem[] = [{
  label: "Chief Patron",
  members: [
    {
      name: "Dr. M. K Panduranga Setty",
      post: "President, RSST."
    }
  ]
}, {
  label: "Patron",
  members: [
    {
      name: "Sri. K. G. Subbarama Setty	",
      post: "Hon. Treasurer, RSST."
    },
    {
      name: "Sri. A.V.S. Murthy",
      post: "Hon. Secretary, RSST."
    },
    {
      name: "Sri. D.P.Nagaraj",
      post: "Hon. Joint Secretary, RSST."
    },
    {
      name: "Sri Dr. K N Subramanya",
      post: "Principal, RVCE."
    }
  ]
}]


function committee() {
  return (
    <div>
      <h1>Committee</h1>
      <div className="space-y-4">
        {committeeMembers.map((committeeMember, index) => {
          return (
            <div key={index}>
              <details className="group">
                <summary
                  className="flex items-center justify-between p-4 rounded-lg cursor-pointer bg-gray-50"
                >
                  <h5 className="font-medium text-gray-900">
                    {committeeMember.label}
                  </h5>

                  <svg
                    className="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                {committeeMember.members.map((member, index) => {
                  return (
                    <div key={index}>
                      <p className="px-4 mt-4 leading-relaxed text-gray-700">
                        <h3>{member.name}</h3>
                        <p>{member.post}</p>
                      </p>
                    </div>
                  )
                })}
              </details>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default committee