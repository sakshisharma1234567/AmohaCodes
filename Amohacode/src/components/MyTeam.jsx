import React from 'react';

const teamData = [
  {
    id: 1,
    name: 'Owen Harper',
    title: 'CEO',
    avatar: 'https://placehold.co/300x300/FADBD8/333333?text=OH',
  },
  {
    id: 2,
    name: 'Isabella Reed',
    title: 'Head of Education',
    avatar: 'https://placehold.co/300x300/D6EAF8/333333?text=IR',
  },
  {
    id: 3,
    name: 'Yashika',
    title: 'Lead Instructor',
    avatar: 'https://placehold.co/300x300/E8DAEF/333333?text=Y',
  },
  {
    id: 4,
    name: 'Ethan Turner',
    title: 'Internship Coordinator',
    avatar: 'https://placehold.co/300x300/A9CCE3/333333?text=ET',
  },
];

const MyTeam = ({ darkMode }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading Left Aligned */}
      <h2 className="text-2xl font-bold mb-10 text-left">My Team</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="font-semibold text-lg">{member.name}</h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {member.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
