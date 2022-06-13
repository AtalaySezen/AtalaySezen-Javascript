function copyText() {
    const inputText = document.getElementById("copy-link");

    inputText.select();
    inputText.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(inputText.value);
}

const successWarn = document.getElementById("copy-success");
const copyButton = document.getElementById("btn-copy");

copyButton.addEventListener("click", copyText);

function copiedSuccess() {
    successWarn.classList.add("active");
}

copyButton.addEventListener("click", copiedSuccess)

setTimeout(() => {
    if (successWarn.classList.contains("active")) {
        successWarn.classList.remove("active");
    }

}, 3000);