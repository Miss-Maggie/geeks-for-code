
import { Crown } from "lucide-react";

const members = [
  { name: "Lewis Okoth", role: "Leader" },
  { name: "Vincent Odhiambo" },
  { name: "Magdaline Muthui" },
  { name: "Protas Junior" },
  { name: "Juliet Marcs" },
  { name: "Hazzel Mochogo" },
  { name: "Mary Wangari" },
  { name: "Abel Sifuna" },
  { name: "Collins Kamau" },
  { name: "Yvonna shiala" },
];

const TeamSection = () => (
  <section className="my-20">
    <h2 className="text-3xl font-semibold text-primary dark:text-white text-center mb-8">Meet the Team</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-center">
      {members.map((member) => (
        <div
          key={member.name}
          className={`flex flex-col items-center bg-white dark:bg-[#232437] rounded-xl shadow p-6 border ${
            member.role === "Leader"
              ? "border-2 border-primary dark:border-white scale-105"
              : "border-gray-200 dark:border-[#323247]"
          } animate-fade-in`}
        >
          <div className="bg-primary dark:bg-white text-white dark:text-primary rounded-full w-14 h-14 flex items-center justify-center mb-3 text-3xl font-bold shadow-sm">
            {member.name.split(" ").map((w) => w[0]).join("")}
          </div>
          <span className="font-medium text-lg mb-1 text-primary dark:text-white">{member.name}</span>
          {member.role === "Leader" ? (
            <span className="flex items-center gap-1 text-sm text-primary dark:text-white font-semibold uppercase">
              <Crown size={18} className="inline" /> Leader
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">Member</span>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
