<a name="readme-top"></a>

<div align="center">

![npm-shield]
![node-shield]

<img width="300px" src="./public/logo.svg" alt="Logo" width="800" />

## Prueba Tecnica

La prueba es la creación de una aplicación web enfocada en la visualización,
búsqueda y gestión de un catálogo de teléfonos móviles. La aplicación debe permitir a los
usuarios consultar detalles específicos de cada dispositivo, así como gestionar un carrito de
compras de manera eficiente. \
[Diseño de Figma](<https://www.figma.com/design/Nuic7ePgOfUQ0hcBrUUQrb/Labs-%2F-Zara-Web-Challenge-(Smartphones)?node-id=0-1>) · [Prototipo de Figma](<https://www.figma.com/proto/Nuic7ePgOfUQ0hcBrUUQrb/Labs-%2F-Zara-Web-Challenge-(Smartphones)?page-id=1%3A121&node-id=20620-406&node-type=canvas&viewport=-127%2C-2609%2C0.17&t=kBCv81QvTf1Tbzjs-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=20620%3A1497&show-proto-sidebar=1>) · [API](https://prueba-tecnica-api-tienda-moviles.onrender.com/docs/)

</div>

<details>
<summary>Tabla de contenidos</summary>

- [Prueba Tecnica](#prueba-tecnica)
- [Para empezar](#para-empezar)
  - [Prerequisitos](#prerequisitos)
  - [Instalación](#instalación)
- [Contribuir al proyecto](#contribuir-al-proyecto)
- [🛠️ Stack](#️-stack)

</details>

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Para empezar

### Prerequisitos

- NVM (recomendado para asegurar versión de Node) ver [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating)

  ```sh
  nvm use
  # o
  nvm use <version>
  ```

  > Si quieres automatizar el proceso, puedes crear un script siguiendo la [documentación oficial](https://github.com/nvm-sh/nvm?tab=readme-ov-file#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

<details>
	<summary>Pequeño script de automatización</summary>
	
- En Linux/MacOS:
	```sh
	# .bashrc | .zshrc | cualquier archivo de configuración
	# pequeño script para cambiar de version al entrar al directorio
	cd() {
  builtin cd "$@"
		if [[ -f .nvmrc ]]; then
			nvm use > /dev/null
			# Si quieres que te diga la versión
			nvm use
		fi
	}
	```

- En Windows:

  ```powershell
  # $PROFILE
  function Change-Node-Version {
  	param($path)
  	& Set-Location $path
  	$pwd = pwd
  	if ( Test-Path "$pwd\\.nvmrc" ) {
  		$version = Get-Content .nvmrc
  		nvm use $version
  	}
  }
  New-Alias -Name cd -Value Change-Node-Version -Force -Option AllScope
  ```

  </details>

- PNPM (es nuestra recomendación por su eficiencia y rapidez)

  ```sh
  npm install -g pnpm
  ```

- o NPM

  ```sh
  npm install npm@latest -g
  ```

### Instalación

1. Clona el repositorio

   ```sh
   git clone https://github.com/AlvaroDesigns/prueba-tecnica-zara.git
   ```

2. Instala los paquetes de NPM

   ```sh
   npm install
   ```

3. Ejecuta el proyecto

   - Arrancar el proyecto

   ```sh
   npm run dev
   ```

4. Test unitarios

   - Ejecuta los test

   ```sh
   npm run dev
   ```

   - Ejecuta los test en la pantalla de UI

   ```sh
   npm run test-ui
   ```

   - Ejecuta los test con la tabla de cobertura en la consola

   ```sh
   npm run test-coverage
   ```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## Contribuir al proyecto

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. ¡Cualquier contribución que hagas es **muy apreciada**!

Si tienes alguna sugerencia que podría mejorar el proyecto, por favor haz un [_fork_](https://github.com/AlvaroDesigns/prueba-tecnica-zara/fork) del repositorio y crea una [_pull request_](https://github.com/AlvaroDesigns/prueba-tecnica-zara/pulls). También puedes simplemente abrir un [_issue_](https://github.com/AlvaroDesigns/prueba-tecnica-zara/issues) con la etiqueta "enhancement".

Aquí tienes una guía rápida:

1. Haz un [_fork_](https://github.com/AlvaroDesigns/prueba-tecnica-zara/fork) del Proyecto
2. Clona tu [_fork_](https://github.com/AlvaroDesigns/prueba-tecnica-zara/fork) (`git clone <URL del fork>`)
3. Añade el repositorio original como remoto (`git remote add upstream <URL del repositorio original>`)
4. Crea tu Rama de Funcionalidad (`git switch -c feature/CaracteristicaIncreible`)
5. Realiza tus Cambios (`git commit -m 'Add: alguna CaracterísticaIncreible'`)
6. Haz Push a la Rama (`git push origin feature/CaracteristicaIncreible`)
7. Abre una [_pull request_](https://github.com/AlvaroDesigns/prueba-tecnica-zara/pulls)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

## 🛠️ Stack

- [![react][react-badge]][react-url] - The web framework for content-driven websites.
- [![react][react-router-badge]][react-router-url] - A user‑obsessed, standards‑focused, multi‑strategy router you can deploy anywhere.
- [![Typescript][typescript-badge]][typescript-url] - JavaScript with syntax for types.
- [![vitest][vitest-badge]][vitest-url] - A Vite-native testing framework. It's fast!

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>

[react-url]: https://es.react.dev
[react-router-url]: https://reactrouter.com
[typescript-url]: https://www.typescriptlang.org/
[vitest-url]: https://vitest.dev
[react-badge]: https://img.shields.io/badge/React-fff?style=for-the-badge&logo=react&logoColor=58c4dc&color=000
[react-router-badge]: https://img.shields.io/badge/React_Router-fff?style=for-the-badge&logo=reactrouter&logoColor=f44250&color=000
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[vitest-badge]: https://img.shields.io/badge/Vitest-fff?style=for-the-badge&logo=vitest&logoColor=acd268&color=000
[npm-shield]: https://img.shields.io/badge/npm-10.2.4-blue?style=for-the-badge
[node-shield]: https://img.shields.io/badge/node-20.11.1-green?style=for-the-badge
[forks-url]: https://github.com/AlvaroDesigns/prueba-tecnica-zara/network/members
[stars-url]: https://github.com/AlvaroDesigns/prueba-tecnica-zara/stargazers
[issues-url]: https://github.com/AlvaroDesigns/prueba-tecnica-zara/issues
