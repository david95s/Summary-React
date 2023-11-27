// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500
const produtosExerc = [
  {
    id: 1,
    nome: "Smartphone",
    preco: "R$ 2000",
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    id: 2,
    nome: "Notebook",
    preco: "R$ 3000",
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    id: 3,
    nome: "Tablet",
    preco: "R$ 1500",
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

const ArrayStd = () => {
  const styl = { marginBottom: "30px" };

  const produtos = ["Notebook", "Smartphone", "Tablet"];

  const empresas = [<li key="e1">Apple</li>, <li key="e2">Google</li>];

  const filmes = ["Before Sunrise", "Before Sunset", "Before Midnight"];

  const livros = [
    { nome: "A Game of Thrones", ano: 1996 },
    { nome: "A Clash of Kings", ano: 1998 },
    { nome: "A Storm of Swords", ano: 2000 },
  ];

  const arrMaiorQDois = produtosExerc.filter((item) => {
    return Number(item.preco.replace("R$ ", "")) >= 2000;
  });

  console.log(arrMaiorQDois);

  return (
    <div>
      <h2 style={styl}>Estudo Array</h2>

      <p style={styl}>{produtos}</p>

      <ul style={styl}>{empresas}</ul>

      <ul style={styl}>
        {filmes.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>

      <ul style={styl}>
        {livros
          .filter((kdLivr) => kdLivr.ano >= 1998)
          .map(({ nome }) => {
            return <li key={nome}>{nome}</li>;
          })}
      </ul>

      <p style={{ color: "#5ebedb", fontWeight: "bold", marginTop: "50px" }}>
        Exercicios
      </p>

      <div className="dadExer" style={{ marginBottom: "150px" }}>
        {arrMaiorQDois.map(({ id, nome, preco, cores }) => {
          return (
            <div
              key={id}
              style={{
                margin: "40px 0",
                border: "solid 1px white",
                padding: "5px 10px",
                borderRadius: "8px",
              }}
            >
              <p>Nome: {nome}</p>
              <p>Preco: {preco}</p>
              {cores.map((kdCor) => {
                return (
                  <p
                    key={kdCor}
                    style={{ backgroundColor: kdCor, color: "white" }}
                  >
                    {kdCor}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArrayStd;
