  function  generateKey() {
    let result = ''; 
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    for (let i = 0; i < 16; i++) {
        result += characters[Math.floor (Math.random() * (characters.length - 1))];
    }
    return result;
  }
  console.log(generateKey());