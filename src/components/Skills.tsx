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

  { name: "React", category: "Frameworks" },
  { name: "Vite", category: "Frameworks" },

  { name: "Unity", category: "Moteurs de jeu" },
  { name: "Unreal Engine", category: "Moteurs de jeu" },
];

// Fonction pour convertir les noms en noms de fichiers
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
          <h2>Compétences</h2>
        </div>

        {["Langages", "Frameworks", "Moteurs de jeu"].map((category) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            <div className="skills-grid">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div className="skill-item" key={index}>
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
