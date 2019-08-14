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
    
    loggedUser.dislikes.push(targetUser._id);

    // Linha abaixo necessária pra modificacao com o push ser salvo no banco
    await loggedUser.save();

    return res.json(loggedUser)

  }
}