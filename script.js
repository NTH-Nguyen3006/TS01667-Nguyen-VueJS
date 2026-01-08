$("#labs>tbody").children().toArray().forEach(tr => {
    const content = tr.firstElementChild.innerHTML.replace(" ", "").toLowerCase();
    const linkTag = document.createElement("a");
    linkTag.href = "./" + content;
    linkTag.className = "btn btn-primary";
    linkTag.innerText = "Xem ngay"
    tr.style.lineHeight = "3"
    tr.lastElementChild.appendChild(linkTag);
    tr.lastElementChild.style = "text-align: center;"
});