const fs = require("fs");
const pontuacao = 40


LeArquivo();


function LeArquivo() {
  try {
    const valorSalvoNoArquivo = fs.readFileSync("arquivo.txt", "utf8"); // lê o arquivo.txt
    console.log("data: ", data);
    if(pontuacao > Number(valorSalvoNoArquivo)){
      escreveNoArquivo(pontuacao.toString());
    }
  } catch (err) {
    console.error(err);
  }
}

function escreveNoArquivo(conteudo) {
  try {
    fs.writeFileSync("arquivo.txt", conteudo, "utf8"); // escreve no arquivo.txt
    console.log("O arquivo foi salvo com sucesso!");
  } catch (erro) {
    console.error(erro);
  }
}
