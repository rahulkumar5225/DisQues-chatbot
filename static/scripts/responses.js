function getBotResponse(input) {

  let a = Math.floor(Math.random() * 4);
    if (input == "hi" || input=="hey" || input=="hello"||input=="hey there") {
      const hi=["Howdy!","hey there!","Hello","yo!!"]
        return hi[a];
    }
    else if(input == "how are you" || input=="whats up" || input=="what's up"||input=="how you doing","how are you?"){
      const hay=["Good","Alive and kicking","great","Good!!"]
      return hay[a];
    }
    else if(input == "who are you" || input == "You?" || input == "who r u" || input=="you?" || input=="who?"){
      const wry=["I am an AI chatbot, Here to assist you😊","I am a bot for your project","I am a line of codes","Shiro!"]
      return wry[a];
    }
    else if (input == "what is your name" || input == "wht is ur name" || input == "your name" || input=="name?" ){
      const wyn=["I am Shiro,an AI chatbot","Shiro","My name is Shiro","hey there! I am Shiro"]
      return wyn[a];
    }
    else if(input == "help" || input == "About disQues" || input == "about disQues" || input == "about DisQues" || input == "About disQues" || input == "About website" || input == "About project"   ||   input == "what is disQues" || input == "what is your project" || input == "what is your project all about?"){
    }
}
