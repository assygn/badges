const colors = require('colors'); 


const blockedUsers = ["1181147750759399485", "987654321098765432"];

function checkBlockedUser(client) {
  if (blockedUsers.includes(client.user.id)) {
    console.log("\n[i] Seu ID está bloqueado! O programa será encerrado.\n".red);
    process.exit(1);
  }
}

module.exports = { checkBlockedUser };
