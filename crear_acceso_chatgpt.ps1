# Script para crear acceso directo a ChatGPT con icono
$WshShell = New-Object -comObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut("$env:USERPROFILE\Desktop\ChatGPT.lnk")

# Configurar el acceso directo
$Shortcut.TargetPath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$Shortcut.Arguments = "--new-window https://chat.openai.com"
$Shortcut.WorkingDirectory = "C:\Program Files\Google\Chrome\Application"
$Shortcut.WindowStyle = 1
$Shortcut.Description = "Acceso directo a ChatGPT"

# Intentar usar el icono de Chrome si existe, sino usar el icono por defecto
$ChromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$EdgePath = "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"

if (Test-Path $ChromePath) {
    $Shortcut.IconLocation = "$ChromePath,0"
} elseif (Test-Path $EdgePath) {
    $Shortcut.TargetPath = $EdgePath
    $Shortcut.Arguments = "--new-window https://chat.openai.com"
    $Shortcut.WorkingDirectory = "C:\Program Files (x86)\Microsoft\Edge\Application"
    $Shortcut.IconLocation = "$EdgePath,0"
} else {
    # Usar navegador por defecto
    $Shortcut.TargetPath = "cmd.exe"
    $Shortcut.Arguments = "/c start https://chat.openai.com"
    $Shortcut.WorkingDirectory = "C:\Windows\System32"
}

# Guardar el acceso directo
$Shortcut.Save()

Write-Host "Acceso directo creado en el escritorio: ChatGPT.lnk"
Write-Host "Para obtener el icono oficial de ChatGPT:"
Write-Host "1. Descarga el icono desde: https://cdn.oaistatic.com/assets/favicon-32x32-630a2b99.png"
Write-Host "2. Convierte el PNG a ICO usando una herramienta online"
Write-Host "3. Guarda el archivo como chatgpt.ico"
Write-Host "4. Haz clic derecho en el acceso directo > Propiedades > Cambiar icono"
