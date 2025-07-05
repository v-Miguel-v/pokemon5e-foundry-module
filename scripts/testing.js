const fancyStyle = "font-size: 15px; background-color: black; color: cyan";
const infoStyle = "font-size: 12px; background-color: grey; color: white; font-style: italic";

console.log("%c¡Mira Mami! Estoy Hackeando en FoundryVTT~\nEste mensaje aparece apenas se carga el módulo, je je je.", fancyStyle);

Hooks.on("init", function() {
	console.log("%cEste código se ejecuta una vez que Foundry VTT comienza su flujo de inicialización.", infoStyle);
});

Hooks.on("ready", function() {
	console.log("%cEste código se ejecuta una vez que la inicialización principal está lista y los datos del juego están disponibles.", infoStyle);
});