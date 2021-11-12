const rock = document.querySelector('.batu')
const scissor = document.querySelector('.gunting')
const paper = document.querySelector('.kertas')
const information = document.querySelector('.information')
const computerPicture = document.querySelector('.img-komputer')
const playerPictures = document.querySelectorAll('.suit-image')

const findComputerChoice = () => {
  const computerChoice = Math.random()
  if (computerChoice < 0.34) return `batu`
  if (computerChoice >= 0.34 && computerChoice <= 0.67) return `gunting`
  return `kertas`
}

const getGameResult = (playerChoice, computerChoice) => {
  if (playerChoice == computerChoice) return 'DRAW !'
  if (playerChoice == 'batu')
    return computerChoice == 'gunting' ? 'PLAYER 1 WIN !' : 'COM WIN !'
  if (playerChoice == 'gunting')
    return computerChoice == 'batu' ? 'COM WIN !' : 'PLAYER 1 WIN !'
  if (playerChoice == 'kertas')
    return computerChoice == 'gunting' ? 'COM WIN !' : 'PLAYER 1 WIN !'
}

const shufflePictures = () => {
  const pictures = ['batu', 'gunting', 'kertas']
  const startTime = new Date().getTime()
  const refreshImg = document.getElementsByClassName('refresh-img')
  let i = 0
  setInterval(() => {
    if (new Date().getTime() - startTime > 1500) {
      clearInterval
      return
    }
    computerPicture.setAttribute('src', 'assets/game/' + pictures[i++] + '.png')
    if (i == pictures.length) i = 0
  }, 100)
}

const runTheGame = () => {
  playerPictures.forEach((clickedPicture) => {
    clickedPicture.addEventListener('click', function () {
      const playerChoice = clickedPicture.className
      const computerChoice = findComputerChoice()
      const result = getGameResult(playerChoice, computerChoice)

      shufflePictures()

      setTimeout(() => {
        information.innerText = result
        computerPicture.setAttribute('src', `assets/game/${computerChoice}.png`)
      }, 1500)
      information.innerText = ''
    })
  })
}

runTheGame()
