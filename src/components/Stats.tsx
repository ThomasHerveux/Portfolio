import "./Stats.css";

const statsData = [
  {
    icon: "fas fa-smile",
    count: 120,
    label: "Clients satisfaits",
  },
  {
    icon: "fas fa-code",
    count: 350,
    label: "Projets terminés",
  },
  {
    icon: "fas fa-headset",
    count: 1463,
    label: "Heures de support",
  },
  {
    icon: "fas fa-user-friends",
    count: 24,
    label: "Collaborateurs",
  },
];

const Stats = () => {
  return (
    <section className="stats section" id="stats">
      <div className="container">
        <div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
          {statsData.map((stat, index) => (
            <div className="stats-item" key={index} style={{ flex: "1 0 50%", maxWidth: "50%" }}>
              <i className={stat.icon}></i>
              <span className="purecounter">{stat.count}</span>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
