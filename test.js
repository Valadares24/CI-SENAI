const saudacao = require('./hello');
// Teste com erro intencional
const resultado = saudacao("Mundo");
const esperado = "Hello, Mundo!"; // ⚠️ Erro proposital - deveria ser "Olá, Mundo!"
const esperado = "Olá, Mundo!"; // ✅ Corrigidoconsole.error(`❌ FALHA: esperado "${esperado}", mas recebeu "${resultado}"`);
process.exit(1); // Faz o CI falhar
}
console.log("✅ Todos os testes passaram!");
