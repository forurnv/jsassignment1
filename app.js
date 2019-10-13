const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]

// Instructions
// Take the data above and display it as tiles on the page

// function createTd(text) {
//     const td = document.createElement('td')
//     td.textContent = text
//     return td
// }

// function createTr() {
//   const tr = document.createElement('tr')
//     return tr
// } 

// function createRow(info) {
//   const tr = createTr()
//   const topics = createTd(info.topic)
//   const titles = createTd(info.title)
//   const prices = createTd(info.price)
//   // const color = createTd(data.color)
//   tr.appendChild(topics)
//   tr.appendChild(titles)
//   tr.appendChild(prices)
//   // tr.appendChild(color)
//   return tr
// }

// function createTable(data) {
//   const table = document.createElement('table')

//   data.forEach(function(info) {
//     const tr = createRow(info)
//     table.appendChild(tr)
//   })
//   return table
// }

// const generatedTable = createTable(data)
// document.body.appendChild(generatedTable)


function createTopicDiv(text) {
  const topicDiv = document.createElement('div')
  topicDiv.className = "topic"
  topicDiv.textContent = text
return topicDiv
}

function createTitleDiv(text) {
  const titleDiv = document.createElement('div')
  titleDiv.className = "title"
  titleDiv.textContent = text
return titleDiv
}

function createButtonDiv(text) {
  const buttonDiv = document.createElement('div')
  buttonDiv.className = "buy-button"
  buttonDiv.textContent = text
return buttonDiv
}

function createCardDiv() {
  const card = document.createElement('div')
  card.className = "card"
return card
} 

function createRow(info) {
  const card = createCardDiv()
  const topics = createTopicDiv(info.topic)
  const titles = createTitleDiv(info.title)
  const prices = createButtonDiv(info.price)
  card.style.backgroundColor = info.color
  // const color = createTd(data.color)
  card.appendChild(topics)
  card.appendChild(titles)
  card.appendChild(prices)
  // tr.appendChild(color)
return card
}

function createTable(data) {
  const table = document.createElement('div')
  data.forEach(function(info) {
  const card = createRow(info)

  const addressCard = document.querySelector("#content")

  addressCard.appendChild(card)
  })
}

const generatedTable = createTable(data)
document.body.appendChild(generatedTable)
