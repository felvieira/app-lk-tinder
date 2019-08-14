const User = require('../models/User');

module.exports = {
  async store(req, res){
    // Qdo vem da rota
    const { userId } = req.params;
    // Qdo vem do cabeçalho da requisição
    const { user } = req.headers;

    const loggedUser = await User.findById(user);
    const targetUser = await User.findById(userId);

    if(!targetUser){
      return res.status(400).json({ error: 'User not exists'})
    }
    // Se dentro do array de likes do cara que ta recebendo o like inclui o cara que ta dando like -> Match
    if(targetUser.likes.includes(loggedUser._id)){
      console.log('DEU MATCH');
    }
    
    loggedUser.likes.push(targetUser._id);

    // Linha abaixo necessária pra modificacao com o push ser salvo no banco
    await loggedUser.save();

    return res.json(loggedUser)

  }
}