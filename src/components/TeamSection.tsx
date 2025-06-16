
import { Crown } from "lucide-react";

const members = [
  { salutation: "Mr", name: "Ephesians Lewis", role: "Leader", skill: "Backend Engineer", profile:'./power.png' },
  { salutation: "Mr", name: "Vincent Odhiambo", skill: "Operations Engineer", profile:'./male.jpeg' },
  { salutation: "Miss", name: "Magdaline Muthui", skill: "Frontend Engineer", profile:'./female.jpeg' },
  { salutation: "Mr", name: "Protas Junior", skill: "FullStack Engineer" , profile:'./male.jpeg'},
  { salutation: "Miss", name: "Juliet Marcs", skill: "Frontend Engineer", profile:'./female.jpeg' },
  { salutation: "Miss", name: "Hazzel Mochogo", skill: "Clound Engineer", profile:'./female.jpeg' },
  { salutation: "Miss", name: "Mary Wangari", skill: "Frontend  Engineer", profile:'./female.jpeg' },
  { salutation: "Mr", name: "Abel Sifuna", skill: "FullStack Engineer" , profile:'./male.jpeg'},
  { salutation: "Mr", name: "Collins Kamau", skill: "Frontend Engineer", profile:'./male.jpeg' },
  { salutation: "Miss", name: "Yvonna shiala", skill: "Frontend Engineer", profile:'./female.jpeg' },
];

const TeamSection = () => (
  <section className="my-12 sm:my-20">
    <h2 className="text-2xl sm:text-3xl font-semibold text-primary dark:text-white text-center mb-6 sm:mb-8">Meet the Team</h2>
    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 justify-center">
      {members.map((member) => (
        <div
          key={member.name}
          className={`flex flex-col items-center bg-white dark:bg-[#232437] rounded-xl shadow p-5 sm:p-6 border ${
            member.role === "Leader"
              ? "border-2 border-primary dark:border-white scale-105"
              : "border-gray-200 dark:border-[#323247]"
          } animate-fade-in`}
        >
          <div className="bg-primary dark:bg-secondary text-white dark:text-primary rounded-full w-28 h-28 sm:w-28 sm:h-28 flex items-center justify-center mb-3 text-2xl sm:text-3xl font-bold shadow-sm">
            <img src={member.profile} className="rounded-full w-28 h-28 sm:w-28 sm:h-28" alt={member.name} />
          </div>
          <span className="font-medium text-base sm:text-lg mb-1 text-primary dark:text-white text-center">
            {member.salutation}. {member.name}
          </span>
          {member.role === "Leader" ? (
            <span className="flex items-center gap-1 text-xs sm:text-sm text-primary dark:text-white font-semibold uppercase">
              <Crown size={16} className="inline" /> Leader
            </span>
          ) : (
            <span className="text-xs text-primary dark:text-gray-300 font-semibold uppercase">Member</span>
          )}
          <span className="text-xs text-primary dark:text-gray-300">{member.skill}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
