---
title: Linux
description: Imprescindible para ciberseguridad
---

# Linux

Este sistema operativo es esencial si quieres aprender ciberseguridad.
Dentro de las distribuciones preferidas para hacking están 2 qué destacan sobre las demás.
1. **[Kali Linux](https://www.kali.org/)**
2. **[Parrot OS](https://parrotsec.org/)**

Ahora veamos los principales comandos qué se utilizan en Linux

## SUDO
Es el comando por excelencia en Linux para ejecutar comandos como administrador.

```bash
sudo [comando] 
```

## Paquetes
Linux utiliza paquetes qué serían lo equivalentes a aplicaciones / programas en Windows. Cuando queremos instalar algún programa tenemos qué instalar mediante su nombre de paquete.

- Para instalar paquetes
```bash
sudo apt install [paquete]
```
- Para eliminar el paquete
```bash
sudo apt remove [paquete]
```
- Para eliminar archivos residuales
```bash
sudo apt autoremove [paquete]
```

## Archivos
Es **MUY IMPORTANTE** aprender a manejarse con archivos y directorios (carpetas) en Linux

- Para crear un archivo
```bash
touch [archivo]
```
- Para escribir texto directamente en un archivo
```bash
echo 'Escribir texto' > [archivo]
```
- Para eliminar un archivo
```bash
sudo rm [archivo]
```
- Para eliminar un directorio y sus archivos dentro de él
```bash
sudo rm -r [directorio]
```
- Para localizar un archivo *obtiene el directorio dónde está ubicado
```bash
locate [archivo]
```

## Puertos
Los más importantes y más utilizados son:

Puerto | Servicio | Descripcióm
-------|----------|------------
| 21 | FTP | Subir archivos al equipo
| 22 | SSH | Acceso remoto mediante otro equipo
| 80 | HTTP | Servicio web **(NO seguro)**
| 443 | HTTPS | Servicio web **(MÁS seguro)**

### SSH 
```bash
ssh -22 user@telefonica.com
ssh user@192.168.0.0
```

## Redes
- Muestra una lista de todas las conexiones de red activas y los puertos en escucha
```bash
netstat -tuln
```

- Muestra los equipos conectados a la red
```bash
ifconfig
```

## KALI
Captura de pantalla en Kali Linux
- Ctrl + ImprPant *entero
- Shift + Ctrl + ImprPant *trozo

## nmap
Reconocimiento de puertos abiertos. Se vuelca en el archivo
```bash
sudo nmap -p- -sVC -sC --open -sS -vvv -n -Pn [IP] -oN escaneo.txt
```

## Editores de texto
Entre algunos de los destacados están VIM y Nano
### VIM
Editor de texto para Linux
Comando para abrir un fichero
```bash
vi prueba.txt
```
Comandos 
- **Insertar:** `I`
- **Moverte:**
    - Izquierda `H`
    - Abajo `J`
    - Arriba `L`
    - Derecha `K`
- **Eliminar línea:**  pulsar 2 veces `D`
- **Guardar:** `:w`
- **Guardar y salir:** ``:wq``
- **Guardar y cambiar nombre:** `:w nombre.txt`
- **Salir y NO Guardar:** `:q!`
