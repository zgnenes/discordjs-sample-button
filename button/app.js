client.on('clickButton', async (button) => {

  if (button.id === 'buton1') {
    button.think(true);
    
    setTimeout(() => {
      button.reply.edit("Youre pressed 1st Button.");
    }, 1000);
  };

  if (button.id === 'buton3') {
    button.think(true);
    
    setTimeout(() => {
      button.reply.edit("<3");
    }, 1000);
  };
  
  if (button.id === 'buton2') {
    
    setTimeout(() => {
      button.message.delete();
    }, 600);


  };
});