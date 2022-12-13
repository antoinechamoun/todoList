// footer container
const Footer = document.createElement("div")
Footer.className='footer'

const par = document.createElement("p")
par.className = 'footer-txt'
par.innerHTML=`Copyright &copy; 2022 antoinechamoun`

// append children to main div
Footer.appendChild(par)

export default Footer