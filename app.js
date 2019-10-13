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

function createTd(text) {
    const td = document.createElement('td')
    td.textContent = text
    return td
}

function createTr() {
  const tr = document.createElement('tr')
    return tr
} 

function createRow(data) {
  const tr = createTr()
  const topic = createTd(data.topic)
  const title = createTd(data.title)
  const price = createTd(data.price)
//   const color = createTd(data.color)
  tr.appendChild(topic)
  tr.appendChild(title)
  tr.appendChild(price)
//   tr.appendChild(color)
  return tr
}

function createTable(arrayOfData) {
  const table = document.createElement('table')

  arrayOfData.forEach(function(rowData) {
    const row = createRow(rowData)
    table.appendChild(row)
  })

  return table
}

const generatedTable = createTable(data)
document.body.appendChild(generatedTable)










