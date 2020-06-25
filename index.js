var target = require('target-menu');
var Encrypt = require('ciphervgnr');
var RL = require('readline-sync');
const version = require('./package.json').version;

var control = new target.Controls();

var menu = [
    'codificar',
    'decodificar',
    'sobre'
];

(async function main () {

    while(control.pos1 >= 0) {
        control = target.menu(control, 'red', menu);

        switch (control.pos1) {
            case -1:
                break;
            case 0:
                encodeText();
                break;
            case 1:
                decodeText();
                break;
            case 2:
                About();
                break;
            default:
                break;
        }
    }
})();

function About() {
    console.log(Object.entries(control));
    console.log(`cipher-cli\nv${version}`)
    RL.keyIn();
}

function encodeText() {
    let text = RL.question('Digite o texto a ser codificado...\n');
    let key = RL.question('Digite a chave para codificar o texto...\n');
    
    process.stdout.write(Encrypt(text, key));
    process.stdout.write('\nPressione qualquer tecla para continuar...')
    RL.keyIn();
}

function decodeText() {
    let text = RL.question('Digite o texto a ser decodificado...\n');
    let key = RL.question('Digite a chave que decodifica o texto...\n');
    
    process.stdout.write(Encrypt(text, key, true));
    process.stdout.write('\nPressione qualquer tecla para continuar...')
    RL.keyIn();
}