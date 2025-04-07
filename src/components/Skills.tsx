import "./Skills.css";

type Skill = {
  name: string;
  category: "Langages" | "Frameworks" | "Moteurs de jeu";
};

const skills: Skill[] = [
  { name: "C", category: "Langages" },
  { name: "C++", category: "Langages" },
  { name: "C#", category: "Langages" },
  { name: "Haskell", category: "Langages" },
  { name: "Python", category: "Langages" },
  { name: "Go", category: "Langages" },
  { name: "TypeScript", category: "Langages" },
  { name: "JavaScript", category: "Langages" },
  { name: "HTML", category: "Langages" },
  { name: "CSS", category: "Langages" },
  { name: "SQL", category: "Langages" },

  { name: "React", category: "Frameworks" },
  { name: "Vite", category: "Frameworks" },

  { name: "Unity", category: "Moteurs de jeu" },
  { name: "Unreal Engine", category: "Moteurs de jeu" },
];

const nameToImage = (name: string) => {
  return name
    .toLowerCase()
    .replace("c++", "cpp")
    .replace("c#", "csharp")
    .replace("unreal engine", "unrealengine")
    .replace(/[#+ ]/g, "");
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <div className="section-title">
          <h1>Compétences</h1>
        </div>

        {["Langages", "Frameworks", "Moteurs de jeu"].map((category, i) => (
          <div key={category} className="skill-category fade-in" style={{ animationDelay: `${i * 0.3}s` }}>
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div className="skill-item pop-in" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    <img
                      src={`/skills/${nameToImage(skill.name)}.png`}
                      alt={skill.name}
                      className="skill-image"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
