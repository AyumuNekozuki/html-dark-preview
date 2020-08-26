function removeTag(str, arrowTag) {
  // 配列形式の場合は'|'で結合
  if ((Array.isArray ?
      Array.isArray(arrowTag)
      : Object.prototype.toString.call(arrowTag) === '[object Array]')
  ){
      arrowTag = arrowTag.join('|');
  }

  // arrowTag が空の場合は全てのHTMLタグを除去する
  arrowTag = arrowTag ? arrowTag : '';

  // パターンを動的に生成
  var pattern = new RegExp('(?!<\\/?(' + arrowTag + ')(>|\\s[^>]*>))<("[^"]*"|\\\'[^\\\']*\\\'|[^\\\'">])*>', 'gim');
  return str.replace(pattern, '');
}

function AutoLink(str) {
  var regexp_url = /((h?)(ttps?:\/\/[a-zA-Z0-9.\-_@:/~?%&;=+#',()*!]+))/g; // ']))/;
  var regexp_makeLink = function(all, url, h, href) {
      return '<a href="h' + href + '">' + url + '</a>';
  }
  return str.replace(regexp_url, regexp_makeLink);
}

function autonicolink(str){
  str = str.replace("sm", "https://nico.ms/sm"); 
  str = str.replace("nm", "https://nico.ms/nm");
  str = str.replace("nm", "https://nico.ms/so");

  str = str.replace("user/", "https://nico.ms/user/");
  str = str.replace("mylist/", "https://nico.ms/mylist/");
  str = str.replace("series/", "https://nico.ms/series/");

  str = str.replace("lv", "https://nico.ms/lv");
  str = str.replace("ch", "https://nico.ms/ch");
  str = str.replace("ar", "https://nico.ms/ar"); //ブロマガ

  return str.replace();
}

function onkey(){
  var text = document.getElementById("input-area").value;

  text = text.replace("\n", "");
  text = removeTag(text, ['br','strong','i','s','u','span','font']);
  text = autonicolink(text);
  text = AutoLink(text);
  text = text.replace(">https://nico.ms/", ">");

  document.getElementById("preview-light").innerHTML = text;
  document.getElementById("preview-dark").innerHTML = text;
}

function copyToClipboard() {
  var copyTarget = document.getElementById("input-area");
  copyTarget.select();
  document.execCommand("Copy");
}

function dishide(){
  document.getElementById("help-modal").classList.add("modalshow");
  document.getElementById("help-div").classList.add("modalshow");
}

function hide(){
  document.getElementById("help-modal").classList.remove("modalshow");
  document.getElementById("help-div").classList.remove("modalshow");
}