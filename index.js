const TelegramBot = require('node-telegram-bot-api');


const token = '7570626039:AAGQ0L2nZdaz2KEkPqn2gA3ABjkbJ4IhFWA';


const bot = new TelegramBot(token, { polling: true });


bot.on('new_chat_members', (msg) => {
    const newMember = msg.new_chat_members ? msg.new_chat_members[0].first_name : 'Membro';
    const BoasVindas = `Bem-vindo(a) ${newMember}! 🎉 Deixe sua dúvida no chat ou aguarde até que um membro da equipe entre em contato com você para resolução do seu problema. Você também pode me fazer uma pergunta!`;

    bot.sendMessage(msg.chat.id,BoasVindas);
   console.log('NOVO USUÁRIO: ',BoasVindas);
});


function handleMessage(msg) {
    const chatId = msg.chat.id;


    if (!msg.text) {
        return; 
    }


    const messageText = msg.text.toLowerCase(); 

    
    console.log('Mensagem recebida:', messageText); // Log para depuração
    
    if (messageText.includes('olá') || messageText.includes('oi') || messageText.includes('/start')) {
        bot.sendMessage(chatId, 'Olá! Como posso ajudar você hoje?');
    } else if (
        messageText.includes('não recebi os dados') ||
        messageText.includes('não recebi')||
        messageText.includes('quando recebo?') ||
        messageText.includes('quando recebo') ||
        messageText.includes('quando vou receber') ||
        messageText.includes('até agora não recebi os dados') ||
        messageText.includes('os dados não foram enviados') ||
        messageText.includes('os dados não foram enviado a mim') ||
        messageText.includes('paguei mas não recebi') ||
        messageText.includes('paguei e não recebbi')||
        messageText.includes('não recebi nada') ||
        messageText.includes('não recebi') ||
        messageText.includes('paguei mas não enviaram nada para mim')||
        messageText.includes('ainda não recebi')||
        messageText.includes('ainda não me mandaram os dados')||
        messageText.includes('porque ainda não recebi?')||
        messageText.includes('por que ainda não recebi?')||
        messageText.includes('por quê ainda não recebi?')||
        messageText.includes('porquê ainda não recebi?')||
        messageText.includes('por que ainda não recebi os dados?')||
        messageText.includes('por quê ainda não recebi os dados?')||
        messageText.includes('porquê ainda não recebi os dados?')||
        messageText.includes('como recebo?')||
        messageText.includes('como recebo')
    ) {
        bot.sendMessage(chatId, 'Os dados serão enviados em um prazo de até 48 horas. Caso tenha passado as 48 horas e você ainda naõ recebeu, aguarde o contato de um dos nosso suportes.');
    } else if (
        messageText.includes('fiz o pagamento mas não coloquei os dados') ||
        messageText.includes('fiz o pagamento, mas não coloquei os dados') ||
        messageText.includes('fiz o pagamento, mas não coloquei os dados, o que faço?') ||
        messageText.includes('acabei não colocando os dados') ||
        messageText.includes('acabei não colocando os dados, o que faço') ||
        messageText.includes('não coloquei meu telefone')||
        messageText.includes('paguei mas não coloquei meu telefone')||
        messageText.includes('paguei mas não coloquei meu celular')||
        messageText.includes('paguei mas não coloquei meu número de telefone')||
        messageText.includes('paguei mas não coloquei meu numero de telefone')||
        messageText.includes('paguei mas não coloquei meu numero de celular')||
        messageText.includes('paguei mas não coloquei meu número de whatsapp')||
        messageText.includes('paguei mas não coloquei meu numero de whatsapp')||
        messageText.includes('Comprei com cripto mais não enviei preenchi com minha carteira')||
        messageText.includes('paguei mas esqueci de colocar meus dados')||
        messageText.includes('paguei e não coloquei minha carteira')||
        messageText.includes('paguei e não coloquei meu nome')||
        messageText.includes('paguei e não coloquei meu numero')||
        messageText.includes('paguei e não coloquei o celular')||
        messageText.includes('Apenas paguei e não coloquei os dados')
        

    ) {
        bot.sendMessage(chatId, 'Se efetuou o pagamento e esqueceu de colocar os dados. Isso significa que terá que aguardar o contato de um dos nossos administradores.');
    } else if (
        messageText.includes('quero reembolso') ||
        messageText.includes('recebi mas está errado')||
        messageText.includes('recebi mais está errado')||
        messageText.includes('recebi mas está errado')||
        messageText.includes('os dados estão errados')||
        messageText.includes('os dados estão errados, quero meu dinheiro de volta')||
        messageText.includes('quero meu dinheiro de volta')||
        messageText.includes('os dados já vieram da forma que eu queria') ||
        messageText.includes('os dados vieram errados') ||
        messageText.includes('os dados estão imcompletos') ||
        messageText.includes('os dados estão faltando')
    ) {
        bot.sendMessage(chatId, 'Caso acredite que os dados estão incorretos, imcompletos ou não vieram da forma que imaginava, aguarde o contato do nosso suporte para uma resposta e solução personalizada');
    } else if (
        messageText.includes('paguei com cripto, mas não recebi os dados') ||
        messageText.includes('paguei com cripto mas não coloquei minha carteira') ||
        messageText.includes('paguei com cripto') ||
        messageText.includes('paguei com cripto mas não coloquei meu telefone') ||
        messageText.includes('paguei com cripto mas não coloquei meu fone') ||
        messageText.includes('paguei com cripto mas não coloquei meu celular') ||
        messageText.includes('paguei com cripto mas não coloquei meu número') ||
        messageText.includes('paguei com cripto mas não coloquei meu número de celular') ||
        messageText.includes('paguei com cripto mas não coloquei meu número de whatsapp') ||
        messageText.includes('paguei com cripto mas não coloquei meu whatsapp')||
        messageText.includes('paguei e não coloquei meus dados de contato')||
        messageText.includes('paguei mas não coloquei meu dados')||
        messageText.includes('paguei mas não coloquei meu dados de contato')||
        messageText.includes('paguei e esqueci de colocar os dados')

    ) {
        bot.sendMessage(chatId, 'Se você pagou e esqueceu de vincular algum dado como carteira de pagamento, número de whatsapp ou nome, terá que aguardar o contato do nosso suporte para um atendimento e resolução personalizada para seu caso.');
    } else {
        bot.sendMessage(chatId, 'Desculpe, não entendi sua pergunta. Pode reformular? Atente-se para erros ortográficos e espaços adicionais, ou falta deles, nas perguntas.');
    }
}

// Adiciona um manipulador para mensagens de texto
bot.on('message', handleMessage);

// Adiciona um manipulador para erros de polling
bot.on('polling_error', (error) => {
    console.error('Polling Error:', error);
});
