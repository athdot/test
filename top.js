        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://athdot.github.io/test/window.html");
        var scwid = (screen.width)*(78.8/80)
        ifrm.style.width = (scwid + "px");
        ifrm.style.height = "100px";
        document.body.appendChild(ifrm);
