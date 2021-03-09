const resetShell = async () => {
    let input = document.querySelector("#shellinput")
    // Just a little easter egg
    if (input.value === "clear")
    {
        const body = document.querySelector("body")
        body.remove();
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    input.value = ""
}
document.querySelector("#shellinput").addEventListener("keypress", (key) => {
    if(key.key === "Enter") {
        resetShell();
    }
})
