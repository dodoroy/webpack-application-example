import _ from 'lodash'
import printMe from './print.js'
import './style.css'
import Icon from './icon.png'

printMe();

let msg = _.join(['hello', 'webpack'])
alert(msg)

var myIcon = new Image()
myIcon.src = Icon
document.body.appendChild(myIcon)