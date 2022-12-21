const ham = document.querySelector('#hamburger')
const navMenu = document.querySelector("#navMenu")
window.onscroll = () => {
  const span1 = document.querySelector("#span1")
  const span2 = document.querySelector("#span2")
  const span3 = document.querySelector("#span3")
  const header = document.querySelector('header');
  const fixNav = header.offsetTop;
  const headerColor = document.getElementById('NavText')
  const headerListColor1 = document.getElementById('NavListText1')
  const headerListColor2 = document.getElementById('NavListText2')
  const headerListColor3 = document.getElementById('NavListText3')
  const headerListColor4 = document.getElementById('NavListText4')
  // console.log(window.pageYOffset);
  // if(window.pageYOffset > 530){
  //   span1.classList.add("bg-slate-700")
  //   span1.classList.remove("bg-white")
  //   span2.classList.add("bg-slate-700")
  //   span2.classList.remove("bg-white")
  //   span3.classList.add("bg-slate-700")
  //   span3.classList.remove("bg-white")
  //   headerColor.classList.remove('text-white')
  //   headerColor.classList.add('text-black')
  //   headerListColor1.classList.remove('lg:text-white')
  //   headerListColor1.classList.add('lg:text-black')
  //   headerListColor2.classList.remove('lg:text-white')
  //   headerListColor2.classList.add('lg:text-black')
  //   headerListColor3.classList.remove('lg:text-white')
  //   headerListColor3.classList.add('lg:text-black')
  //   headerListColor4.classList.remove('lg:text-white')
  //   headerListColor4.classList.add('lg:text-black')
  // } else {
  //   span1.classList.add("bg-white")
  //   span1.classList.remove("bg-slate-700")
  //   span2.classList.add("bg-white")
  //   span2.classList.remove("bg-slate-700")
  //   span3.classList.add("bg-white")
  //   span3.classList.remove("bg-slate-700")
  //   headerColor.classList.add('text-white')
  //   headerColor.classList.remove('text-black')
  //   headerListColor1.classList.remove('lg:text-black')
  //   headerListColor1.classList.add('lg:text-white')
  //   headerListColor2.classList.remove('lg:text-black')
  //   headerListColor2.classList.add('lg:text-white')
  //   headerListColor3.classList.remove('lg:text-black')
  //   headerListColor3.classList.add('lg:text-white')
  //   headerListColor4.classList.remove('lg:text-black')
  //   headerListColor4.classList.add('lg:text-white')

  // }
  if (window.pageYOffset > fixNav) {
    header.classList.add('navbar-fixed')
    
  } else {
    header.classList.remove('navbar-fixed')
    
  }
  // if (window.pageYOffset > 448) {
  // } else {
  // }
  // while()
}

ham.addEventListener('click', () => {
  navMenu.classList.toggle("hidden")
})

function tambah() {
  let Amount = document.getElementById("loveamount")
  let amt = parseInt(Amount.value)
  console.log(amt)
  let display = amt+1
  Amount.value = display
}
function sendMessage(from, message, ANip) {
  if (from == "") {
    from = "Annonymous"
  }else if (message == "") {
    message = "Empty Message"  
  }
  else if (from != null && message != null)
      fetch(WebhookURL, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({
"content": "<@673862472519778304>",
"embeds": [
  {
    "color": 13744441,
    "fields": [
      {
        "name": "Dari:",
        "value": from,
        "inline": true
      },
      {
        "name": "Pesan:",
        "value": message,
        "inline": true
      }
    ]
  }
],
"username": "Webhook Message",
"avatar_url": "https://nul.is/cara-membuat-pesan-rahasia/1-menulis.png",
"attachments": []
})
      }).catch(err => console.error(err));
}
sendMessage("asd", "Asd", "Asd")