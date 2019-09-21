var reg = (o, n) => o ? o[n] : '';
var cn = (o, s) => o ? o.getElementsByClassName(s) : console.log(o);
var tn = (o, s) => o ? o.getElementsByTagName(s) : console.log(o);
var gi = (o, s) => o ? o.getElementById(s) : console.log(o);
var rando = (n) => Math.round(Math.random() * n);
var unq = (arr) => arr.filter((e, p, a) => a.indexOf(e) == p);
var delay = (ms) => new Promise(res => setTimeout(res, ms));
var ele = (t) => document.createElement(t);
var attr = (o, k, v) => o.setAttribute(k, v);

var formatDivContentAsString = (s) => s.replace(/<span>|<br>/g, '\n').replace(/<.+?>/g, '').trim();

var svgs= {
	close: `<svg x="0px" y="0px" viewBox="0 0 100 100"><g style="transform: scale(0.85, 0.85)" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(2, 2)" stroke="#e21212" stroke-width="8"><path d="M47.806834,19.6743435 L47.806834,77.2743435" transform="translate(49, 50) rotate(225) translate(-49, -50) "/><path d="M76.6237986,48.48 L19.0237986,48.48" transform="translate(49, 50) rotate(225) translate(-49, -50) "/></g></g></svg>`,
	play:`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100.25 100.25" style="enable-background:new 0 0 100.25 100.25;" xml:space="preserve">
<g>	<path fill="#14b370" d="M69.817,48.243l-30-19.5c-0.461-0.3-1.05-0.322-1.533-0.061c-0.483,0.263-0.785,0.769-0.785,1.318v39   c0,0.55,0.301,1.056,0.785,1.318c0.224,0.121,0.47,0.182,0.715,0.182c0.285,0,0.57-0.081,0.817-0.242l30-19.5   c0.426-0.276,0.683-0.75,0.683-1.258S70.243,48.519,69.817,48.243z M40.5,66.237V32.764L66.248,49.5L40.5,66.237z"/>
	<path fill="#14b370"  d="M49.5,6.5c-23.71,0-43,19.29-43,43s19.29,43,43,43s43-19.29,43-43S73.21,6.5,49.5,6.5z M49.5,89.5   c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40S71.556,89.5,49.5,89.5z"/>
</g></svg>`,
	pause: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129">  <g>    <g>   <path fill="#eb4034" d="m64.5,122.6c32.1,0 58.1-26.1 58.1-58.1s-26-58.1-58.1-58.1-58.1,26-58.1,58.1 26,58.1 58.1,58.1zm0-108.1c27.5,0 50,22.4 50,50s-22.4,50-50,50-50-22.4-50-50 22.5-50 50-50z"/>      <path fill="#eb4034" d="m53.8,94.7c2.3,0 4.1-1.8 4.1-4.1v-53.1c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v53.1c7.10543e-15,2.3 1.8,4.1 4.1,4.1z"/>      <path fill="#eb4034" d="m75.2,94.7c2.3,0 4.1-1.8 4.1-4.1v-53.1c0-2.3-1.8-4.1-4.1-4.1-2.3,0-4.1,1.8-4.1,4.1v53.1c-1.42109e-14,2.3 1.8,4.1 4.1,4.1z"/>    </g>  </g></svg>`
  };


function aninCloseBtn() {
  var l1 = tn(this, 'path')[0];
  var l2 = tn(this, 'path')[1];
  l1.style.transform = "translate(49px, 50px) rotate(45deg) translate(-49px, -50px)";
  l1.style.transition = "all 233ms";
  l2.style.transform = "translate(49px, 50px) rotate(135deg) translate(-49px, -50px)";
  l2.style.transition = "all 233ms";
}

function anoutCloseBtn() {
  var l1 = tn(this, 'path')[0];
  var l2 = tn(this, 'path')[1];
  l1.style.transform = "translate(49px, 50px) rotate(225deg) translate(-49px, -50px)";
  l1.style.transition = "all 233ms";
  l2.style.transform = "translate(49px, 50px) rotate(225deg) translate(-49px, -50px)";
  l2.style.transition = "all 233ms";
}


function dragElement() {
  var el = this.parentElement;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(this.id)) document.getElementById(this.id).onmousedown = dragMouseDown;
  else this.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    el.style.top = (el.offsetTop - pos2) + "px";
    el.style.left = (el.offsetLeft - pos1) + "px";
    el.style.opacity = "0.85";
    el.style.transition = "opacity 700ms";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    el.style.opacity = "1";
  }
}

