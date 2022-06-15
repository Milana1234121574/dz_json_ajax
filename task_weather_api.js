let canvas = document.querySelector("#cnv");
let ctx = canvas.getContext('2d');
function chfilVal() {
    if (document.getElementById('ch1').checked) {
        canvas.onmousedown = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            let h = 10;
            let w = 10;
            let arrtd = document.querySelectorAll('td');
            for (let item2 of arrtd) {
                item2.onclick = function () {
                    let clr = this.getAttribute('data-color');
                    ctx.fillStyle = `${clr}`;
                }
            }
            ctx.fillRect(x - 5, y - 5, h, w);
            canvas.onmousemove = function (event) {
                ctx.fillRect(x - 5, y - 5, h++, w++);
            }
            canvas.onmouseup = function () {
                canvas.onmousemove = null;
            }
        }
    }
    else if (document.getElementById('ch2').checked) {
        canvas.onmousedown = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            let r = 10;
            let arrtd = document.querySelectorAll('td');
            for (let item2 of arrtd) {
                item2.onclick = function () {
                    let clr = this.getAttribute('data-color');
                    ctx.fillStyle = `${clr}`;
                }
            }
            ctx.beginPath();
            ctx.arc(x - 5, y - 5, r, 0, 2 * Math.PI, true);
            ctx.fill();
            ctx.closePath();
            canvas.onmousemove = function (event) {
                ctx.beginPath();
                ctx.arc(x - 5, y - 5, r++, 0, 2 * Math.PI, true);
                ctx.fill();
                ctx.closePath();
            }
            canvas.onmouseup = function () {
                canvas.onmousemove = null;
            }
        }
    }
    else if (document.getElementById('ch3').checked) {
        canvas.onmousedown = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            let h = 50;
            let w = 100;
            let arrtd = document.querySelectorAll('td');
            for (let item2 of arrtd) {
                item2.onclick = function () {
                    let clr = this.getAttribute('data-color');
                    ctx.fillStyle = `${clr}`;
                }
            }
            ctx.beginPath();
            ctx.moveTo(x - 5, y - 5);
            ctx.lineTo((x - 5) + h, (y - 5) + h);
            ctx.lineTo((x - 5), (y - 5) + w);
            ctx.lineTo((x - 5) - h, (y - 5) + h);
            ctx.lineTo((x - 5), (y - 5));
            ctx.fill();
            ctx.closePath();
            canvas.onmousemove = function (event) {
                ctx.beginPath();
                ctx.moveTo(x - 5, y - 5);
                ctx.lineTo((x - 5) + (h++), (y - 5) + (h++));
                ctx.lineTo((x - 5), (y - 5) + (w += 8));
                ctx.lineTo((x - 5) - (h++), (y - 5) + (h++));
                ctx.lineTo((x - 5), (y - 5));
                ctx.fill();
                ctx.closePath();
            }
            canvas.onmouseup = function () {
                canvas.onmousemove = null;
            }
        }
    }
    else if (document.getElementById('ch4').checked) {
        canvas.onmousedown = function (event) {
            let x = event.offsetX;
            let y = event.offsetY;
            let h = 50;
            let w = 75;
            let arrtd = document.querySelectorAll('td');
            for (let item2 of arrtd) {
                item2.onclick = function () {
                    let clr = this.getAttribute('data-color');
                    ctx.fillStyle = `${clr}`;
                }
            }
            ctx.beginPath();
            ctx.moveTo(x - 5, y - 5);
            ctx.lineTo((x - 5), (y - 5) - 75);
            ctx.lineTo((x - 5) + 50, (y - 5));
            ctx.lineTo((x - 5), (y - 5));
            ctx.fill();
            ctx.closePath();
            canvas.onmousemove = function (event) {
                ctx.beginPath();
                ctx.moveTo(x - 5, y - 5);
                ctx.lineTo((x - 5), (y - 5) - (w++));
                ctx.lineTo((x - 5) + (h++), (y - 5));
                ctx.lineTo((x - 5), (y - 5));
                ctx.fill();
                ctx.closePath();
            }
            canvas.onmouseup = function () {
                canvas.onmousemove = null;
            }
        }
    }
}