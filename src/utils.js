import moment from 'moment'

export const analyze = (text) =>{
  if(text.includes('hi') || text.includes('hai') || text.includes('hello'))
     return'Hii How can i help U?'

  else if(text.includes('date'))
    return moment().format ('MMMM Da YYYY')
  else if (text.includes('time'))
    return moment().format('hh:mm:ss a')
  else if (text.includes('google'))
    return ('https://www.google.com')
  else if (text.includes('what is your name'))
    return('I am U ChatBot')
  else if (text.includes('who are you'))
    return('Hello, Im U ChatBot, Created by Chandru a  Im here to help answer your questions and provide information on a wide range of topics. How can I assist you today?')
  else if (text.includes('Versions'))
    return("my version is an 3.0")
  else if (text.includes('thankyou'))
    return('Thanks for contacting me')
  return "I can't get you . Can you rephrase the message."
}