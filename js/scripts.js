var Peer = require('simple-peer');
var peer = new Peer({
  initiator: location.hash === '#init',
  trickle: false
});


peer.on('signal', function (data) {
  document.getElementById('ourId').value = JSON.stringify(data)
})

document.getElementById('connect').addEventListener('click', () => {
  var otherId = JSON.parse(document.getElementById('otherId').value)
  peer.signal(otherId)
})

document.getElementById('send').addEventListener('click', () => {
  var yourMessage = document.getElementById('yourMessage').value
  document.getElementById('outMessage').append(yourMessage);
  document.getElementById('outMessage').append('\n');
  peer.send(yourMessage);
  document.getElementById('yourMessage').value = '';
  document.getElementById('yourMessage').append('\n');

})

peer.on('data', (data) => {
  document.getElementById('inMessage').textContent += data + "\n"
})
