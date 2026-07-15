/* ==========================================
   EASY CODE
   MATRIX BACKGROUND
========================================== */

const canvas = document.getElementById("matrix");

if (canvas) {

    const ctx = canvas.getContext("2d");

    /* ==========================================
       SETTINGS
    ========================================== */

    const letters =
        "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*{}[]<>+-=*/";

    const fontSize = 16;

    let columns = 0;
    let drops = [];

    let matrixInterval;

    /* ==========================================
       RESIZE CANVAS
    ========================================== */

    function resizeCanvas() {

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        columns = Math.floor(canvas.width / fontSize);

        drops = [];

        for (let i = 0; i < columns; i++) {

            drops[i] = Math.random() * canvas.height;

        }

    }

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    /* ==========================================
       DRAW MATRIX
    ========================================== */

    function drawMatrix() {

        ctx.fillStyle = "rgba(5,5,5,0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "#00ff88";
        ctx.font = `${fontSize}px Share Tech Mono`;

        ctx.shadowColor = "#00ff88";
        ctx.shadowBlur = 8;

        for (let i = 0; i < drops.length; i++) {

            const text = letters.charAt(

                Math.floor(Math.random() * letters.length)

            );

            ctx.fillText(

                text,

                i * fontSize,

                drops[i] * fontSize

            );

            if (

                drops[i] * fontSize > canvas.height &&

                Math.random() > 0.975

            ) {

                drops[i] = 0;

            }

            drops[i]++;

        }

    }

    /* ==========================================
       START ANIMATION
    ========================================== */

    function startMatrix() {

        if (!matrixInterval) {

            matrixInterval = setInterval(drawMatrix, 35);

        }

    }

    function stopMatrix() {

        clearInterval(matrixInterval);

        matrixInterval = null;

    }

    startMatrix();

    /* ==========================================
       PAUSE WHEN TAB IS HIDDEN
    ========================================== */

    document.addEventListener("visibilitychange", () => {

        if (document.hidden) {

            stopMatrix();

        } else {

            startMatrix();

        }

    });

}