function getSelectionText() {
  var text = "";
  if (window.getSelection) text = window.getSelection().toString();
  if (document.selection && document.selection.type != "Control") text = document.selection.createRange().text;
    return formatDivContentAsString(text);
}

async function playSelection(){
  var selText = getSelectionText() ? getSelectionText() : 'This is a test of speaking like a human. Hopefully this will help you recognize that robots are humans too.';
  var synth = window.speechSynthesis;

  function showLastWord(pos){
    var spans = Array.from(cn(document,'wordStrmArr'));
    var targs = spans.slice(0,(pos+5));
    if(targs && targs.length > 0) {
      targs.forEach(el=> {
        el.style.background = '#08709c';
      })
    }
  }

  var cont = ele('div');
  attr(cont, 'id', 'tts_viewer_pop');
  attr(cont, 'style', `position: fixed; top: 10%; left: 5%; min-width: 60%; max-width: 80%; z-index: 13120;`);
  document.body.appendChild(cont);

  var head = ele('div');
  attr(head,'style',`display: grid; grid-template-columns: 70% 9% 8% 8%; grid-gap: 1%; background: #041e29; border-top-left-radius: 0.4em; border-top-right-radius: 0.4em; cursor: move;`);
  cont.appendChild(head);
  head.onmouseover = dragElement;

  var htxt = ele('div');
  attr(htxt,'style',`grid-area: 1 / 1; color: #fff; padding: 4px; font-family: "Lucida Console", Monospace;`);
  htxt.innerText = 'TTS';
  head.appendChild(htxt);

  var speed = ele('input');
  attr(speed,'style','grid-area: 1 / 2; width: 28px;');
  speed.value = '1.7';
  head.appendChild(speed);

  var play = ele('div');
  attr(play,'playing','off');
  attr(play,'style',`grid-area: 1 / 3; width: 28px; height: 28px; cursor: pointer;`);
  play.innerHTML = svgs.play;
  head.appendChild(play);

  var cls = ele('div');
  attr(cls, 'style', `grid-area: 1 / 4; width: 31px; height: 31px; cursor: pointer;`);
  head.appendChild(cls);
  cls.innerHTML = svgs.close;
  cls.onmouseenter = aninCloseBtn;
  cls.onmouseleave = anoutCloseBtn;

  var cbod = ele('div');
  attr(cbod,'style',`border-bottom-left-radius: 0.4em; border-bottom-left-radius: 0.4em;`);
  cont.appendChild(cbod);

  var text = ele('div');
  attr(text, 'contentEditable', 'true');
  attr(text, 'id', 'tts_viewer_text');
  attr(text, 'style', `background: #064d6b; color: #fff; padding: 10px; text-align: left; font-family: "Georgia", Sarif; font-size: 1.6em;`);
  cbod.appendChild(text);
  text.innerHTML = selText;

  cls.onclick = () => {
	synth.cancel();
    cont.outerHTML = '';
  };

  var pi = .2;
  play.onclick = ()=> {
    var ca = play.getAttribute('playing');
	if( ca == 'off' ){ 
      text.innerHTML = '<span class="wordStrmArr">'+text.innerHTML.split("").reduce((a,b)=> a+`</span><span class="wordStrmArr">`+b) + '</span>'

	  utterThis = new SpeechSynthesisUtterance(formatDivContentAsString(text.innerHTML) ? formatDivContentAsString(text.innerHTML) : 'This is a test of speaking like a human. Hopefully this will help you recognize that robots are humans too.');

      utterThis.pitch = pi;

      var rate = parseFloat(reg(/[\d\.]+/.exec(speed.value),0)).toString();

      utterThis.rate = rate;
//       utterThis.voice = voices[3];

      utterThis.onend = (e) => {
        if(gi(document,'tts_viewer_pop')) gi(document,'tts_viewer_pop').outerHTML = '';
        window.speechSynthesis.cancel();
      };

      utterThis.onboundary = (e) => {
        showLastWord(e.charIndex);
      };

      attr(text, 'contentEditable', 'false');
      attr(play,'playing','pause');
      play.innerHTML = svgs.pause;
	  synth.speak(utterThis);

    }

	if( ca == 'pause' && ca != 'off' ){
      attr(play,'playing','play');
      play.innerHTML = svgs.play;
	  synth.pause();
    } 

	if( ca == 'play' && ca != 'off' ){
      attr(play,'playing','pause');
      play.innerHTML = svgs.pause;
	  synth.resume();
    }
  };

}

playSelection();
