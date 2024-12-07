document.getElementById("fetchButton").onclick = function() {
    fetchContent();
}

function checkEnter(event) {
    if (event.key === 'Enter') {
        fetchContent();
    }
}

function fetchContent() {
    var link = document.getElementById("urlInput").value;
    var proxy = 'https://api.codetabs.com/v1/proxy?quest=';
    document.getElementById("popup").classList.add("show");
    fetch(proxy + link)
      .then((response) => response.text())
      .then((text) => {
          document.write(text);
          document.getElementById("popup").classList.remove("show");
      });
    var all = document.getElementsByTagName("*");
    for (var i = 0, max = all.length; i < max; i++) {
      if (all[i].src) {
        all[i].src = new URL(all[i].src, link).href;
        all[i].src = proxy + all[i].src;
      }
    }
}

for (let i = 0; i < 100; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.width = Math.random() * 10 + 'px';
    dot.style.height = dot.style.width;
    dot.style.left = Math.random() * 100 + 'vw';
    dot.style.top = Math.random() * 100 + 'vh';
    dot.style.animationDuration = Math.random() * 4 + 2 + 's';
    document.body.appendChild(dot);
}
