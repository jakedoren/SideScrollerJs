const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight 

const gravity = 0.5

class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100
    }
    this.velocity = {
      x: 0,
      y: 0
    }
    this.width = 100
    this.height = 100
  }

  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y,this.width, this.height)
  }

  update() {
    this.position.y += this.velocity.y
    this.position.x += this.velocity.x
    if(this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0
    } else this.velocity.y += gravity
    this.draw()
  }
}

const player = new Player(gravity)

// Loop and update player
function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  player.update()
}

animate()

addEventListener('keydown', e => {
  switch(e.key) {
    case 'w': 
      console.log('up')
      player.velocity.y -= 8
      break
    case 'a':
      console.log('left')
      player.velocity.x -= 8
      break
    case 's': 
      console.log('down')
      break
    case 'd':
      console.log('right')
      player.velocity.x += 8
      break
  }
})